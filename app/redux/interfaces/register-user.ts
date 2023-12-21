export interface ResponseRegisterApi extends User {
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

export interface User {
  email: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
}
