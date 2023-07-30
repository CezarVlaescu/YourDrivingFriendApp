import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class LazyLoadGuard implements CanLoad {

  constructor(private router : Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {

    const isAuth = true;

    if(isAuth){
      return true;
    } else{
      this.router.navigate(['login'])
      return false;
    }
  }
}
