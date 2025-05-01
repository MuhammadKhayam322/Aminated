// src/app/layout.tsx
import { ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './globals.css';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body>
        <ConfigProvider>
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
