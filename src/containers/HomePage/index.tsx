import HomeContainer from '@/components/HomeContainer';
import Header from '@/components/Header';
import About from '@/components/About';
import Need from '@/components/Need';
import Team from '@/components/Team';
import Expect from '@/components/Expect';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import '@splidejs/react-splide/css';

import { EmployeeData } from '@/@types/employees/employee';
import { getAllEmployees } from '@/data/employees/get-all-employees';
import {
  ContentAttributes,
  ContentData,
} from '@/@types/faq-content/faq-content';
import { GetAllContents } from '@/data/faq-contents/get-all-contents';

export type FaqContentAttributes = ContentAttributes & {
  contentHtml: string;
};

export type FaqContentData = {
  id: number;
  attributes: FaqContentAttributes;
};

export type HomePageContainerProps = {
  employees: EmployeeData[];
  contents: FaqContentData[];
};

export default async function HomePage() {
  const employees: EmployeeData[] = await getAllEmployees(
    '&sort=id:asc&pagination[start]=0&pagination[limit]=6',
  );

  const contents: FaqContentData[] = await GetAllContents(
    '&sort=id:asc&pagination[start]=0&pagination[limit]=10',
  );

  return (
    <>
      <Header />
      <HomeContainer />
      <About />
      <Need />
      <Team employees={employees} />
      <Faq contents={contents} />
      <Expect />
      <Contact />
      <Footer />
    </>
  );
}
