import { gql } from "apollo-angular";


// export const REGISTER_MUTATION = gql`
//   mutation RegisterUser($input: UserRegistrationInputObject!) {
//     registerUser(input: $input) {
//       message
//       success
//       user {
//         email
//         id
//         username
//       }
//     }
//   }
// `;


export const REGISTER_USER = gql`
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