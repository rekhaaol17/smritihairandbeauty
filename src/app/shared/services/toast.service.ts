import { Injectable } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { PinkToast } from '../components/pink-toast';

@Injectable({ providedIn: 'root' })
export class PinkToastService {
  private lastInserted: number[] = [];
  options: GlobalConfig;

  constructor(private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
  }

  openPinkToast(message) {
    const opt = JSON.parse(JSON.stringify(this.options));
    opt.toastComponent = PinkToast;
    opt.toastClass = 'pinktoast';
    const inserted = this.toastr.show(message, null, opt);
    if (inserted && inserted.toastId) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }
}
