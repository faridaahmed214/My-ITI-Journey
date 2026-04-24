import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationCenterComponent } from '../NotificationCenter/notification-center';
import { UserSidebarComponent } from '../user-sidebar/user-sidebar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NotificationCenterComponent, UserSidebarComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  private notificationService = inject(NotificationService);
  private authService = inject(AuthService);

  public notifications = this.notificationService.notifications;
  public unreadCount = this.notificationService.unreadCount;
  
  public isNotificationCenterOpen = false;
  public isUserSidebarOpen = false;
  public isMobileMenuOpen = false;

  public totalSeconds = 0;
  private timerInterval: any;

  public get userInitials(): string {
    const user = this.authService.currentUser();
    if (!user || !user.userName) return 'G';
    
    const parts = user.userName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    } else {
      return user.userName.substring(0, 2).toUpperCase();
    }
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.totalSeconds++;
      this.cdr.markForCheck();
    }, 1000);
  }

  public get timerDisplay(): string {
    const hours = Math.floor(this.totalSeconds / 3600);
    const minutes = Math.floor((this.totalSeconds % 3600) / 60);
    const seconds = this.totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  toggleNotificationCenter() {
    this.isNotificationCenterOpen = !this.isNotificationCenterOpen;
  }
  logout() {
    this.authService.logout();
    window.location.reload(); 
  }

}
