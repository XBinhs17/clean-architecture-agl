export interface User{
  id: number;
  avatar: string;
  name: string;
  work: string;
  earnings: number;
  tasks: number;
  sales: number;
}

//sua thanh type
type Users = {
  id: number;
  avatar: string;
  name: string;
  work: string;
  earnings: number;
  tasks: number;
  sales: number;
}
