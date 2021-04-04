import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customComponent]'
})
export class CustomComponentDirective implements OnInit, AfterViewInit {
  // @ts-ignore
  @Input() set customComponent(comp: any) {
    this.component = comp;
    this.renderComponent();
  }

  @Input() data: any;
  private component: any;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.renderComponent();
  }

  renderComponent(): void {
    if (this.component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        this.component
      );
      this.viewContainerRef.clear();
      const componentRef = this.viewContainerRef.createComponent(
        componentFactory
      );
      // @ts-ignore
      componentRef.instance.model = this.data;
    }
  }

  ngAfterViewInit(): void {}
}
