import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "LingoLeap: Quiz de Português",
  description:
    "Quiz educativo de Língua Portuguesa para alunos do Ensino Médio, com foco em inclusão e aprendizado divertido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        {/* Optional Footer can be added here */}
      </div>
      <Toaster />
    </>
  );
}
