import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

//Authguard concstructor to be invoked with new requires injectable

@Injectable({
    providedIn : 'root'
})


export class AuthGuard implements CanActivate, CanActivateChild{

    constructor (private authServ : AuthService){}
    

    canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot)
    : boolean| Observable<boolean> | Promise<boolean>
        {
        return this.authServ.isAunthenticated()
        .then(res => {
            return res;
            // if(res === true){
            //     return true;
            // }
            // else{   
            //     return false
            // }
        })
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.authServ.isAunthenticated()
   .then(res => {
    return res;
   })
    }
}