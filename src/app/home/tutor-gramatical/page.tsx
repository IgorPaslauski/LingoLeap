"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Lightbulb, Wand2 } from 'lucide-react';
import { personalizedGrammarTutor, type PersonalizedGrammarTutorInput, type PersonalizedGrammarTutorOutput } from '@/ai/flows/personalized-grammar-tutor';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";


const studentLevelMap: { [key: string]: 'beginner' | 'intermediate' | 'advanced' } = {
  'Iniciante': 'beginner',
  'Intermediário': 'intermediate',
  'Avançado': 'advanced',
};
const studentLevelOptions = Object.keys(studentLevelMap);


const FormSchema = z.object({
  topic: z.string().min(3, { message: "O tópico deve ter pelo menos 3 caracteres." }).max(100, { message: "O tópico deve ter no máximo 100 caracteres." }),
  studentLevel: z.enum(['Iniciante', 'Intermediário', 'Avançado'], { required_error: "Por favor, selecione o nível do estudante." }),
  example: z.string().max(500, { message: "O exemplo deve ter no máximo 500 caracteres." }).optional(),
});

type FormValues = z.infer<typeof FormSchema>;

export default function AiTutorPage() {
  const [aiResponse, setAiResponse] = useState<PersonalizedGrammarTutorOutput | null>(null);
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
    setAiResponse(null);

    const tutorInput: PersonalizedGrammarTutorInput = {
      topic: data.topic,
      studentLevel: studentLevelMap[data.studentLevel],
      example: data.example || undefined,
    };

    try {
      const response = await personalizedGrammarTutor(tutorInput);
      setAiResponse(response);
    } catch (e) {
      console.error("Error calling AI tutor:", e);
      setError("Ocorreu um erro ao buscar a explicação. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      <header className="mb-8 text-center">
        <Wand2 className="mx-auto h-12 w-12 text-primary mb-2" />
        <h1 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Tutor Gramatical Inteligente
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Precisa de ajuda com algum tópico de gramática? Descreva sua dúvida e nosso tutor IA fornecerá uma explicação personalizada!
        </p>
      </header>

      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Peça sua Explicação</CardTitle>
              <CardDescription>Preencha os campos abaixo para obter ajuda.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="topic">Tópico Gramatical</FormLabel>
                    <FormControl>
                      <Input id="topic" placeholder="Ex: Uso da Crase, Concordância Verbal" {...field} />
                    </FormControl>
                    <FormDescription>Qual tópico você gostaria de entender melhor?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="studentLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="studentLevel">Seu Nível</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                      <FormControl>
                        <SelectTrigger id="studentLevel">
                          <SelectValue placeholder="Selecione seu nível de conhecimento" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {studentLevelOptions.map(level => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>Isso nos ajuda a personalizar a explicação.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="example"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="example">Exemplo Específico (Opcional)</FormLabel>
                    <FormControl>
                      <Textarea
                        id="example"
                        placeholder="Tem alguma frase ou exemplo que te confunde? Digite aqui."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                     <FormDescription>Se houver uma frase específica, nos ajude a te ajudar.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Obtendo Explicação...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Pedir Ajuda
                  </>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {error && (
        <Alert variant="destructive" className="mt-8 max-w-2xl mx-auto">
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {aiResponse && (
        <Card className="mt-8 max-w-2xl mx-auto shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Explicação Personalizada</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Explicação:</h3>
              <p className="text-muted-foreground whitespace-pre-wrap">{aiResponse.explanation}</p>
            </div>
            {aiResponse.examples && aiResponse.examples.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Exemplos:</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {aiResponse.examples.map((ex, index) => (
                    <li key={index}>{ex}</li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
