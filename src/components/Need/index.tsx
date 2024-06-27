'use client';

import React from 'react';
import { Box, BoxSection, Container, Section } from './styled';
import {
  FaBan,
  FaListUl,
  FaUserFriends,
  FaRegAngry,
  FaRegFrown,
  FaRegFrownOpen,
} from 'react-icons/fa';

export default function Need() {
  return (
    <Container>
      <Section>
        {' '}
        <h1>Sinais de que você precisa de Terapia</h1>
        <BoxSection>
          <Box>
            <FaBan color="white" size={30} />
            <p>Sua vida parece estar estagnada</p>
          </Box>
          <Box>
            <FaRegFrownOpen color="white" size={30} />
            <p>Está difícil entender seus sentimentos</p>
          </Box>
          <Box>
            <FaListUl color="white" size={30} />
            <p>Você não sabe por onde começar a mudar</p>
          </Box>
          <Box>
            <FaRegAngry color="white" size={30} />
            <p>
              Você tem se sentido triste, irritado ou ansioso com frequência
            </p>
          </Box>
          <Box>
            <FaRegFrown color="white" size={30} />
            <p>
              Identifica em si mesmo sintomas de depressão ou outros transtornos
            </p>
          </Box>
          <Box>
            <FaUserFriends color="white" size={30} />
            <p>Sua família e amigos estão preocupados com você</p>
          </Box>
        </BoxSection>
      </Section>
    </Container>
  );
}
