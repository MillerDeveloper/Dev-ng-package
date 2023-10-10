import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { TemplateRefDirective } from '../../directives/templateRef/template-ref.directive';

@Component({
  selector: 'lib-module-header',
  templateUrl: './module-header.component.html',
  styleUrls: ['./module-header.component.scss']
})
export class ModuleHeaderComponent {
  @Input() header!: string
  @ContentChildren(TemplateRefDirective) templates!: QueryList<TemplateRefDirective>

  getTemplate(templateName: string) {
    return this.templates.find((item) => item.templateRef === templateName)
  }

  isPassedTemplate(templateName: string) {
    return !!(this.templates.find((item) => item.templateRef === templateName))
  }
}
