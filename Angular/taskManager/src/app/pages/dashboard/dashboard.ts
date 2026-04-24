import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/TaskList/task-list';

@Component({
  selector: 'app-dashboard',
  imports: [TaskListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
