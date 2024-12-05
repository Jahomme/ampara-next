'use client';

import React, { useState, useEffect } from 'react';
import * as C from './styled';

export const ResponsiveNavContainer = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return <C.NavContainer style={{ zIndex: '10' }}>{children}</C.NavContainer>;
};
