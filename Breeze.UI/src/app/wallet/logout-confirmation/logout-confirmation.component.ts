import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.component.html',
  styleUrls: ['./logout-confirmation.component.css']
})
export class LogoutConfirmationComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit() {
  }

  private onLogout() {
    this.activeModal.close();
    this.router.navigate(['/login']);
  }
}
