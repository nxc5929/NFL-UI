import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AlertService {

    constructor(private snackBar: MatSnackBar) {
    }

    success(message: string) {
        this.openSnackBar(message);
    }

    error(message: string) {
        this.openSnackBar(message);
    }

    openSnackBar(message: string, action = "") {
        this.snackBar.open(message, action, {
          duration: 2000,
        });
      }
}