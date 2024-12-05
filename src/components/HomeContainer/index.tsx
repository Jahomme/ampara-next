'use client';

import { getAuthTokenClient } from '@/utils/get-token-client';
import { Container, Title, StyledImage, MainContainer } from './styled';
import Link from 'next/link';
import { UnifikLogo2 } from '../svg/UnifikLogo2';
import { useWindowDimensions } from '@/utils/windows_size';
import { use, useEffect, useState } from 'react';

const homeImage = require('../../../public/assets/img1.jpeg');

export default function HomeContainer() {
  const token = getAuthTokenClient();
  const redirect = token ? '/user_panel/diaries' : '/login';
  const [size, setSize] = useState(300);

  const { width } = useWindowDimensions();

  //   if (typeof window === 'undefined') return null;

  useEffect(() => {
    if (typeof window !== undefined) {
      const size = width && width < 768 ? 150 : 300;
      setSize(size);
    }
  }, []);

  return (
    <Container id="Home">
      <MainContainer>
        <UnifikLogo2 size={size} />
        <Title>
          <h1
            onClick={() => {
              console.log('Width:', width, 'Condition:', width > 767);
            }}
          >
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
