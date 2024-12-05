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
import { AmnesiaIcon } from '../svg/need/amnesia';
import { DesrealizacaoIcon } from '../svg/need/desrealizacao';
import { ComportamentosIcon } from '../svg/need/comportamentos';
import { ConfusaoIcon } from '../svg/need/confusao';
import { EstresseIcon } from '../svg/need/estresse';
import { MudancasIcon } from '../svg/need/mudancas';

const data = [
  { icon: <AmnesiaIcon />, text: 'Amnésia Dissociativa' },
  { icon: <DesrealizacaoIcon />, text: 'Desrealização' },
  { icon: <ComportamentosIcon />, text: 'Comportamentos Inconsistentes' },
  { icon: <ConfusaoIcon />, text: 'Sentimentos de Confusão' },
  { icon: <EstresseIcon />, text: 'Reações Excessivas ao Estresse' },
  { icon: <MudancasIcon />, text: 'Mudanças de Identidade' },
];

export default function Need() {
  return (
    <Container>
      <Section>
        {' '}
        <h1>Sinais de que você precisa de Terapia</h1>
        <BoxSection>
          {data.map((item, i) => (
            <Box key={i}>
              {item.icon}
              <p>{item.text}</p>
            </Box>
          ))}
        </BoxSection>
      </Section>
    </Container>
  );
}
