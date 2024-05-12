import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ConvexClientProvider } from '@/providers/convex-client-provider';
import { Toaster } from 'sonner';
import { ModalProvider } from '@/providers/modal-provider';
import { Suspense } from 'react';
import { Loading } from '@/components/auth/loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskForge Studio - Convert Ideas to Reality',
  description:
    'A simple task management application to streamline all your tasks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            <Toaster />
            <ModalProvider />
            {children}
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
