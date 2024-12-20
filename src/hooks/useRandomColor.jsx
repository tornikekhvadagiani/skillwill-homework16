import { useMemo } from 'react';

const useRandomColor = () => {
  const color = useMemo(() => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }, []);

  return color;
};

export default useRandomColor;
