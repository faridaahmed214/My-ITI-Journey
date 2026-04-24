import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notification, NotificationType } from '../models/notification.model';
import { AuthService } from './auth.service';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseApiService<Notification> {
  private authService = inject(AuthService);

  private notificationsSignal = signal<Notification[]>([]);

  public notifications = this.notificationsSignal.asReadonly();

  public unreadCount = computed(() => 
    this.notifications().filter(n => !n.isRead).length
  );

  public activeToasts = computed(() => 
    this.notifications().filter(n => n.isToastActive)
  );

  constructor() {
    super(inject(HttpClient), 'http://localhost:3000/notifications');
    effect(() => {
      const user = this.authService.currentUser();
      if (user && user.id) {
        this.fetchNotifications(user.id);
      } else {
        this.notificationsSignal.set([]);
      }
    });
  }

  public fetchNotifications(userId: string): void {
    this.getAll(`userId=${userId}`).subscribe({
      next: (data) => {
        const withToasts = data.map(n => ({ ...n, isToastActive: false }));
        this.notificationsSignal.set(withToasts);
      },
      error: (err) => console.error('Error fetching notifications', err)
    });
  }

  public add(message: string, type: NotificationType = 'success'): void {
    const user = this.authService.currentUser();
    if (!user || !user.id) return;

    const newNotification = {
      id: Date.now().toString(),
      message,
      type,
      time: new Date(),
      isRead: false,
      userId: user.id
    };

    this.create(newNotification).subscribe({
      next: (createdNotif) => {
        const notifWithToast = { ...createdNotif, isToastActive: true };
        this.notificationsSignal.update(all => [notifWithToast, ...all]);

        setTimeout(() => {
          this.dismissToast(createdNotif.id);
        }, 3000);
      },
      error: (err) => console.error('Error adding notification', err)
    });
  }

  public dismissToast(id: string): void {
    this.notificationsSignal.update(all => 
      all.map(n => n.id === id ? { ...n, isToastActive: false } : n)
    );
  }

  public markAllAsRead(): void {
    const unread = this.notifications().filter(n => !n.isRead);
    if (unread.length === 0) return;

    unread.forEach(n => {
      this.patch(n.id, { isRead: true }).subscribe({
        next: () => {
          this.notificationsSignal.update(all => 
            all.map(item => item.id === n.id ? { ...item, isRead: true } : item)
          );
        },
        error: (err) => console.error('Error updating notification', err)
      });
    });
  }

  public clearAll(): void {
    this.notifications().forEach(n => {
      this.delete(n.id).subscribe({
        next: () => {
          this.notificationsSignal.update(all => all.filter(item => item.id !== n.id));
        },
        error: (err) => console.error('Error deleting notification', err)
      });
    });
  }
}
