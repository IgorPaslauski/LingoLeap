import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Função para processar o texto e adicionar negrito
// Reutilizada dos componentes anteriores
const processTextForBold = (text: string) => {
  // Expressão regular para encontrar texto entre ** (ex: **negrito**)
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      // Remove os asteriscos e retorna um elemento <strong>
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part; // Retorna o texto normal
  });
};

export default function HomePage() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
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
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <CardTitle className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {processTextForBold("Bem-vindo ao **PortGo**!")}
          </CardTitle>
          <CardDescription className="mt-2 text-lg text-muted-foreground sm:text-xl">
            {processTextForBold(
              "Seu portal divertido para aprimorar o Português."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <p className="text-md leading-relaxed sm:text-lg">
            {processTextForBold(
              "Prepare-se para uma jornada interativa pelo mundo da Língua Portuguesa! Nossos quizzes são projetados para serem **inclusivos**, **acessíveis** e super **eficientes** para alunos do Ensino Médio."
            )}
          </p>
          <p className="text-md sm:text-lg">
            {processTextForBold(
              "Desafie seus conhecimentos, aprenda de forma leve e melhore suas habilidades em interpretação, gramática e redação."
            )}
          </p>
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/home/selecao-topicos">
              Começar o Quiz
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
