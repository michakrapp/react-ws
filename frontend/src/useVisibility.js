import { useState, useEffect } from 'react';

export default function useVisibility(initialValue = true) {
  const [isVisible, setIsVisible] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
  }, []);

  return isVisible;
}
