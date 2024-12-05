'use client';

import { Box, BoxSection, Container, Section } from './styled';
import {
  FaBalanceScale,
  FaLock,
  FaRegCommentDots,
  FaRegSmile,
} from 'react-icons/fa';

export default function Expect() {
  return (
    <Container>
      <Section>
        {' '}
        <h1>O que esperar do processo terapêutico da UNIFIK?</h1>
        <BoxSection>
          <Box>
            <FaBalanceScale color="white" size={30} />
            <h2>Zero julgamentos</h2>
            <p>
              Se algo te causa dor, é relevante e merece ser tratado com
              cuidado. <b>Não há problema 'pequeno' demais para nós.</b>
            </p>
          </Box>
          <Box>
            <FaLock color="white" size={30} />
            <h2>Sigilo total</h2>
            <p>
              Todas as conversas mantidas durante a sessão são estritamente
              confidenciais,{' '}
              <b>compartilhadas apenas entre você e seu terapeuta.</b>
            </p>
          </Box>
          <Box>
            <FaRegCommentDots color="white" size={30} />
            <h2>Aprender a lidar com emoções difíceis</h2>
            <p>
              É fundamental aprender a lidar com emoções difíceis. Durante as
              sessões, suas emoções são confidenciais e respeitadas,{' '}
              <b>permitindo que você explore e cresça com apoio.</b>
            </p>
          </Box>
          <Box>
            <FaRegSmile color="white" size={30} />
            <h2>Ver mudanças concretas</h2>
            <p>
              Entender e valorizar mudanças concretas é essencial. Elas
              representam progresso visível e{' '}
              <b>fornecem motivação para continuar.</b>
            </p>
          </Box>
        </BoxSection>
      </Section>
    </Container>
  );
}
