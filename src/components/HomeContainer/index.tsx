'use client';

import { getAuthTokenClient } from '@/utils/get-token-client';
import { Container, Title, StyledImage } from './styled';
import Link from 'next/link';

const homeImage = require('../../../public/assets/img1.jpeg');

export default function HomeContainer() {
  const token = getAuthTokenClient();
  const redirect = token ? '/user_panel/diaries' : '/login';

  return (
    <Container id="Home">
      <Title>
        <h1>
          <span>Terapia</span> não precisa durar anos para mudar sua vida
        </h1>
        <a>
          <Link legacyBehavior href={redirect}>
            <button>Agendar Sessão</button>
          </Link>
        </a>
      </Title>
      <StyledImage alt="Foto" src={homeImage}></StyledImage>
    </Container>
  );
}
