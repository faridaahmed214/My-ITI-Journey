import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class ToastComponent {
  private notificationService = inject(NotificationService);

  public activeToasts = this.notificationService.activeToasts;

  dismiss(id: string) {
    this.notificationService.dismissToast(id);
  }



}
