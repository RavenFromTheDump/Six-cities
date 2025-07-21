type UserType = 'standard' | 'pro';

export interface User {
  name: string;
  mail: string;
  password: string | './img/user/default.png';
  userType: UserType;
  avatar?: string;
}
