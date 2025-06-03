"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { quizTopics, type QuizTopic, type QuizQuestion, type QuizOption } from '@/lib/quiz-data';
import { CheckCircle2, XCircle, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const topicId = params.topico as string;
  const questionId = parseInt(params.questao as string, 10);

  const [currentTopic, setCurrentTopic] = useState<QuizTopic | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0); // Simple score tracking

  useEffect(() => {
    const topic = quizTopics.find(t => t.id === topicId);
    if (topic) {
      setCurrentTopic(topic);
      const question = topic.questions[questionId - 1];
      if (question) {
        setCurrentQuestion(question);
        setIsAnswered(false);
        setSelectedOptionId(null);
        setIsCorrect(null);
      } else {
        // Invalid question ID, redirect or handle
        router.push('/selecao-topicos');
      }
    } else {
      // Invalid topic ID
      router.push('/selecao-topicos');
    }
  }, [topicId, questionId, router]);
  
  // Retrieve score from localStorage or initialize if it's the first question
  useEffect(() => {
    if (questionId === 1) {
      localStorage.setItem('lingoleap_score', '0');
      setScore(0);
    } else {
      const savedScore = localStorage.getItem('lingoleap_score');
      setScore(savedScore ? parseInt(savedScore, 10) : 0);
    }
  }, [questionId]);


  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOptionId(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || !currentQuestion) return;

    const selected = currentQuestion.options.find(opt => opt.id === selectedOptionId);
    if (selected) {
      setIsAnswered(true);
      const correct = selected.isCorrect;
      setIsCorrect(correct);
      if (correct) {
        const newScore = score + 1;
        setScore(newScore);
        localStorage.setItem('lingoleap_score', newScore.toString());
        toast({
          title: "Correto!",
          description: "Muito bem! Você acertou.",
          variant: "default",
          className: "border-green-500 bg-green-50 text-green-700",
        });
      } else {
        toast({
          title: "Incorreto!",
          description: "Não desanime, continue tentando.",
          variant: "destructive",
        });
      }
    }
  };

  const handleNextQuestion = () => {
    if (!currentTopic) return;
    if (questionId < currentTopic.questions.length) {
      router.push(`/quiz/${topicId}/${questionId + 1}`);
    } else {
      // Last question, navigate to results
      router.push(`/resultados?topic=${topicId}&score=${score}&total=${currentTopic.questions.length}`);
    }
  };

  if (!currentTopic || !currentQuestion) {
    return <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center p-4"><p>Carregando questão...</p></div>;
  }

  const progressValue = (questionId / currentTopic.questions.length) * 100;

  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      <Card className="w-full max-w-3xl mx-auto shadow-xl">
        <CardHeader>
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <span>{currentTopic.name}</span>
            <span>Questão {questionId} de {currentTopic.questions.length}</span>
          </div>
          <Progress value={progressValue} className="w-full h-2" />
          <CardTitle className="font-headline pt-4 text-2xl md:text-3xl">{currentQuestion.questionText}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={selectedOptionId ?? undefined}
            onValueChange={handleOptionSelect}
            disabled={isAnswered}
            aria-label="Opções de resposta"
          >
            {currentQuestion.options.map((option: QuizOption) => (
              <div
                key={option.id}
                className={`flex items-center space-x-3 rounded-md border p-4 transition-all
                  ${isAnswered && option.isCorrect ? 'border-green-500 bg-green-500/10 ring-2 ring-green-500' : ''}
                  ${isAnswered && !option.isCorrect && selectedOptionId === option.id ? 'border-red-500 bg-red-500/10 ring-2 ring-red-500' : ''}
                  ${!isAnswered && selectedOptionId === option.id ? 'border-primary bg-primary/10' : ''}
                  ${!isAnswered ? 'hover:bg-muted/50 cursor-pointer' : 'cursor-default'}
                `}
                onClick={() => !isAnswered && handleOptionSelect(option.id)}
              >
                <RadioGroupItem value={option.id} id={option.id} disabled={isAnswered} />
                <Label htmlFor={option.id} className={`flex-1 text-base ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}>
                  {option.text}
                </Label>
                {isAnswered && option.isCorrect && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {isAnswered && !option.isCorrect && selectedOptionId === option.id && <XCircle className="h-5 w-5 text-red-500" />}
              </div>
            ))}
          </RadioGroup>

          {isAnswered && (
            <Alert variant={isCorrect ? "default" : "destructive"} className={isCorrect ? "border-green-500 bg-green-500/10" : ""}>
              <Lightbulb className={`h-5 w-5 ${isCorrect ? "text-green-600" : "text-destructive"}`} />
              <AlertTitle className={`font-headline ${isCorrect ? "text-green-700" : ""}`}>
                {isCorrect ? "Resposta Correta!" : "Resposta Incorreta!"}
              </AlertTitle>
              <AlertDescription className={`${isCorrect ? "text-green-600" : ""}`}>
                {currentQuestion.explanation}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-end space-x-3 pt-6">
          {/* Back button could be added here if needed */}
          {!isAnswered ? (
            <Button onClick={handleSubmitAnswer} disabled={!selectedOptionId} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Confirmar Resposta
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              Próxima Questão <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
