export interface IResponseUsers {
  count: number;
  next?: any;
  previous?: any;
  results: IUser[];
}

export interface IUser {
  key?: string;
  id: string;
  username: string;
  email: string;
  phone?: string;
}