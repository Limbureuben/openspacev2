import { gql } from "apollo-angular";


export const REGISTER_MUTATION = gql`
  mutation RegisterUser($input: RegistrationInputObject!) {
    registerUser(input: $input) {
      output {
        message
        success
        user {
          email
          id
          username
        }
      }
    }
  }
`;