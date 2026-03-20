'use client';

import { useEffect, useState } from 'react';

const GlobalLoading = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // 判断组件是否挂载
  if (!mounted) {
    return (
      <div className="fixed inset-0 z-9999 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-900">
        <div className="relative w-12 h-12 rotate-165 before:content-[''] after:content-[''] before:absolute after:absolute before:top-2/4 after:top-2/4 before:left-2/4 after:left-2/4 before:block after:block before:w-[.5em] after:w-[.5em] before:h-[.5em] after:h-[.5em] before:rounded after:rounded before:-translate-x-1/2 after:-translate-x-1/2 before:-translate-y-2/4 after:-translate-y-2/4 before:animate-[loaderBefore_2s_infinite] after:animate-[loaderAfter_2s_infinite]"></div>
      </div>
    );
  }
  return null;
};
export default GlobalLoading;