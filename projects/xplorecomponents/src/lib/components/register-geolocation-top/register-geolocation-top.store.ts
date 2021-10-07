import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from "@angular/core";

interface KeyValuePair {
  code: string;
  text: string;
}

export interface RegisterGeolocationTopState {
    currentCountry?: string;
    selectedCountry?: string;
    message?: string;
    hide?: boolean;
  }
  
@Injectable()
export class RegisterGeolocationTopStore extends ComponentStore<RegisterGeolocationTopState> {
  
  constructor() {
    super({
        currentCountry: 'Spain', 
        selectedCountry: 'Ireland', 
        message: 'Visit our local site for more information and offers for your country.',
        hide: false
    });
  }

  readonly getCurrentCountry = this.select(state => {
      return state.currentCountry;
  });

  readonly getSelectedCountry = this.select(state => {
    return state.selectedCountry
  })

  readonly getMessage = this.select(state => {
    return state.message
  })

  readonly isHide = this.select(state => {
      return state.hide
  })  

  readonly setSelectedCountry = this.updater(
    (state: RegisterGeolocationTopState, newSelectedCountry: string) => {
      return {
        ...state,
        selectedCountry: newSelectedCountry
      }
    }
  )

  readonly setHide = this.updater(
    (state: RegisterGeolocationTopState, newHide: boolean) => {
      return {
        ...state,
        hide: newHide
      }
    }
  )
}