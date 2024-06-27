'use client';

import image1 from '../../../public/assets/worker1.jpeg';
import image2 from '../../../public/assets/worker2.jpeg';
import image3 from '../../../public/assets/worker3.jpeg';
import image4 from '../../../public/assets/worker4.jpeg';
import image5 from '../../../public/assets/worker5.jpeg';
import image6 from '../../../public/assets/worker6.jpeg';

import React, { useState, useEffect } from 'react';
import { Container, Info, Item, StyledImage } from './styled';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';

const workers = [
  {
    id: 0,
    name: 'Alicia Azevedo',
    image: image1,
    crp: '00/000.000',
    description:
      'Meu nome é Alícia Azevedo, sou psicóloga formada na Universidade Potiguar (UNP) e sou Psicóloga Clínica, Psicoterapeuta Infanto-juvenil. Tenho como objetivo principal promover o desenvolvimento saudável dos meus pacientes, promovendo o autoconhecimento, a autoconfiança e o bem-estar. Como psicóloga, é fundamental reconhecer a importância da saúde mental infantojuvenil e o impacto que ela tem na vida das crianças e adolescentes. Para que assim tenham um desenvolvimento saudável.',
    approach: 'Terapia cognitivo-comportamental (TCC)',
  },
  {
    id: 1,
    name: 'José Lucas',
    image: image2,
    crp: '00/000.000',
    description:
      'Meu nome é José Lucas, sou psicólogo formado na Universidade Potiguar (UNP) e sou psicólogo comportamental. Meu objetivo é te ajudar a ter uma vida mais leve e equilibrada com abordagens específicas. Faço atendimento clínico para casais e individuais.',
    approach: 'Terapia cognitivo-comportamental (TCC)',
  },
  {
    id: 2,
    name: 'Havila Raissa',
    image: image3,
    crp: '00/000.000',
    description:
      'Meu nome é Havila Raissa, sou psicóloga formada na Universidade Potiguar (UNP) e sou psicóloga psicanalista. Atualmente sou psicóloga hospitalar e tenho o objetivo de mudar a vida dos meus pacientes assim como a psicologia mudou a minha.',
    approach: 'Psicanálise',
  },
  {
    id: 3,
    name: 'Eduarda Fagundes',
    image: image4,
    crp: '00/000.000',
    description:
      'Meu nome é Eduarda Fagundes, sou psicóloga formada na Universidade Potiguar (UNP) e sou psicóloga comportamental. No momento atual na área infantil com foco em transtornos do neurodesenvolvimento. ',
    approach: 'Terapia cognitivo-comportamental (TCC)',
  },
  {
    id: 4,
    name: 'Clésio Ventura',
    image: image5,
    crp: '00/000.000',
    description:
      'Meu nome é Clésio Ventura, psicólogo formado pela UnP (Universidade Potiguar). Ajudo meus clientes a alcançar equilíbrio nas áreas familiar, profissional e pessoal, promovendo uma vida harmoniosa. Utilizo a Psicologia Psicanalítica para entender o inconsciente e os processos internos que influenciam comportamentos e emoções. Ofereço um espaço seguro e acolhedor para facilitar o autoconhecimento e a resolução de conflitos internos.',
    approach: 'Psicanálise',
  },
  {
    id: 5,
    name: 'Maria Gabriela',
    image: image6,
    crp: '00/000.000',
    description:
      'Meu nome é Maria Gabriela, sou psicóloga formada pela Universidade Potiguar (UNP). Meu objetivo é construir uma parceria acolhedora com meus clientes, ajudando-os a alcançar as mudanças desejadas. Atuo na Psicoterapia, que considero uma jornada de desenvolvimento pessoal. Durante essa jornada, trabalhamos para promover autoconhecimento, autoconfiança, inteligência emocional, bem-estar e saúde mental. Como Psicóloga Clínica, minha principal função é facilitar o desenvolvimento pessoal de cada cliente.',
    approach: 'Psicologia Clínica',
  },
];

export default function Team() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 760) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <h1 id="Team">Nossa Equipe</h1>
      <Splide
        options={{
          perPage: slidesPerView,
          type: 'loop',
        }}
      >
        {workers.map((item) => {
          const { id, name, image, crp, description, approach } = item;
          return (
            <>
              <SplideSlide key={id}>
                {' '}
                <Item>
                  {' '}
                  <StyledImage src={image} alt="Slider"></StyledImage>
                  <Info>
                    <span className="name">
                      <b>Nome: </b>
                      {name}
                    </span>
                    <span className="crp">
                      <b>CRP: </b>
                      {crp}
                    </span>
                    <span>
                      <b>Sobre mim: </b>
                      {description}
                    </span>
                    <span>
                      <b>Abordagem: </b>
                      {approach}
                    </span>
                  </Info>
                </Item>
              </SplideSlide>
            </>
          );
        })}
      </Splide>
    </Container>
  );
}
