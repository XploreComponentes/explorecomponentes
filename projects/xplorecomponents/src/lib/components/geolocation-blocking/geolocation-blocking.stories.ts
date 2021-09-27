import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';
import { GeolocationBlockingComponent } from './geolocation-blocking.component';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

export default {
    title: 'Geolocation Blocking Modal',
    decorators: [
        moduleMetadata({
            declarations: [
              GeolocationBlockingComponent
            ],
            imports: [NgbModule, NgbDropdownModule],
        })
    ]
};

const Template: Story<GeolocationBlockingComponent> = args => ({
    component: GeolocationBlockingComponent,
    props: {
      ...args,
    },
  });
  
  export const Default = Template.bind({});
  Default.args = {
    currentCountry: 'Spain'
  };