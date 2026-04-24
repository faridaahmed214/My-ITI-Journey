import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskData } from '../models/task.model';
import { AuthService } from './auth.service';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends BaseApiService<TaskData> {
  private authService = inject(AuthService);

  private tasksSignal = signal<TaskData[]>([]);

  public tasks = this.tasksSignal.asReadonly();

  public totalTasks = computed(() => this.tasks().length);
  public pendingTasksCount = computed(() => this.tasks().filter(t => t.status === 'pending').length);
  public completedTasksCount = computed(() => this.tasks().filter(t => t.status === 'completed').length);

  constructor() {
    super(inject(HttpClient), 'http://localhost:3000/tasks');

    effect(() => {
      const user = this.authService.currentUser();
      if (user && user.id) {
        this.fetchTasks(user.id);
      } else {
        this.tasksSignal.set([]);
      }
    });
  }

  public fetchTasks(userId: string): void {
    this.getAll(`userId=${userId}`).subscribe({
      next: (data) => this.tasksSignal.set(data),
      error: (err) => console.error('Error fetching tasks', err)
    });
  }

  public addTask(task: TaskData): void {
    const user = this.authService.currentUser();
    if (!user || !user.id) return;
    
    const newTask = { ...task, userId: user.id };
    
    this.create(newTask).subscribe({
      next: (createdTask) => this.tasksSignal.update(tasks => [...tasks, createdTask]),
      error: (err) => console.error('Error adding task', err)
    });
  }

  public updateTask(updatedTask: TaskData): void {
    const user = this.authService.currentUser();
    if (!user || !user.id) return;
    
    const taskToUpdate = { ...updatedTask, userId: user.id };
    
    this.update(updatedTask.id, taskToUpdate).subscribe({
      next: (returnedTask) => {
        this.tasksSignal.update(tasks => 
          tasks.map(t => t.id === returnedTask.id ? returnedTask : t)
        );
      },
      error: (err) => console.error('Error updating task', err)
    });
  }

  public deleteTask(id: string): void {
    this.delete(id).subscribe({
      next: () => {
        this.tasksSignal.update(tasks => tasks.filter(t => t.id !== id));
      },
      error: (err) => console.error('Error deleting task', err)
    });
  }

  public toggleTaskStatus(id: string): void {
    const task = this.tasksSignal().find(t => t.id === id);
    if (!task) return;

    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    
    this.patch(id, { status: newStatus }).subscribe({
      next: (returnedTask) => {
        this.tasksSignal.update(tasks => 
          tasks.map(t => t.id === id ? returnedTask : t)
        );
      },
      error: (err) => console.error('Error toggling status', err)
    });
  }
}
