import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[templateRef]'
})
export class TemplateRefDirective {
  @Input('templateRef') templateRef!: string;
  constructor(public readonly template: TemplateRef<any>) { }
}
