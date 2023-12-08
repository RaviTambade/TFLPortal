import {Directive,HostListener,Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[Tooltip]',
})
export class TooltipDirective {
  @Input() Tooltip: string='';
  private tooltipElement: HTMLElement | null = null;
  constructor(private renderer: Renderer2) {}

  @HostListener('mouseover', ['$event']) onMouseEnter(event: MouseEvent) {
    if (this.tooltipElement == null) {
      this.showTooltip(event);
    }
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (this.tooltipElement) {
      this.updateTooltipPosition(event);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private updateTooltip(tooltip: any) {
    if (this.tooltipElement) this.tooltipElement.innerHTML = tooltip;
  }

  private updateTooltipPosition(event: MouseEvent) {
    const xOffset = 10;
    const yOffset = 20;

    this.renderer.setStyle(
      this.tooltipElement,
      'left',
      event.clientX + xOffset + 'px'
    );
    this.renderer.setStyle(
      this.tooltipElement,
      'top',
      event.clientY + yOffset + 'px'
    );
  }

  private showTooltip(event: MouseEvent) {
    if (!this.tooltipElement) {
      this.tooltipElement = document.createElement('div');
      this.renderer.setStyle(this.tooltipElement, 'border', '1px solid');
      this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(this.tooltipElement, 'background-color', ' rgb(67, 59, 59)'); 
      this.renderer.setStyle(this.tooltipElement, 'color', 'white');
      this.renderer.setStyle(this.tooltipElement, 'padding', '8px');
      this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
      this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
      this.renderer.appendChild(document.body, this.tooltipElement);
      this.updateTooltipPosition(event);
      this.updateTooltip(this.Tooltip);
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
