import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from "@angular/common/http";
import {opReducer} from "../ngrx/op.reducer";
import {opEffects} from "../ngrx/op.effects";


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideAnimationsAsync(), provideStore({
    'op':opReducer
  }), provideEffects(opEffects), provideHttpClient()]
};
