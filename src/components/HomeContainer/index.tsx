'use client';

import { getAuthTokenClient } from '@/utils/get-token-client';
import { Container, Title, StyledImage, MainContainer } from './styled';
import Link from 'next/link';
import { UnifikLogo2 } from '../svg/UnifikLogo2';
import { useWindowDimensions } from '@/utils/windows_size';

const homeImage = require('../../../public/assets/img1.jpeg');

export default function HomeContainer() {
  const token = getAuthTokenClient();
  const redirect = token ? '/user_panel/diaries' : '/login';

  const { width } = useWindowDimensions();

  if (typeof window === undefined) return;

  return (
    <Container id="Home">
      <MainContainer>
        <UnifikLogo2 size={width > 767 ? 350 : 150} />
        <Title>
          <h1>
            Cuidar de si é um ato de coragem. a terapia pode ser o começo de sua
            harmonia interna.
          </h1>
          <a>
            <Link legacyBehavior href={redirect}>
              <button>Agende sua consulta</button>
            </Link>
          </a>
        </Title>
        {/* <StyledImage alt="Foto" src={homeImage}></StyledImage> */}
      </MainContainer>
    </Container>
  );
}
