import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { AppointmentModelComponent } from 'src/app/models/appointment-model/appointment-model.component';

@Component({
  selector: 'sm-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['../services.component.scss', './makeup.component.scss'],
})
export class MakeupComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  selectTab(tabId: number, event) {
    event.preventDefault();
    this.staticTabs.tabs[tabId].active = true;
  }

  bookAppointment(title) {
    const initialState: any = {
      title,
    };
    this.bsModalRef = this.modalService.show(AppointmentModelComponent, {
      initialState,
      class: 'modalCommon modal-lg',
    });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
