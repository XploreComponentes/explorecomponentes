import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';
import { CmsComponentData } from '@spartacus/storefront';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterGeolocationTopComponent } from '../projects/xplorecomponents/src/lib/components/register-geolocation-top/register-geolocation-top.component';
import { CommonModule } from '@angular/common';

export default {
    title: 'Register Geolocation Top',
    decorators: [
        moduleMetadata({
            declarations: [
              RegisterGeolocationTopComponent
            ],
            imports: [NgbModule, NgbDropdownModule, BrowserAnimationsModule, CommonModule],
            providers: [
              CmsComponentData
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
  Default.args = {
    currentCountry: 'Spain',
    hide: false,
    message: 'Visit our local site for more information and offers for your country.'
  };