'use client';

import { getAuthTokenClient } from '@/utils/get-token-client';
import { Container, Title, StyledImage } from './styled';
import Link from 'next/link';
import { UnifikLogo2 } from '../svg/UnifikLogo2';

const homeImage = require('../../../public/assets/img1.jpeg');

export default function HomeContainer() {
  const token = getAuthTokenClient();
  const redirect = token ? '/user_panel/diaries' : '/login';

  return (
    <Container id="Home">
      <UnifikLogo2 size={300} />
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
    </Container>
  );
}
