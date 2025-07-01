"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Loader2,
  Lightbulb,
  Wand2,
  GraduationCap,
  Send,
  UserCircle2,
} from "lucide-react"; // Novos ícones
import {
  personalizedGrammarTutor,
  type PersonalizedGrammarTutorInput,
  type PersonalizedGrammarTutorOutput,
} from "@/ai/flows/personalized-grammar-tutor";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Tipagem para a conversa (entrada do usuário e resposta da IA)
interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string | PersonalizedGrammarTutorOutput;
  timestamp: Date;
  topic?: string;
  level?: string;
  example?: string;
}

const studentLevelMap: {
  [key: string]: "beginner" | "intermediate" | "advanced";
} = {
  Iniciante: "beginner",
  Intermediário: "intermediate",
  Avançado: "advanced",
};
const studentLevelOptions = Object.keys(studentLevelMap);

const FormSchema = z.object({
  topic: z
    .string()
    .min(3, { message: "O tópico deve ter pelo menos 3 caracteres." })
    .max(100, { message: "O tópico deve ter no máximo 100 caracteres." }),
  studentLevel: z.enum(["Iniciante", "Intermediário", "Avançado"], {
    required_error: "Por favor, selecione o nível do estudante.",
  }),
  example: z
    .string()
    .max(500, { message: "O exemplo deve ter no máximo 500 caracteres." })
    .optional(),
});

type FormValues = z.infer<typeof FormSchema>;

// Função para processar o texto e adicionar negrito
const processTextForBold = (text: string) => {
  // Expressão regular para encontrar texto entre ** (ex: **negrito**)
  // O grupo de captura () pega o texto dentro dos asteriscos
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      // Remove os asteriscos e retorna um elemento <strong>
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part; // Retorna o texto normal
  });
};

// Função para renderizar conteúdo da IA
const renderAiContent = (content: PersonalizedGrammarTutorOutput) => {
  const explanation = processTextForBold(content.explanation);

  return (
    <>
      <h3 className="font-semibold text-lg mb-1">Explicação:</h3>
      <p className="whitespace-pre-wrap leading-relaxed">{explanation}</p>
      {content.examples && content.examples.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold text-base mb-1">Exemplos:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {content.examples.map((ex, idx) => (
              <li key={idx}>{processTextForBold(ex)}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default function AiTutorPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      topic: "",
      studentLevel: undefined,
      example: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);

    // Adiciona a pergunta do usuário ao histórico
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        type: "user",
        content: `Tópico: "${data.topic}" (Nível: ${data.studentLevel}${
          data.example ? `, Exemplo: "${data.example}"` : ""
        })`,
        timestamp: new Date(),
        topic: data.topic,
        level: data.studentLevel,
        example: data.example,
      },
    ]);

    const tutorInput: PersonalizedGrammarTutorInput = {
      topic: data.topic,
      studentLevel: studentLevelMap[data.studentLevel],
      example: data.example || undefined,
    };

    try {
      const response = await personalizedGrammarTutor(tutorInput);
      // Adiciona a resposta da IA ao histórico
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          type: "ai",
          content: response,
          timestamp: new Date(),
        },
      ]);
      form.reset(); // Limpa o formulário após enviar
    } catch (e) {
      console.error("Error calling AI tutor:", e);
      const errorMessage =
        "Ocorreu um erro ao buscar a explicação. Tente novamente mais tarde.";
      setError(errorMessage);
      // Adiciona a mensagem de erro como uma mensagem da IA para o chat
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          type: "ai",
          content: { explanation: errorMessage, examples: [] }, // Formato para erro
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      {/* Cabeçalho da Página */}
      <header className="mb-8 text-center">
        <GraduationCap className="mx-auto mb-2 h-16 w-16 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Tutor Gramatical Inteligente
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Converse com nosso IA para obter explicações personalizadas.
        </p>
      </header>

      <Card className="w-full max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden flex flex-col h-[70vh]">
        {" "}
        {/* Ajustado para altura de chat */}
        <CardHeader className="bg-primary/5 p-4 border-b">
          {" "}
          {/* CardHeader menor para o chat */}
          <CardTitle className="flex items-center font-headline text-2xl text-primary">
            <Wand2 className="mr-2 h-6 w-6 text-accent" />
            Converse com o Tutor
          </CardTitle>
          <CardDescription className="text-sm">
            Digite sua dúvida abaixo e o tutor IA te responderá.
          </CardDescription>
        </CardHeader>
        {/* Área de Conversa */}
        <CardContent className="flex-1 p-6 overflow-y-auto space-y-6 bg-background/90">
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
              <Lightbulb className="h-12 w-12 mb-4 text-primary/50" />
              <p className="text-lg">
                Pronto para aprender? Faça sua primeira pergunta!
              </p>
              <p className="text-sm">
                Preencha o formulário abaixo para começar.
              </p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-4 ${
                message.type === "user" ? "justify-end" : ""
              }`}
            >
              {message.type === "ai" && (
                <div className="flex-shrink-0">
                  <Wand2 className="h-8 w-8 text-accent" />{" "}
                  {/* Ícone para IA */}
                </div>
              )}
              <div
                className={`p-4 rounded-lg max-w-[80%] ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-foreground rounded-bl-none"
                }`}
              >
                {message.type === "user" ? (
                  <p className="whitespace-pre-wrap font-medium">
                    {message.content as string}
                  </p>
                ) : (
                  renderAiContent(
                    message.content as PersonalizedGrammarTutorOutput
                  )
                )}
                <span
                  className={`block text-xs mt-2 ${
                    message.type === "user"
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              {message.type === "user" && (
                <div className="flex-shrink-0">
                  <UserCircle2 className="h-8 w-8 text-primary" />{" "}
                  {/* Ícone para o usuário */}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-4">
              <Wand2 className="h-8 w-8 text-accent animate-pulse" />
              <div className="p-4 rounded-lg bg-muted text-foreground rounded-bl-none max-w-[80%]">
                <p>O tutor está pensando...</p>
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="mt-4 max-w-2xl mx-auto">
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        {/* Formulário de Entrada (Chat Input) */}
        <CardFooter className="border-t p-4 bg-muted/20">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Tópico Gramatical</FormLabel>
                    <FormControl>
                      <Input
                        id="topic"
                        placeholder="Qual tópico de gramática você quer aprender?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="studentLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Seu Nível</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger id="studentLevel">
                            <SelectValue placeholder="Seu nível (Ex: Iniciante)" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {studentLevelOptions.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="example"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">
                        Exemplo Específico (Opcional)
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="example"
                          placeholder="Exemplo específico (opcional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Pergunta
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardFooter>
      </Card>
    </div>
  );
}
