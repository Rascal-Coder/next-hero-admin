"use client";

import { HeroUIProvider } from "@heroui/react";

import Header from "@/components/header";
import GlobalLoading from "@/components/loading/global-loading";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <GlobalLoading />
      <Header />
      {children}
    </HeroUIProvider>
  );
}
