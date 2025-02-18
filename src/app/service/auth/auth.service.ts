import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import gql from 'graphql-tag';


export interface RegisterData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const REGISTER_MUTATION = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apollo: Apollo,
    private router: Router,
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
