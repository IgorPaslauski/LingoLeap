"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  quizTopics,
  type QuizTopic,
  type QuizQuestion,
  type QuizOption,
} from "@/lib/quiz-data";
import {
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronRight,
  Sparkles,
  Zap,
  Eraser,
  Coins,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const topicId = params.topico as string;
  const questionId = parseInt(params.questao as string, 10);

  const [currentTopic, setCurrentTopic] = useState<QuizTopic | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(
    null
  );
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [removedOptions, setRemovedOptions] = useState<string[]>([]);

  const [tipUsesRemaining, setTipUsesRemaining] = useState(1);
  const [removeOneUsesRemaining, setRemoveOneUsesRemaining] = useState(1);
  const [removeTwoUsesRemaining, setRemoveTwoUsesRemaining] = useState(1);

  useEffect(() => {
    const topic = quizTopics.find((t) => t.id === topicId);
    if (topic) {
      setCurrentTopic(topic);
      const question = topic.questions[questionId - 1];
      if (question) {
        setCurrentQuestion(question);
        setIsAnswered(false);
        setSelectedOptionId(null);
        setIsCorrect(null);
        setShowTip(false);
        setRemovedOptions([]);

        setTipUsesRemaining(1);
        setRemoveOneUsesRemaining(1);
        setRemoveTwoUsesRemaining(1);
      } else {
        router.push("/selecao-topicos");
      }
    } else {
      router.push("/selecao-topicos");
    }
  }, [topicId, questionId, router]);

  useEffect(() => {
    if (questionId === 1) {
      localStorage.setItem("lingoleap_score", "0");
      setScore(0);
    } else {
      const savedScore = localStorage.getItem("lingoleap_score");
      setScore(savedScore ? parseInt(savedScore, 10) : 0);
    }
  }, [questionId]);

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered && !removedOptions.includes(optionId)) {
      setSelectedOptionId(optionId);
    }
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || !currentQuestion) return;

    const selected = currentQuestion.options.find(
      (opt) => opt.id === selectedOptionId
    );
    if (selected) {
      setIsAnswered(true);
      const correct = selected.isCorrect;
      setIsCorrect(correct);
      if (correct) {
        const newScore = score + 1;
        setScore(newScore);
        localStorage.setItem("lingoleap_score", newScore.toString());
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
      router.push(`/home/quiz/${topicId}/${questionId + 1}`);
    } else {
      router.push(
        `/home/resultados?topic=${topicId}&score=${score}&total=${currentTopic.questions.length}`
      );
    }
  };

  const handleShowTip = () => {
    if (currentQuestion?.tip && tipUsesRemaining > 0) {
      setShowTip(true);
      setTipUsesRemaining((prev) => prev - 1);
      toast({
        title: "Dica Revelada!",
        description: "Use-a com sabedoria para resolver a questão.",
        variant: "default",
        className: "border-blue-500 bg-blue-50 text-blue-700",
      });
      setScore((prevScore) => Math.max(0, prevScore - 1));
    } else {
      toast({
        title: "Sem Dica",
        description:
          tipUsesRemaining === 0
            ? "Você usou todas as dicas."
            : "Não há uma dica disponível para esta questão.",
        variant: "info",
      });
    }
  };

  const handleRemoveOptions = (count: 1 | 2) => {
    let usesRemaining =
      count === 1 ? removeOneUsesRemaining : removeTwoUsesRemaining;
    let setUsesRemaining =
      count === 1 ? setRemoveOneUsesRemaining : setRemoveTwoUsesRemaining;
    let cost = count === 1 ? 2 : 3;

    if (isAnswered || !currentQuestion || usesRemaining === 0) return;

    const incorrectOptions = currentQuestion.options.filter(
      (opt) => !opt.isCorrect && !removedOptions.includes(opt.id)
    );

    if (incorrectOptions.length < count) {
      toast({
        title: "Ajuda Indisponível",
        description: "Não há opções incorretas suficientes para remover.",
        variant: "info",
      });
      return;
    }

    const optionsToRemove: string[] = [];
    const availableIncorrect = [...incorrectOptions];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * availableIncorrect.length);
      optionsToRemove.push(availableIncorrect[randomIndex].id);
      availableIncorrect.splice(randomIndex, 1);
    }

    setRemovedOptions((prev) => [...prev, ...optionsToRemove]);
    setSelectedOptionId(null);

    setUsesRemaining((prev) => prev - 1);

    toast({
      title: `${count} Opção(ões) Removida(s)!`,
      description: `${count} alternativa(s) incorreta(s) foi(ram) eliminada(s).`,
      variant: "default",
      className: `border-${count === 1 ? "purple" : "orange"}-500 bg-${
        count === 1 ? "purple" : "orange"
      }-50 text-${count === 1 ? "purple" : "orange"}-700`,
    });
    setScore((prevScore) => Math.max(0, prevScore - cost));
  };

  if (!currentTopic || !currentQuestion) {
    return (
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
        <p className="text-lg text-muted-foreground">Carregando questão...</p>
      </div>
    );
  }

  const progressValue = (questionId / currentTopic.questions.length) * 100;

  return (
    <div className="container relative mx-auto p-4 py-8 sm:p-6 md:p-8">
      <header className="sticky top-0 bg-background/95 backdrop-blur-md z-10 p-4 mb-8 rounded-md shadow-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Coins className="h-6 w-6 text-yellow-500" />
          <span className="font-semibold text-lg">Score: {score}</span>
        </div>
        <div className="flex items-center gap-4">
          <Sparkles className="h-5 w-5 text-blue-500" />
          <span className="text-sm">Dicas: {tipUsesRemaining}</span>
          <Eraser className="h-5 w-5 text-purple-500" />
          <span className="text-sm">-1 Opção: {removeOneUsesRemaining}</span>
          <Zap className="h-5 w-5 text-orange-500" />
          <span className="text-sm">-2 Opções: {removeTwoUsesRemaining}</span>
        </div>
      </header>

      <Card className="w-full max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden">
        <CardHeader className="bg-primary/5 p-6">
          <div className="mb-2 flex items-center justify-between text-base font-semibold text-primary">
            <span>Tópico: {currentTopic.name}</span>
            <span>
              Questão {questionId} de {currentTopic.questions.length}
            </span>
          </div>
          <Progress value={progressValue} className="w-full h-3" />
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coluna da Esquerda: Pergunta e Dicas */}
          <div className="flex flex-col space-y-4">
            <CardTitle className="font-headline text-2xl md:text-3xl">
              {currentQuestion.questionText}
            </CardTitle>
            <CardDescription className="text-md text-muted-foreground">
              Selecione a opção correta.
            </CardDescription>

            {showTip && currentQuestion.tip && (
              <Alert
                variant="default"
                className="mt-4 border-blue-500 bg-blue-500/10"
              >
                <Lightbulb className="h-5 w-5 text-blue-600" />
                <AlertTitle className="font-headline text-blue-700">
                  Dica!
                </AlertTitle>
                <AlertDescription className="text-blue-600">
                  {currentQuestion.tip}
                </AlertDescription>
              </Alert>
            )}

            {isAnswered && (
              <Alert
                variant={isCorrect ? "default" : "destructive"}
                className={isCorrect ? "border-green-500 bg-green-500/10" : ""}
              >
                <Lightbulb
                  className={`h-5 w-5 ${
                    isCorrect ? "text-green-600" : "text-destructive"
                  }`}
                />
                <AlertTitle
                  className={`font-headline ${
                    isCorrect ? "text-green-700" : ""
                  }`}
                >
                  {isCorrect ? "Resposta Correta!" : "Resposta Incorreta!"}
                </AlertTitle>
                <AlertDescription
                  className={`${isCorrect ? "text-green-600" : ""}`}
                >
                  {currentQuestion.explanation}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Coluna da Direita: Opções de Resposta */}
          <div className="flex flex-col space-y-4">
            <RadioGroup
              value={selectedOptionId ?? undefined}
              onValueChange={handleOptionSelect}
              disabled={isAnswered}
              aria-label="Opções de resposta"
            >
              {currentQuestion.options.map((option: QuizOption) => (
                <div
                  key={option.id}
                  className={`flex items-center space-x-3 rounded-lg border-2 p-4 transition-all duration-200 ease-in-out
                    ${
                      isAnswered && option.isCorrect
                        ? "border-green-500 bg-green-500/10 ring-2 ring-green-500"
                        : ""
                    }
                    ${
                      isAnswered &&
                      !option.isCorrect &&
                      selectedOptionId === option.id
                        ? "border-red-500 bg-red-500/10 ring-2 ring-red-500"
                        : ""
                    }
                    ${
                      !isAnswered && selectedOptionId === option.id
                        ? "border-primary bg-primary/10 ring-2 ring-primary"
                        : ""
                    }
                    ${
                      !isAnswered && removedOptions.includes(option.id)
                        ? "opacity-50 line-through cursor-not-allowed bg-gray-100"
                        : !isAnswered
                        ? "hover:bg-muted/50 cursor-pointer"
                        : "cursor-default opacity-80"
                    }
                  `}
                  onClick={() =>
                    !isAnswered &&
                    !removedOptions.includes(option.id) &&
                    handleOptionSelect(option.id)
                  }
                >
                  <RadioGroupItem
                    value={option.id}
                    id={option.id}
                    disabled={isAnswered || removedOptions.includes(option.id)}
                    className="w-5 h-5"
                  />
                  <Label
                    htmlFor={option.id}
                    className={`flex-1 text-base md:text-lg ${
                      !isAnswered && !removedOptions.includes(option.id)
                        ? "cursor-pointer"
                        : "cursor-default"
                    }`}
                  >
                    {option.text}
                  </Label>
                  {isAnswered && option.isCorrect && (
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  )}
                  {isAnswered &&
                    !option.isCorrect &&
                    selectedOptionId === option.id && (
                      <XCircle className="h-6 w-6 text-red-500" />
                    )}
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between border-t p-4 bg-muted/20 gap-2">
          <div className="flex gap-2">
            {!isAnswered && (
              <>
                <Button
                  onClick={handleShowTip}
                  variant="outline"
                  disabled={
                    showTip || !currentQuestion.tip || tipUsesRemaining === 0
                  }
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                  size="sm"
                >
                  <Sparkles className="mr-1 h-4 w-4" />
                  Dica ({tipUsesRemaining})
                </Button>
                <Button
                  onClick={() => handleRemoveOptions(1)}
                  variant="outline"
                  disabled={
                    isAnswered ||
                    currentQuestion.options.filter(
                      (opt) =>
                        !opt.isCorrect && !removedOptions.includes(opt.id)
                    ).length < 1 ||
                    removeOneUsesRemaining === 0
                  }
                  className="text-purple-600 border-purple-600 hover:bg-purple-50"
                  size="sm"
                >
                  <Eraser className="mr-1 h-4 w-4" />
                  -1 Opção ({removeOneUsesRemaining})
                </Button>
                <Button
                  onClick={() => handleRemoveOptions(2)}
                  variant="outline"
                  disabled={
                    isAnswered ||
                    currentQuestion.options.filter(
                      (opt) =>
                        !opt.isCorrect && !removedOptions.includes(opt.id)
                    ).length < 2 ||
                    removeTwoUsesRemaining === 0
                  }
                  className="text-orange-600 border-orange-600 hover:bg-orange-50"
                  size="sm"
                >
                  <Zap className="mr-1 h-4 w-4" />
                  -2 Opções ({removeTwoUsesRemaining})
                </Button>
              </>
            )}
          </div>

          {!isAnswered ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={
                !selectedOptionId || removedOptions.includes(selectedOptionId)
              }
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 text-lg"
            >
              Confirmar Resposta
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="px-6 py-3 text-lg">
              Próxima Questão <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
