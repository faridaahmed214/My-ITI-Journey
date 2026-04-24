import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UIService } from './services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  private uiService = inject(UIService);

  public showModal = this.uiService.isModalOpen;

  public closeModal(): void {
    this.uiService.closeModal();
  }
}


