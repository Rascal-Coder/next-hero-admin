// globals.css includes @tailwind directives
// adjust the path if necessary
import "@/styles/globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import Script from "next/script";

import { Providers } from "./providers";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-app-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Admin",
  description: "Middle and back-end templates based on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSansSC.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* 与 globals.css 中 prefers-color-scheme 一致，避免 HeroUI 写死 light 时导航字色与深色背景冲突 */}
        <Script id="heroui-theme-class" strategy="beforeInteractive">
          {`(function(){function s(){var m=window.matchMedia("(prefers-color-scheme: dark)"),r=document.documentElement;r.classList.remove("light","dark");r.classList.add(m.matches?"dark":"light")}s();try{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s)}catch(e){}})();`}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}