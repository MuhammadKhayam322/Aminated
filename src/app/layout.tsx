// src/app/layout.tsx
import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './globals.css';

import { Sora } from 'next/font/google';

const sourceSansPro = Sora({
  subsets: ['latin'],
  weight: ['400', '600'], // adjust as needed
  variable: '--font-sora', // Tailwind variable name
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={sourceSansPro.variable}>
      <body>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
