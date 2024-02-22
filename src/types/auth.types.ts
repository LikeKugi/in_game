export interface IAuthLoginResponse {
  "id": number,
  "username": "string",
  "accessToken": "string",
  "refreshToken": "string"
}

export interface IAuthLoginRequest {
  username: string
  password: string
}

export interface IAuthRefreshResponse {
  id: number
  username: string
  accessToken: string
  refreshToken: string
}

export interface IAuthRegisterResponse {
  name: string
  lastName: string
  username: string
}

export interface IAuthRegisterRequest {
  name: string
  lastName: string
  username: string
  password: string
  passwordConfirmation: string
}
