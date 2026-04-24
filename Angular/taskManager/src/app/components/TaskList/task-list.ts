import { Component, inject, computed, signal } from '@angular/core';
import { CardComponent } from '../Card/card';
import { TaskData } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { NotificationService } from '../../services/notification.service';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  private taskService = inject(TaskService);
  private notificationService = inject(NotificationService);
  private uiService = inject(UIService);

  public activeFilter = signal<'all' | 'pending' | 'completed'>('all');

  public filteredTasks = computed(() => {
    const tasks = this.taskService.tasks();
    const filter = this.activeFilter();
    
    if (filter === 'all') return tasks;
    return tasks.filter(task => task.status === filter);
  });

  public setFilter(filter: 'all' | 'pending' | 'completed'): void {
    this.activeFilter.set(filter);
  }

  public onTaskDelete(id: string): void {
    this.taskService.deleteTask(id);
    this.notificationService.add('Task deleted successfully!', 'warning');
  }

  public onTaskEdit(task: TaskData): void {
    this.uiService.openEditTaskModal(task);
  }

  public onStatusToggle(id: string): void {
    const task = this.taskService.tasks().find(t => t.id === id);
    if (!task) return;
    
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    
    this.taskService.toggleTaskStatus(id);
    
    this.notificationService.add(
      `Task marked as ${newStatus}!`, 
      newStatus === 'completed' ? 'success' : 'info'
    );
  }
}


