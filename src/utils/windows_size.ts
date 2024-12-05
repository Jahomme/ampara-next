import { useState, useEffect } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}

export const useWindowDimensions = (): WindowDimensions => {
  // Define o estado inicial com base no lado do cliente
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    () => {
      // Verifica se está no cliente antes de acessar `window`
      if (typeof window !== 'undefined') {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      }
      return { width: 0, height: 0 }; // valor inicial para o servidor
    },
  );

  useEffect(() => {
    // Verifica se o código está sendo executado no cliente
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      // Remove o event listener quando o componente for desmontado
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Executa apenas uma vez após a montagem do componente

  return windowDimensions;
};
