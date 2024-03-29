import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from "./../core/state";
import { extModules } from './build-specifics';
import { AppEffects } from './state/app/app.effects';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,

    // ngrx
    StoreModule.forRoot(reducers, {
      metaReducers: metaReducers,
    }),
    EffectsModule.forRoot([
      AppEffects
    ]),
    extModules,
  ],
  exports: [

  ]
})
export class CoreModule { }
