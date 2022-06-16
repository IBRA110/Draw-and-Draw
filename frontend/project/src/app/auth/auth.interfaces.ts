export interface signupModel{
	username: string,
	email: string,
	password: string,
	first_name?: string,
	last_name?: string
}

export interface AuthResData{
	user_id?: string,
	email: string,
	username: string,
	first_name?: string,
	last_name: string,
	photo?: any,
	token?: string
}

export interface loginModel{
	email: string,
	password: string
}
export class User{
  constructor(
    public id: string,
    public email: string,
    public username: string,
    public token: string,
    public first_name?: string,
    public last_name?: string,
    public photo?: string,
  ){}
}
