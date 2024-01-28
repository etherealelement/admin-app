'use client';
import type { Metadata } from 'next';
import { Mulish, Anton, Inter } from 'next/font/google';
import './globals.css';
import { store } from '@/app/redux';
import { Provider } from 'react-redux';
import {appStarted} from "@/app/shared/init";

const inter = Mulish({ subsets: ['latin'] });

appStarted();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
