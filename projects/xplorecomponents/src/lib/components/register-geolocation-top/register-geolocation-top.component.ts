import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CmsComponentData } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { RegisterGeolocationTopModel } from './register-geolocation-top.model';
import { RegisterGeolocationTopStore } from './register-geolocation-top.store';

@Component({
    selector: 'register-geolocation-top',
    templateUrl: './register-geolocation-top.component.html',
    styleUrls: ['./register-geolocation-top.scss'],
    animations: [
      trigger('hideMsg', [
        state('hide', style({
          opacity: 0
      })),
      state('show', style({
          opacity: 1
      })),
        transition('* => *', animate(300))
      ]),
    ],
    providers: [RegisterGeolocationTopStore]
  })

  export class RegisterGeolocationTopComponent implements OnInit{

  constructor(
    public component: CmsComponentData<RegisterGeolocationTopModel>,
    public store: RegisterGeolocationTopStore
  ) {}

  ngOnInit() {
    if(this.component?.data$) {
      this.component.data$.subscribe(data => {
        // Initialize state store
      })
    }
  }
    get stateName() {
      console.log(`Is hide: ${this.getValue(this.store.isHide)}`)
      return this.getValue(this.store.isHide) ? 'hide' : 'show';
    }
  
    closeMsg() {
      this.store.setHide(!this.getValue(this.store.isHide))
    }
  
    changeLocation(country: string | undefined) {
      this.closeMsg();
      this.store.setSelectedCountry('Country changed to ' + country);
    }

    getValue(obj: Observable<any>){
      let value: any;
      obj.subscribe(v => value = v);
      return value;
    }
  }

