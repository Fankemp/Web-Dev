import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() product!: Product;

  currentIndex: number = 0;

  nextImage() {
    if (this.currentIndex < this.product.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.product.images.length - 1;
    }
  }

  shareTG() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }

  shareWA() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }
}