'use client';

import React, { useState } from 'react';
import { Box, BoxSection, Container, Section } from './styled';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { content } from '../../../public/assets/faqContent';
import { ContentAttributes } from '../../domain/faq-content/faq-content';
import ReactMarkdown from 'react-markdown';

export type FaqContentAttributes = ContentAttributes & {
  contentHtml: string;
};

export type FaqContentData = {
  id: number;
  attributes: FaqContentAttributes;
};

export type FaqProps = {
  contents: FaqContentData[];
};

export default function Faq({ contents }: FaqProps) {
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
          {contents.map((content) => {
            return (
              <Box key={content.id}>
                <div className="contentTitle">
                  <button
                    className="title"
                    onClick={() => toggleContent(content.id)}
                  >
                    {' '}
                    <h2>{content.attributes.title}</h2>
                  </button>
                  <button onClick={() => toggleContent(content.id)}>
                    {isOpen[content.id] ? <FaTimes /> : <FaPlus />}
                  </button>
                </div>
                {isOpen[content.id] && (
                  <div
                    className="contentText"
                    dangerouslySetInnerHTML={{
                      __html: content.attributes.contentHtml,
                    }}
                  ></div>
                )}
              </Box>
            );
          })}
        </BoxSection>
      </Section>
    </Container>
  );
}
