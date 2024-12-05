import { EmployeeData } from '@/@types/employees/employee';
import { ProfileContainer } from '@/components/UserPanel/Profile';
import { getAllEmployees } from '@/data/employees/get-all-employees';

export default async function UserPanel() {
  const employees: EmployeeData[] = (await getAllEmployees('')) || [];

  return <ProfileContainer employees={employees} />;
}
