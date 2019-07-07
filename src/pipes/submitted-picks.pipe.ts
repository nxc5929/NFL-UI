import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'submitted' })
export class SubmittedPicksPipe implements PipeTransform {
    transform(submittedPicks: boolean) {
        return submittedPicks ? "lawngreen" : "red";
    }
}