import type { LucideIcon } from 'lucide-react';
import { BookOpenText, SpellCheck2, FileEdit } from 'lucide-react';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: QuizOption[];
  explanation: string;
}

export interface QuizTopic {
  id: string;
  name: string;
  description: string;
  Icon?: LucideIcon;
  questions: QuizQuestion[];
}

export const quizTopics: QuizTopic[] = [
  {
    id: 'interpretacao-textual',
    name: 'Interpretação Textual',
    description: 'Teste suas habilidades de compreensão e análise de textos diversos.',
    Icon: BookOpenText,
    questions: [
      {
        id: 1,
        questionText: 'Qual é a principal ideia do primeiro parágrafo do texto (imaginário) sobre a Amazônia?',
        options: [
          { id: 'a', text: 'A riqueza da fauna local.', isCorrect: false },
          { id: 'b', text: 'A importância da preservação ambiental.', isCorrect: true },
          { id: 'c', text: 'Os desafios econômicos da região.', isCorrect: false },
          { id: 'd', text: 'As tradições culturais indígenas.', isCorrect: false },
        ],
        explanation: 'A alternativa correta é "A importância da preservação ambiental", pois geralmente textos sobre a Amazônia enfatizam este ponto crucial.',
      },
      {
        id: 2,
        questionText: 'No trecho "Ele correu rapidamente", qual a função da palavra "rapidamente"?',
        options: [
          { id: 'a', text: 'Substantivo', isCorrect: false },
          { id: 'b', text: 'Adjetivo', isCorrect: false },
          { id: 'c', text: 'Advérbio de modo', isCorrect: true },
          { id: 'd', text: 'Verbo', isCorrect: false },
        ],
        explanation: '"Rapidamente" é um advérbio de modo, pois indica a maneira como a ação de correr foi realizada.',
      },
    ],
  },
  {
    id: 'gramatica-e-coesao',
    name: 'Gramática e Coesão',
    description: 'Aprimore seus conhecimentos sobre as regras da língua e a construção de textos coesos.',
    Icon: SpellCheck2,
    questions: [
      {
        id: 1,
        questionText: 'Qual das frases abaixo utiliza a concordância verbal corretamente?',
        options: [
          { id: 'a', text: 'Houveram muitos problemas.', isCorrect: false },
          { id: 'b', text: 'Faz muitos anos que não o vejo.', isCorrect: true },
          { id: 'c', text: 'Existe muitas pessoas aqui.', isCorrect: false },
          { id: 'd', text: 'A gente fomos ao cinema.', isCorrect: false },
        ],
        explanation: 'A frase "Faz muitos anos que não o vejo." está correta. O verbo "fazer" indicando tempo decorrido é impessoal e fica na 3ª pessoa do singular.',
      },
      {
        id: 2,
        questionText: 'O uso da crase é obrigatório em qual alternativa?',
        options: [
          { id: 'a', text: 'Vou a praia.', isCorrect: false }, // seria à
          { id: 'b', text: 'Entreguei o livro a ela.', isCorrect: false }, // pronome pessoal
          { id: 'c', text: 'Refiro-me àquilo que discutimos.', isCorrect: true }, // à + aquilo
          { id: 'd', text: 'Ele veio a cavalo.', isCorrect: false }, // locução adverbial masculina
        ],
        explanation: 'Em "Refiro-me àquilo que discutimos", a crase é obrigatória devido à contração da preposição "a" (exigida pelo verbo referir-se) com o pronome demonstrativo "aquilo".',
      },
    ],
  },
  {
    id: 'redacao',
    name: 'Redação',
    description: 'Dicas e conceitos importantes para produzir textos dissertativos argumentativos nota mil.',
    Icon: FileEdit,
    questions: [
      {
        id: 1,
        questionText: 'Qual destes elementos NÃO é essencial em uma introdução de texto dissertativo-argumentativo?',
        options: [
          { id: 'a', text: 'Apresentação do tema.', isCorrect: false },
          { id: 'b', text: 'Tese (posicionamento do autor).', isCorrect: false },
          { id: 'c', text: 'Antecipação dos argumentos.', isCorrect: false },
          { id: 'd', text: 'Uma citação filosófica longa.', isCorrect: true },
        ],
        explanation: 'Embora citações possam enriquecer, uma citação filosófica longa não é um elemento essencial da estrutura básica da introdução, que deve focar em tema, tese e breve menção aos argumentos.',
      },
    ],
  },
];
