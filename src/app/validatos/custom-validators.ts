import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function adult(control: AbstractControl){
    const age = parseInt(control.value);
  
    if(age >= 18 && age <= 105){
      // input is valid
      return null;
    }
    
    // input is not valid, we can return any object. In our case we return 
    // an object with the adult property set to false
    return {
      isNotAdult: true
    }
}

export function matchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);
  
      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }