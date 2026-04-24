import { Component, inject, OnChanges, SimpleChanges, AfterViewInit, ViewChild, ElementRef, effect } from '@angular/core';
import { Priority, TaskData } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { UIService } from '../../services/ui.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-task-input',
  standalone: true,
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
})
export class TaskInputComponent implements AfterViewInit {
  private taskService = inject(TaskService);
  private uiService = inject(UIService);
  private notificationService = inject(NotificationService);

  public selectedPriority: Priority = 'medium';
  public editData = this.uiService.taskToEdit;

  @ViewChild('titleInput') titleInputElement!: ElementRef;

  constructor() {
    effect(() => {
      const data = this.editData();
      if (data) {
        this.selectedPriority = data.priority;
      } else {
        this.selectedPriority = 'medium';
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.titleInputElement) {
      this.titleInputElement.nativeElement.focus();
    }
  }

  public setPriority(p: Priority): void {
    this.selectedPriority = p;
  }

  public handleAddTask(title: string, desc: string, date: string, category: string): void {
    if (!title.trim()) return;

    const editMode = !!this.editData();
    const task: TaskData = {
      id: editMode ? this.editData()!.id : crypto.randomUUID().split('-')[0],
      title,
      description: desc,
      priority: this.selectedPriority,
      date,
      category,
      status: editMode ? this.editData()!.status : 'pending',
    };

    if (editMode) {
      this.taskService.updateTask(task);
      this.notificationService.add(`Task "${title}" updated!`, 'info');
    } else {
      this.taskService.addTask(task);
      this.notificationService.add(`Task "${title}" created!`, 'success');
    }

    this.uiService.closeModal();
  }
}


