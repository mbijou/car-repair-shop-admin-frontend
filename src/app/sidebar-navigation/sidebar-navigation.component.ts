import { Component, OnInit, Inject, isDevMode } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { deployUrl } from '../global';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.css']
})
export class SidebarNavigationComponent implements OnInit {
  public deployUrl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    if(!isDevMode()) {
          this.deployUrl = deployUrl;
    }

  }

  ngOnInit(): void {
  }
}
