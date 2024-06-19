'use client'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

function ScrollToTop() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    if (currentPath !== pathname) {
      window.scrollTo(0, 0);
      setCurrentPath(pathname);
    }
  }, [pathname, currentPath]);

  return null;
}

export default ScrollToTop;
