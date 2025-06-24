import { Award, Code, Users, HeartHandshake } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CreditosPage() {
  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      {/* Cabeçalho da Página */}
      <header className="mb-8 text-center">
        <Award className="mx-auto mb-2 h-16 w-16 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Créditos e Agradecimentos
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Conheça as tecnologias, recursos e pessoas que tornaram este projeto
          possível.
        </p>
      </header>

      {/* Seção de Tecnologias */}
      <Card className="w-full max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden mb-8">
        <CardHeader className="bg-primary/5 p-6">
          <CardTitle className="flex items-center font-headline text-3xl text-primary">
            <Code className="mr-3 h-8 w-8 text-accent" />
            Tecnologias Utilizadas
          </CardTitle>
          <CardDescription className="text-md">
            As ferramentas e frameworks que impulsionam este aplicativo.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Frontend & UI:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <b>Next.js</b>: Framework React para aplicações web full-stack.
              </li>
              <li>
                <b>React</b>: Biblioteca JavaScript para construção de
                interfaces de usuário.
              </li>
              <li>
                <b>Tailwind CSS</b>: Framework CSS utilitário para estilização
                rápida e responsiva.
              </li>
              <li>
                <b>Shadcn/ui</b>: Componentes de UI construídos com Radix UI e
                Tailwind CSS, garantindo um design coeso e acessível.
              </li>
              <li>
                <b>Lucide React</b>: Biblioteca de ícones simples e
                consistentes.
              </li>
              <li>
                <b>Zod</b>: Biblioteca de declaração e validação de schemas para
                dados.
              </li>
              <li>
                <b>React Hook Form</b>: Biblioteca para gerenciamento de
                formulários complexos.
              </li>
              <li>
                <b>Date-fns</b>: Biblioteca para manipulação de datas.
              </li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Inteligência Artificial:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <b>Google Gemini API</b>: Para o nosso Tutor Gramatical
                Inteligente.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Seção de Contribuidores/Agradecimentos */}
      <Card className="w-full max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/5 p-6">
          <CardTitle className="flex items-center font-headline text-3xl text-primary">
            <Users className="mr-3 h-8 w-8 text-accent" />
            Equipe e Agradecimentos
          </CardTitle>
          <CardDescription className="text-md">
            O trabalho árduo e a dedicação de quem contribuiu para este projeto.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Desenvolvimento Principal:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <b>Nicolas Castro e Igor de Oliveira</b>: Concepção e Desenvolvimento
              </li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Recursos e Inspirações:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>
                <b>Site oficial do PortGo</b>.
              </li>
              <li>
                <b>Documentação e exemplos do shadcn/ui</b>.
              </li>
            </ul>
          </div>
          <Separator />
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              Agradecimento Especial:
            </h3>
            <p className="text-muted-foreground flex items-center">
              <HeartHandshake className="mr-2 h-5 w-5 text-red-500" />A todos os
              usuários que apoiam e utilizam o aplicativo!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
