import { Component, inject, computed } from '@angular/core';
import { HeroComponent } from '../../components/Hero/hero';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private taskService = inject(TaskService);

  public pendingCount = this.taskService.pendingTasksCount;
  public totalTasks = this.taskService.totalTasks;
  
  public completionPercentage = computed(() => {
    const total = this.totalTasks();
    if (total === 0) return 0;
    return Math.round((this.taskService.completedTasksCount() / total) * 100);
  });

  public recentTasks = computed(() => {
    return this.taskService.tasks().slice(-3).reverse();
  });
}

