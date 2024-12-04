'use client';

import React, { useState, useEffect } from 'react';
import * as C from './styled';

export const ResponsiveNavContainer = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicStyle = {
    paddingLeft: windowWidth < 768 ? '5vw' : '15vw', // Aplica 5vw para telas menores que 768px
  };

  return <C.NavContainer>{children}</C.NavContainer>;
};
