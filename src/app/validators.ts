import { AbstractControl } from "@angular/forms";

export function tcsMail(control: AbstractControl){
    if(!control.value || control.value?.includes('@tcs.com')){
        return null;
    }
    else{
        return { 'tcsMail':'invalid domain'}
    }
    
    
}
