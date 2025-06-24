// app/home/quiz/[topico]/[questao]/params-generator.ts
// Este será um MÓDULO SERVIDOR por padrão (sem "use client")

import { quizTopics } from "@/lib/quiz-data";
import type { Metadata } from "next"; // Importe se for usar metadata

// =======================================================================
// ESTA É A FUNÇÃO QUE SERÁ EXPORTADA E USADA PELO Next.js
// =======================================================================
export async function generateStaticParams() {
  const params: { topico: string; questao: string }[] = [];

  quizTopics.forEach((topic) => {
    topic.questions.forEach((_question, index) => {
      params.push({
        topico: topic.id,
        questao: (index + 1).toString(),
      });
    });
  });

  console.log("Parâmetros estáticos gerados para o quiz:", params);
  return params;
}

// Opcional: Se você quiser gerar metadata para cada rota estática
export async function generateMetadata({
  params,
}: {
  params: { topico: string; questao: string };
}): Promise<Metadata> {
  const topic = quizTopics.find((t) => t.id === params.topico);
  const question = topic?.questions[parseInt(params.questao, 10) - 1];

  return {
    title: question
      ? `Questão ${params.questao} - ${topic?.name}`
      : "Questão do Quiz",
    description: question ? question.questionText : "Uma questão do quiz.",
  };
}
