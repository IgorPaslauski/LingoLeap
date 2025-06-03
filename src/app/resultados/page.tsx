"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Repeat, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [topicName, setTopicName] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const scoreParam = searchParams.get('score');
    const totalParam = searchParams.get('total');
    const topicParam = searchParams.get('topic'); // You might want to fetch topic name based on ID
    
    setScore(scoreParam ? parseInt(scoreParam, 10) : 0);
    setTotal(totalParam ? parseInt(totalParam, 10) : 0);

    // For simplicity, we'll use the topic ID. In a real app, fetch the topic name.
    setTopicName(topicParam || "Quiz"); 

    // Clear score from localStorage after displaying results
    localStorage.removeItem('lingoleap_score');

  }, [searchParams]);

  if (!mounted) {
    return <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center p-4"><p>Carregando resultados...</p></div>;
  }
  
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  let message = "Continue praticando para melhorar!";
  if (percentage >= 80) {
    message = "Excelente desempenho! Você é um mestre do Português!";
  } else if (percentage >= 50) {
    message = "Bom trabalho! Você está no caminho certo.";
  }

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-md text-center shadow-xl">
        <CardHeader>
          <div className="mb-4 flex justify-center">
            <Award className="h-16 w-16 text-accent" />
          </div>
          <CardTitle className="font-headline text-3xl font-bold text-primary sm:text-4xl">
            Resultados do Quiz
          </CardTitle>
          <CardDescription className="mt-1 text-lg text-muted-foreground">
            Veja seu desempenho em {topicName}.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-primary/10 p-6">
            <p className="text-5xl font-bold text-primary">{score} <span className="text-3xl text-muted-foreground">/ {total}</span></p>
            <p className="mt-1 text-xl text-primary">Acertos ({percentage}%)</p>
          </div>
          <p className="text-lg font-medium">{message}</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-center pt-6">
          <Button asChild variant="outline" size="lg">
            <Link href="/selecao-topicos">
              <Repeat className="mr-2 h-4 w-4" />
              Outro Tópico
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Página Inicial
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
