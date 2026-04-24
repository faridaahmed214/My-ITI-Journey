import { Injectable, signal } from '@angular/core';
import { TaskData } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  public isModalOpen = signal<boolean>(false);
  public taskToEdit = signal<TaskData | null>(null);

  public openAddTaskModal(): void {

    this.taskToEdit.set(null);
    this.isModalOpen.set(true);
  }

  public openEditTaskModal(task: TaskData): void {
    this.taskToEdit.set(task);
    this.isModalOpen.set(true);
  }

  public closeModal(): void {
    this.isModalOpen.set(false);
    this.taskToEdit.set(null);
  }
}
