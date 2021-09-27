import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CmsComponentData } from '@spartacus/storefront';
import { RegisterGeolocationTopComponent } from './register-geolocation-top.component';

describe('RegisterGeolocationTopComponent', () => {
  let component: RegisterGeolocationTopComponent;
  let fixture: ComponentFixture<RegisterGeolocationTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        RegisterGeolocationTopComponent 
      ],
      imports: [
        BrowserAnimationsModule
      ],
      providers: [
        CmsComponentData
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterGeolocationTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create RegisterGeolocationTopComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should call method changeLocation()', async(() => {
    spyOn(component, 'changeLocation');
    fixture.detectChanges();
    const btnAction = document.querySelector('.btn-change-country') as HTMLButtonElement;
    btnAction.click();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.changeLocation).toHaveBeenCalled();
    });
  }));

});
