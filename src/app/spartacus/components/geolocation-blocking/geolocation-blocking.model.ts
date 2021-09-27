import { CmsComponent } from "@spartacus/core";

export interface GeolocationBlockingModel extends CmsComponent {
    country?: string;
    countryLanguageDropDownData?: string;
}

export interface AfterContentInit {
    ngAfterContentInit(): void
  }