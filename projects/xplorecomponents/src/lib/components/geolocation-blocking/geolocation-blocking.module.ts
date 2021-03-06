import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CmsConfig, ConfigModule, LanguageService, provideConfig } from "@spartacus/core";
import { translationChunksConfig } from '@spartacus/assets';
import { I18nModule } from '@spartacus/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GeolocationBlockingComponent } from "./geolocation-blocking.component";

@NgModule({
    declarations: [GeolocationBlockingComponent],
    exports: [GeolocationBlockingComponent],
    entryComponents: [GeolocationBlockingComponent],
    imports: [
        CommonModule,
        NgbModule,
        I18nModule,
        ConfigModule.withConfig({
          cmsComponents: {
            GeolocationBlockingComponent: {
              component: GeolocationBlockingComponent,
            }
          }
        } as CmsConfig),
    ],
    providers: [
      LanguageService,
      provideConfig({
        i18n: {
          backend: {
            loadPath: 'assets/i18n-assets/{{lng}}/{{ns}}.json',
          },
          chunks: translationChunksConfig,
          fallbackLang: 'en',
        },
      }),
    ],
})

export class TestGeolocationBlockingModule { }