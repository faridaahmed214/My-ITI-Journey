import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/Header/header';
import { FooterComponent } from '../../components/Footer/footer';
import { TaskInputComponent } from '../../components/TaskInput/task-input';
import { ToastComponent } from '../../components/Toast/toast';
import { UIService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, TaskInputComponent, ToastComponent, RouterLink],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private uiService = inject(UIService);
  public isModalOpen = this.uiService.isModalOpen;

  public closeModal() {
    this.uiService.closeModal();
  }
}

