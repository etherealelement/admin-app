import {User} from "./register-user";

export interface ResponseLoginApi extends User {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isUninitialized: boolean;
  status?: 'fulfilled' | 'rejected';
  error?: {
    data: {
      username: string[];
      password: string[];
    };
  };
}