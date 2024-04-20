import { AbstractControl, ValidatorFn } from "@angular/forms";

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