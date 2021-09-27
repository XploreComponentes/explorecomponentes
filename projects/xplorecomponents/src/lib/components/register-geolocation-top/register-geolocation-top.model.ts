import { CmsComponent } from "@spartacus/core";

export interface RegisterGeolocationTopModel extends CmsComponent {
    country?: string;
    content?: string;
}

export interface AfterContentInit {
    ngAfterContentInit(): void
  }