import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';
import { CmsComponentData } from '@spartacus/storefront';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterGeolocationTopComponent } from '../projects/xplorecomponents/src/lib/components/register-geolocation-top/register-geolocation-top.component';
import { CommonModule } from '@angular/common';
import { provideMockStore } from '@ngrx/store/testing';

const initialState = {
  currentCountry: 'Spain', 
  selectedCountry: 'Ireland', 
  message: 'Visit our local site for more information and offers for your country.',
  hide: false
}

export default {
    title: 'Register Geolocation Top',
    decorators: [
        moduleMetadata({
            declarations: [
              RegisterGeolocationTopComponent
            ],
            imports: [NgbModule, NgbDropdownModule, BrowserAnimationsModule, CommonModule],
            providers: [
              CmsComponentData,
              provideMockStore({
                initialState
              })
            ]
        })
    ]
};

const Template: Story<RegisterGeolocationTopComponent> = args => ({
    component: RegisterGeolocationTopComponent,
    props: {
      ...args,
    },
  });
  
  export const Default = Template.bind({});