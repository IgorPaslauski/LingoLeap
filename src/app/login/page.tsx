"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link"; // Necessário para o link de registro
import { Button } from "@/components/ui/button"; // Importe Button
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Importe Card e seus subcomponentes

// Função para processar o texto e adicionar negrito - Copiada do HomePage
const processTextForBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Login submitted");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      redirect("/home"); // Redireciona para a página inicial após o "login"
    }, 1000);
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md shadow-xl">
        {" "}
        {/* Ajustado para max-w-md para o formulário de login */}
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            {/* Ícone de cadeado para o login - você pode escolher um ícone diferente se preferir */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-16 w-16 text-primary"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <CardTitle className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {processTextForBold("Acesse o **PortGo**")}
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground sm:text-xl">
            {processTextForBold(
              "Faça login para continuar sua jornada de aprendizado."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <form onSubmit={handleLogin} className="space-y-4">
            {" "}
            {/* Adicionado space-y para espaçamento entre os campos */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-left" // Texto alinhado à esquerda
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 text-left" // Texto alinhado à esquerda
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg" // Usando o tamanho grande do botão do shadcn/ui
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90" // Classes do botão do shadcn/ui
            >
              {loading ? "Carregando..." : "Entrar"}
            </Button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Não tem uma conta?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Registrar
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
