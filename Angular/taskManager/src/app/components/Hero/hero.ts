import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { HeroSlide } from '../../models/hero.model';
import { UIService } from '../../services/ui.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  private uiService = inject(UIService);
  
  public openModal(): void {
    this.uiService.openAddTaskModal();
  }

  public images: HeroSlide[] = [
    {
      url: 'assets/hero-1.png',
      title: 'Organize Your Life',
      subtitle: 'Premium task management for modern professionals.'
    },
    {
      url: 'assets/hero-2.png',
      title: 'Boost Productivity',
      subtitle: 'Stay ahead of your goals with our intuitive interface.'
    },
    {
      url: 'assets/hero-3.png',
      title: 'Creative Workflow',
      subtitle: 'Unlock your potential with streamlined task tracking.'
    }
  ];

  public currentIndex: number = 0;
  private autoPlayInterval: any;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.moveNext();
      this.cdr.markForCheck();
    }, 5000);
  }

  private resetAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
    this.startAutoPlay();
  }

  private moveNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  public nextSlide(): void {
    this.moveNext();
    this.resetAutoPlay();
  }

  public prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.resetAutoPlay();
  }

  public goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoPlay();
  }
}
