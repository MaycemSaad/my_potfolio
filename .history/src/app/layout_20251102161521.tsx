import type { Metadata } from "next";
import { Inter } from "next/font/google";
import"./

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Votre Nom - Portfolio",
  description: "Développeur Full Stack passionné par la création d'expériences digitales exceptionnelles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}