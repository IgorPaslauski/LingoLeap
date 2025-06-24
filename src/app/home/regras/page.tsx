"use client";

import {
  Scale,
  ListTodo,
  Lightbulb,
  Trophy,
  Sparkles,
  Zap,
  Eraser,
  CheckCircle2,
} from "lucide-react"; // Importando novos ícones relevantes
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function RegrasPage() {
  return (
    <div className="container mx-auto p-4 py-8 sm:p-6 md:p-8">
      {/* Cabeçalho da Página */}
      <header className="mb-8 text-center">
        <Scale className="mx-auto mb-2 h-16 w-16 text-primary" />
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          Regras do Jogo
        </h1>
        <p className="mt-3 text-xl text-muted-foreground">
          Entenda como funciona e prepare-se para dominar a língua portuguesa!
        </p>
      </header>

      {/* Card Principal de Regras */}
      <Card className="w-full max-w-3xl mx-auto shadow-2xl rounded-xl overflow-hidden mb-8">
        <CardHeader className="bg-primary/5 p-6">
          <CardTitle className="flex items-center font-headline text-3xl text-primary">
            <ListTodo className="mr-3 h-8 w-8 text-accent" />
            Como Jogar
          </CardTitle>
          <CardDescription className="text-md">
            Siga estes passos simples para começar sua jornada de aprendizado.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Regra 1 */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
              1. Escolha seu Tópico
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              No menu de **Seleção de Tópicos**, escolha a área da gramática que
              você deseja praticar. Temos opções desde concordância verbal até
              regência nominal.
            </p>
          </div>
          <Separator />
          {/* Regra 2 */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center">
              <ListTodo className="mr-2 h-5 w-5 text-blue-500" />
              2. Responda às Questões
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada tópico contém uma série de questões. Leia atentamente a
              pergunta e as opções de resposta. Selecione a alternativa que você
              considera correta.
            </p>
          </div>
          <Separator />
          {/* Regra 3 */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center">
              <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
              3. Verifique e Aprenda
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Após selecionar sua resposta, o sistema indicará se você acertou
              ou errou. Uma **explicação detalhada** será fornecida para que
              você compreenda o porquê da resposta correta. Use-a para aprimorar
              seus conhecimentos!
            </p>
          </div>
          <Separator />
          {/* Regra 4: Nova seção para Ajudas */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center">
              <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
              4. Peça Ajuda (Opcional)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Se estiver com dificuldades em uma questão, você pode usar as
              ajudas disponíveis:
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li className="flex items-center">
                <Lightbulb className="mr-2 h-4 w-4 text-blue-500" />
                **Dica**: Receba uma pista sobre a questão. (Custo: -1 ponto)
              </li>
              <li className="flex items-center">
                <Eraser className="mr-2 h-4 w-4 text-purple-500" />
                **Remover 1 Opção**: Elimina uma alternativa incorreta. (Custo:
                -2 pontos)
              </li>
              <li className="flex items-center">
                <Zap className="mr-2 h-4 w-4 text-orange-500" />
                **Remover 2 Opções**: Elimina duas alternativas incorretas.
                (Custo: -3 pontos)
              </li>
            </ul>
            <p className="text-sm italic text-muted-foreground mt-2">
              Use as ajudas com sabedoria, pois elas afetam sua pontuação final.
            </p>
          </div>
          <Separator />
          {/* Regra 5 (antiga Regra 4) */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-green-500" />
              5. Acompanhe seu Progresso
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Seu desempenho é registrado. Acerte o máximo de questões para
              **subir no ranking** e se tornar um mestre da língua portuguesa!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Card Opcional: Dicas Adicionais */}
      <Card className="w-full max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden mt-8">
        <CardHeader className="bg-primary/5 p-6">
          <CardTitle className="flex items-center font-headline text-2xl text-primary">
            <Lightbulb className="mr-2 h-6 w-6 text-accent" />
            Dicas para o Sucesso
          </CardTitle>
          <CardDescription className="text-md">
            Pequenas dicas para você se dar bem em nossos desafios.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              **Revise**: Sempre leia as explicações, mesmo que acerte, para
              reforçar o aprendizado.
            </li>
            <li>
              **Não desista**: Errar faz parte do processo. Use os erros para
              aprender e melhorar.
            </li>
            <li>
              **Use o Tutor IA**: Se uma explicação não for suficiente, use o
              nosso **Tutor Gramatical Inteligente** para uma ajuda mais
              aprofundada!
            </li>
            <li>
              **Pratique Regularmente**: A consistência é a chave para a
              fluência.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
