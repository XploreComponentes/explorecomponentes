import { Component, Input } from '@angular/core';
import { ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { GeolocationBlockingModel } from './geolocation-blocking.model';

@Component({
    selector: 'geolocation-blocking-modal',
    templateUrl: './geolocation-blocking.component.html',
    styleUrls: ['./geolocation-blocking.component.scss']
  })
  export class GeolocationBlockingComponent {

    @Input()
    currentCountry?: string;

    closeResult = '';
    countryList: Array<{code: string, text: string}> = [{code: "ja", text: "Japonés"}, {code: "en", text: "Inglés"}, {code: "de", text: "Holandés"}, {code: "zh", text: "Chino"}];
    countrySelected:string = '';
    language: boolean = false;

    constructor(
        public component: CmsComponentData<GeolocationBlockingModel>,
        private modalService: NgbModal,
        public languageService: LanguageService) {}


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

    setLanguage(country: string) {
      this.countrySelected = country;
      this.languageService.setActive(country);
      this.countrySelected = 'Country changed to ' + country;
      this.modalService.dismissAll('By changing country');
    }
  }

