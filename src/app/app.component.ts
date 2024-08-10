import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {Store} from "@ngrx/store";

import * as opActions from "../ngrx/op.actions";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AsyncPipe} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {opModel} from "./models/op.model";
import {opState} from "../ngrx/op.state";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule, AsyncPipe, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngredux';

  isLoadingList$ = this.store.select('op', 'isLoadingList');

  opList$ = this.store.select('op', 'opList');



  constructor(private store: Store<{ op: opState }>) {
    this.store.dispatch(opActions.getopList());



  }
}
