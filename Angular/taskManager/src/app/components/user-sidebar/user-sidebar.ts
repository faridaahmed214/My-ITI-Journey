import { Component, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-sidebar.html',
  styleUrl: './user-sidebar.css'
})
export class UserSidebarComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  private taskService = inject(TaskService);
  private authService = inject(AuthService);

  public pendingCount = this.taskService.pendingTasksCount;
  public completedCount = this.taskService.completedTasksCount;

  public get userName(): string {
    return this.authService.currentUser()?.userName || 'Guest User';
  }
  
  public get userEmail(): string {
    return this.authService.currentUser()?.userEmail || 'guest@workspace.com';
  }

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

  ngOnInit() {}

  onClose() {
    this.close.emit();
  }

  onLogout() {
    this.logout.emit();
  }
}
