"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Função para processar o texto e adicionar negrito - Reutilizada para consistência
const processTextForBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Register submitted");
    setLoading(true);
    // Simula uma chamada de API ou processamento de registro
    setTimeout(() => {
      setLoading(false);
      // Após o registro (simulado), redireciona para a página de login ou home
      redirect("/home"); // Ou para "/login" se preferir que ele faça login após o registro
    }, 1500);
  };

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            {/* Ícone de Usuário para o Registro */}
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
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <CardTitle className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {processTextForBold("Crie sua conta **PortGo**")}
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground sm:text-xl">
            {processTextForBold(
              "Junte-se a nós e comece a aprender Português de forma divertida!"
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Seu nome"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Seu melhor email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 text-left"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Crie uma senha segura"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {loading ? "Registrando..." : "Registrar"}
            </Button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Fazer Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
