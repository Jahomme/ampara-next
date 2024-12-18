'use client';


import React, { useState, useEffect } from 'react';
import { Container, Info, Item, StyledImage } from './styled';
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { EmployeeData } from '@/@types/employees/employee';

export type TeamProps = {
  employees: EmployeeData[];
};

export default function Team({ employees }: TeamProps) {
    const [slidesPerView, setSlidesPerView] = useState(2);

    if (typeof window === undefined) return;

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
      <h1 id="Team" onClick={() => console.log(employees)}>
        Nossa Equipe
      </h1>

      <Splide options={{ perPage: slidesPerView, type: 'loop' }}>
        return (
        <>
          {employees?.map((employee) => (
            <SplideSlide key={employee.id}>
              {' '}
              <Item>
                {' '}
                <img
                  src={employee.attributes.picture.data.attributes?.url}
                  alt="Slider"
                ></img>
                <Info>
                  <span className="name">
                    <b>Nome: </b>
                    {employee.attributes.name}
                  </span>
                  <span className="crp">
                    <b>CRP: </b>
                    {employee.attributes.crp}
                  </span>
                  <span>
                    <b>Sobre mim: </b>
                    {employee.attributes.about}
                  </span>
                  <span>
                    <b>Abordagem: </b>
                    {employee.attributes.aproach}
                  </span>
                </Info>
              </Item>
            </SplideSlide>
          ))}
        </>
        );
      </Splide>
    </Container>
  );
}
