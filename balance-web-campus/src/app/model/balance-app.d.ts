export type Status = 'Applied' | 'Actived' | 'Resigned';

export type BalanceType = 'Income' | 'Expense';

export type Role = 'Manager' | 'Employee' | 'Admin';

export type EmployeeChanges = 'Creation' | 'StatusChanges' | 'InfoChanges';

export interface ValidationErrorMessage {
  [index: string]: string;
}

export interface CategorySelectBox {
  id: number;
  name: string;
}

export interface EmployeeInfoDetails {
info: {  id: number;
  name: string;
  role: Role;
  status: Status;
  phone: string;
  email: string;
},  
  history: EmployeeHistory[];
}

export interface EmployeeHistory {
   name: string;
   role: Role;
   status: Status;
   phone: string;
   email: string;
   changes: EmployeeChanges;
   changeAt: Date;
   changeBy: string;
}
