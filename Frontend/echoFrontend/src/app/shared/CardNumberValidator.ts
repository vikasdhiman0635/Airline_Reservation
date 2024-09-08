
import { AbstractControl } from "@angular/forms";

export function CardNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const cardno:any = control.get('cardno');
    const recardno:any = control.get('recardno');

    if (cardno.pristine || recardno.pristine) {
        return null;
    }

    return cardno && recardno && cardno.value != recardno.value ?
        {
            'mismatch': true
        } : null;
}