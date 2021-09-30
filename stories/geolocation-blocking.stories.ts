import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';
import { GeolocationBlockingComponent } from '../projects/xplorecomponents/src/lib/components/geolocation-blocking/geolocation-blocking.component';
import { CmsComponentData } from '@spartacus/storefront';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { LanguageService } from '@spartacus/core';

export default {
    title: 'Geolocation Blocking Modal',
    decorators: [
        moduleMetadata({
            declarations: [
              GeolocationBlockingComponent
            ],
            imports: [NgbModule, NgbDropdownModule, CommonModule],
            providers: [
              CmsComponentData,
              LanguageService
            ]
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