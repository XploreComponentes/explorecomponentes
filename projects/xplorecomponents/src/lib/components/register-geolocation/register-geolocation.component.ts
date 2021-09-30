import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CmsComponentData } from '@spartacus/storefront';
import { RegisterGeolocationModel } from './register-geolocation.model';

@Component({
    selector: 'register-geolocation-modal',
    templateUrl: './register-geolocation.component.html'
  })
  export class RegisterGeolocationComponent {

    @Input()
    currentCountry?: string;

    @Input()
    modalBody?: string;

    closeResult?: string;

    constructor(
      public component: CmsComponentData<RegisterGeolocationModel>,
        private modalService: NgbModal
        ) {}
  
      ngOnInit() {
        if(this.component?.data$) {
          this.component.data$.subscribe(data => {
            this.currentCountry = data.country,
            this.modalBody = data.content;
          })
        }
      }  

        openModal(content: any) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    dismiss(reason?: any) {
      this.modalService.dismissAll(reason);
    }

    changeLocation(country?: string) {
      this.modalService.dismissAll('By changing country');
      alert('Se ha cambiado su localización a ' + country);
    }
  }

