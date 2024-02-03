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
