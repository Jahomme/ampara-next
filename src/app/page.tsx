import HomeContainer from '@/components/HomeContainer';
import Header from '@/components/Header';
import About from '@/components/About';
import Need from '@/components/Need';
import Team from '@/components/Team';
import Faq from '@/components/Faq';
import Expect from '@/components/Expect';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import '@splidejs/react-splide/css';

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer />
      <About />
      <Need />
      <Team />
      <Faq />
      <Expect />
      <Contact />
      <Footer />
    </>
  );
}
