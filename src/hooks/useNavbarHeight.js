// src/hooks/useNavbarHeight.js
import { useEffect } from 'react';

const useNavbarHeight = (setNavbarHeight) => {
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    // Actualiza la altura al montar el componente
    updateNavbarHeight();

    // Actualiza la altura en redimensionamiento de ventana
    window.addEventListener('resize', updateNavbarHeight);

    // Limpia el evento en desmontaje del componente
    return () => window.removeEventListener('resize', updateNavbarHeight);
  }, [setNavbarHeight]);
};

export default useNavbarHeight;
