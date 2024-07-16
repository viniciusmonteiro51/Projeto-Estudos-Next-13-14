import { Inter } from 'next/font/google'
import './globals.css'
import NextAuthSessionProvider from "../providers/sessionProvider";
import ReactQueryProvider from "@/providers/reactQueryProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Projeto para Estudos',
  description: 'Projeito feito para estudos do Next 13-14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <NextAuthSessionProvider>
        <ReactQueryProvider>
            <body className={inter.className}>
              {children}
            </body>
        </ReactQueryProvider>
      </NextAuthSessionProvider>
    </html>
  );

}
