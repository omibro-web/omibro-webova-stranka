import { Archivo, Source_Sans_3 } from 'next/font/google';

export const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-archivo',
  display: 'swap',
});

export const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-source-sans',
  display: 'swap',
});

export const fontVars = `${archivo.variable} ${sourceSans.variable}`;
