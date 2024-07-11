import { EmployeeData } from '@/domain/employees/employee';
import HomePage from '@/containers/HomePage';
import { getAllEmployees } from '@/data/employees/get-all-employees';

export type HomeProps = {
  employees: EmployeeData[];
};

export default function Home() {
  return <HomePage />;
}
