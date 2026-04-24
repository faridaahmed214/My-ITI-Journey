import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskData } from '../../models/task.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() task!: TaskData;

  @Output() deleteClicked = new EventEmitter<string>();
  @Output() editClicked = new EventEmitter<TaskData>();
  @Output() statusToggled = new EventEmitter<string>();

  public onDelete(): void {
    this.deleteClicked.emit(this.task.id);
  }


  public onEdit(): void {
    this.editClicked.emit(this.task);
  }

  public onToggleStatus(): void {
    this.statusToggled.emit(this.task.id);
  }
}


