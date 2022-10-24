import { Employee } from './Employee';

export class Payroll {
    id !: number;
	employee !: Employee;
    payrollMonth !: string;
	totalWorkingDays !: number;
	salary !: number;
	deductions !: number;
	earnings !: number;
}
