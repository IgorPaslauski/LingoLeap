
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { quizTopics } from '@/lib/quiz-data';
import type { QuizTopic } from '@/lib/quiz-data';

export default function TopicSelectionPage() {
  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Escolha um Tópico
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Selecione uma categoria para iniciar seu desafio de Português!
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizTopics.map((topic: QuizTopic) => (
          <Link
            key={topic.id}
            href={`/home/quiz/${topic.id}/1`}
            className="block transform rounded-lg transition-all hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <Card className="flex h-full flex-col overflow-hidden shadow-lg hover:shadow-xl">
              <CardHeader className="bg-primary/10 p-6">
                <div className="mb-3 flex items-center justify-center">
                  {topic.Icon && <topic.Icon className="h-12 w-12 text-primary" />}
                </div>
                <CardTitle className="font-headline text-center text-2xl text-primary">
                  {topic.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between p-6">
                <CardDescription className="mb-4 flex-grow text-base text-muted-foreground">
                  {topic.description}
                </CardDescription>
                <div className="mt-auto flex items-center justify-end text-sm font-semibold text-accent">
                  Começar Agora <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
