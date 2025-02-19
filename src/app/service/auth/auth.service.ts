import { Injectable, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { REGISTER_USER } from '../../../store/graphql';
import { REGISTER_MUTATION } from '../../../store/graphql';


export interface RegisterData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apollo: Apollo,
  ) { }

  
  registerUser(userData:RegisterData):Observable<any> {
    return this.apollo.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        input: userData
      }
    });

  } 
}
