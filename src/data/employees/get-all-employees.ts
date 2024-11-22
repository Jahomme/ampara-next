import { EMPLOYEES_URL } from '../../config/app-config';
import { EmployeeData } from '../../domain/employees/employee';

export type GetAllEmployeesProps = {
  data: EmployeeData[];
};

const headers = new Headers({ Accept: 'application/json' });

export const getAllEmployees = async (query = '') => {
    try {
      const res = await fetch(`${EMPLOYEES_URL}${query}`, {
        headers: headers,
        next: {
          revalidate: 3600,
        },
      });

      const employees: GetAllEmployeesProps = await res.json();

      return employees.data;
    } catch (error) {
      console.error(error);
    }
};
