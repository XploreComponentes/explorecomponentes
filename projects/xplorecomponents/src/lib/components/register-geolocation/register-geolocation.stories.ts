import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterGeolocationComponent } from './register-geolocation.component';

export default {
    title: 'Register Geolocation Modal',
    decorators: [
        moduleMetadata({
            declarations: [
              RegisterGeolocationComponent
            ],
            imports: [NgbModule, NgbDropdownModule],
        })
    ]
};

const Template: Story<RegisterGeolocationComponent> = args => ({
    component: RegisterGeolocationComponent,
    props: {
      ...args,
    },
  });
  
  export const Default = Template.bind({});
  Default.args = {
    currentCountry: 'Spain',
    modalBody: 'Change your country location'
  };