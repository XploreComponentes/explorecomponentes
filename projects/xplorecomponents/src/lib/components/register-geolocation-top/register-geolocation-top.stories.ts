import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterGeolocationTopComponent } from './register-geolocation-top.component';

export default {
    title: 'Register Geolocation Top',
    decorators: [
        moduleMetadata({
            declarations: [
              RegisterGeolocationTopComponent
            ],
            imports: [NgbModule, NgbDropdownModule, BrowserAnimationsModule],
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