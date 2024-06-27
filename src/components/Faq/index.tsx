'use client';

import React, { useState } from 'react';
import { Box, BoxSection, Container, Section } from './styled';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { content } from '../../../public/assets/faqContent';

export default function Faq() {
  const [isOpen, setIsOpen] = useState(Array(content.length).fill(false));
  const toggleContent = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Container>
      <Section>
        <h1>Saiba mais</h1>
        <BoxSection>
          {content.map((item, index) => {
            const { id, title, text } = item;
            return (
              <Box key={id}>
                <div className="contentTitle">
                  <button
                    className="title"
                    onClick={() => toggleContent(index)}
                  >
                    {' '}
                    <h2>{title}</h2>
                  </button>
                  <button onClick={() => toggleContent(index)}>
                    {isOpen[index] ? <FaTimes /> : <FaPlus />}
                  </button>
                </div>
                {isOpen[index] && (
                  <div className="contentText">
                    {text.map((part, i) => (
                      <React.Fragment key={`${id}-${i}`}>{part}</React.Fragment>
                    ))}
                  </div>
                )}
              </Box>
            );
          })}
        </BoxSection>
      </Section>
    </Container>
  );
}
