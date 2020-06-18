import gql from 'graphql-tag'

const LOGIN_USER = gql`
  mutation($data: LoginInput!) {
    login(data: $data) {
      user {
        _id
        firstName
        lastName
        # timeZone
        currentRole
        roles
      }
    }
  }
`

const CREATE_USER = gql`
    mutation CreateUser($registrationKey: String!, $password: String!) {
        createUser(
            userInput: {
                registrationKey: $registrationKey
                password: $password
            }
        ) 
    }
`

const CREATE_POTENTIAL_USER = gql`
  mutation CreatePotentialUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $city: String!
    $roles: [Role!]!
    $phone: String!
    $birthDate: Date!
    $postalCode: String!
  ) {
    createPotentialUser(
      potentialUserInput: {
        email: $email
        firstName: $firstName
        lastName: $lastName
        birthDate: $birthDate
        phone: $phone
        city: $city
        roles: $roles
        postalCode: $postalCode
      }
    ) {
      firstName
      lastName
      email
      registrationKey
    }
  }
`

const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $oldPassword: String
    $newPassword: String
    $firstName: String!
    $lastName: String!
    $city: String!
    $phone: String!
    $postalCode: String!
    $birthDate: Date!
  ) {
    updateProfile(
      data: {
        oldPassword: $oldPassword
        newPassword: $newPassword
        firstName: $firstName
        lastName: $lastName
        city: $city
        phone: $phone
        postalCode: $postalCode
        birthDate: $birthDate
      }
    )
  }
`

const EDIT_USER = gql`
    mutation EditUser(
        $id: ID!
        $firstName: String!
        $lastName: String!
        $city: String!
        $postalCode: String!
        $birthDate: Date!
        $roles: [Role]
        $phone: String!
        $newPassword: String
    ) {
        editUser(
            id: $id,
            data: {
                firstName: $firstName
                lastName: $lastName
                city: $city
                birthDate: $birthDate
                postalCode: $postalCode
                roles: $roles
                phone: $phone
                newPassword: $newPassword
            }               
        ) 
    }
`

export { LOGIN_USER, CREATE_USER, CREATE_POTENTIAL_USER, UPDATE_PROFILE, EDIT_USER }
