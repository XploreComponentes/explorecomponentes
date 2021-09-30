import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';
import { CmsComponentData } from '@spartacus/storefront';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RegisterGeolocationComponent } from '../projects/xplorecomponents/src/lib/components/register-geolocation/register-geolocation.component';

export default {
    title: 'Register Geolocation Modal',
    decorators: [
        moduleMetadata({
            declarations: [
              RegisterGeolocationComponent
            ],
            imports: [NgbModule, NgbDropdownModule, CommonModule],
            providers: [
              CmsComponentData
            ]
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