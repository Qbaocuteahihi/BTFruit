import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, EMPTY, mergeMap, of, switchMap} from 'rxjs';
import {map, exhaustMap, catchError} from 'rxjs/operators';
import {opService} from "../services/op.service";
import * as opActions from './op.actions';

@Injectable()
export class opEffects {
  //
  getopList$ = createEffect(() => this.actions$.pipe(
      ofType(opActions.getopList),
      switchMap((action) => this.opService.getOpList() //
        .pipe(
          delay(2000),
          map(ops => {
            console.log(ops);
            return opActions.getopListSuccess({opList: ops});
          }),
          catchError(() => {
            return of(opActions.getopListFailure());
          })
        ))
    )
  );

  // getop$ = createEffect(() => this.actions$.pipe(
  //     ofType(opActions.getop),
  //     mergeMap((action) => this.opService.getop(action.name)
  //       .pipe(
  //         delay(2000),
  //         map(op => {
  //           return opActions.getopSuccess({op});
  //         }),
  //         catchError(() => {
  //           return of(opActions.getopFailure());
  //         })
  //       ))
  //   )
  // );

  constructor(
    private actions$: Actions,
    private opService: opService
  ) {
  }
}
