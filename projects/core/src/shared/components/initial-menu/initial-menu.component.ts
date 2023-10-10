import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface IMenuList {
  label: string,
  links: [{
    label: string,
    link: string
  }]
}

@Component({
  selector: 'lib-initial-menu',
  templateUrl: './initial-menu.component.html',
  styleUrls: ['./initial-menu.component.scss']
})
export class InitialMenuComponent implements OnInit {
  @Input() menuList: IMenuList[] = []

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.forEach((data: any) => {
      if (data && Object.keys(data).length > 0) {
        this.menuList = data.menuList
      }
    })
  }
}
