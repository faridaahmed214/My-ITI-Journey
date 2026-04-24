import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { TaskInputComponent } from '../../components/TaskInput/task-input';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  imports: [TaskInputComponent],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask implements OnInit, OnDestroy {
  private uiService = inject(UIService);
  
  ngOnInit() {
 
    this.uiService.taskToEdit.set(null);
    this.uiService.isModalOpen.set(false); 
  }

  ngOnDestroy() {
    this.uiService.taskToEdit.set(null);
  }
}
