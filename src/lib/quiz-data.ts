import type { LucideIcon } from "lucide-react";
import { BookOpenText, SpellCheck2, FileEdit } from "lucide-react";

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
    id: "interpretacao-textual",
    name: "Interpretação Textual",
    description:
      "Teste suas habilidades de compreensão e análise de textos diversos.",
    Icon: BookOpenText,
    questions: [
      {
        id: 1,
        questionText:
          "Qual é a principal ideia do primeiro parágrafo do texto (imaginário) sobre a Amazônia?",
        options: [
          { id: "a", text: "A riqueza da fauna local.", isCorrect: false },
          {
            id: "b",
            text: "A importância da preservação ambiental.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Os desafios econômicos da região.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "As tradições culturais indígenas.",
            isCorrect: false,
          },
        ],
        explanation:
          'A alternativa correta é "A importância da preservação ambiental", pois geralmente textos sobre a Amazônia enfatizam este ponto crucial.',
      },
      {
        id: 2,
        questionText:
          'No trecho "Ele correu rapidamente", qual a função da palavra "rapidamente"?',
        options: [
          { id: "a", text: "Substantivo", isCorrect: false },
          { id: "b", text: "Adjetivo", isCorrect: false },
          { id: "c", text: "Advérbio de modo", isCorrect: true },
          { id: "d", text: "Verbo", isCorrect: false },
        ],
        explanation:
          '"Rapidamente" é um advérbio de modo, pois indica a maneira como a ação de correr foi realizada.',
      },
      {
        id: 3,
        questionText:
          "Ao ler um texto, qual o objetivo principal da interpretação textual?",
        options: [
          { id: "a", text: "Memorizar todas as palavras.", isCorrect: false },
          {
            id: "b",
            text: "Entender a mensagem central e as intenções do autor.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Identificar apenas as palavras desconhecidas.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Reescrever o texto com suas próprias palavras.",
            isCorrect: false,
          },
        ],
        explanation:
          "O objetivo principal da interpretação textual é ir além da leitura superficial, buscando compreender a mensagem central, as ideias subjacentes e as intenções do autor.",
      },
      {
        id: 4,
        questionText:
          "Qual estratégia pode ajudar na compreensão de textos complexos?",
        options: [
          {
            id: "a",
            text: "Ler apenas o primeiro e o último parágrafo.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Ignorar os exemplos e focar nas definições.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Fazer anotações e resumos das ideias principais.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Ler o texto em voz alta sem pausas.",
            isCorrect: false,
          },
        ],
        explanation:
          "Fazer anotações e resumos ajuda a organizar as ideias, identificar os pontos-chave e fixar o conteúdo, auxiliando na compreensão de textos complexos.",
      },
      {
        id: 5,
        questionText:
          'No contexto de interpretação textual, o que significa "inferir"?',
        options: [
          {
            id: "a",
            text: "Copiar partes do texto sem alteração.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Adivinhar o que o autor quis dizer sem base no texto.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Chegar a uma conclusão baseada em evidências e raciocínio lógico, mesmo que não esteja explícito no texto.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Ignorar informações que parecem irrelevantes.",
            isCorrect: false,
          },
        ],
        explanation:
          "Inferir significa deduzir ou concluir algo que não está explicitamente declarado no texto, mas que pode ser compreendido através da leitura atenta e do raciocínio sobre as informações apresentadas.",
      },
      {
        id: 6,
        questionText: "Um título de texto tem como principal função:",
        options: [
          { id: "a", text: "Tornar o texto mais longo.", isCorrect: false },
          {
            id: "b",
            text: "Resumir o conteúdo do texto e atrair o leitor.",
            isCorrect: true,
          },
          { id: "c", text: "Apenas enfeitar a página.", isCorrect: false },
          {
            id: "d",
            text: "Substituir a necessidade de ler o texto completo.",
            isCorrect: false,
          },
        ],
        explanation:
          "O título tem a função de sintetizar a ideia central do texto, oferecer uma prévia do conteúdo e despertar o interesse do leitor.",
      },
      {
        id: 7,
        questionText:
          "Qual das seguintes afirmações é verdadeira sobre a coesão textual?",
        options: [
          {
            id: "a",
            text: "É a organização das ideias em parágrafos aleatórios.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Refere-se à ligação lógica entre as partes do texto, utilizando conectivos e referências.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "É o uso de muitas palavras difíceis.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Depende apenas da gramática e não do sentido.",
            isCorrect: false,
          },
        ],
        explanation:
          "A coesão textual garante a fluidez e a interligação das ideias, parágrafos e frases dentro de um texto, tornando-o compreensível e coerente.",
      },
      {
        id: 8,
        questionText:
          "Qual a importância de identificar o público-alvo de um texto?",
        options: [
          {
            id: "a",
            text: "Não tem importância, todo texto é para todos.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apenas para escolher o tamanho da fonte.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Para adequar a linguagem, o tom e o conteúdo ao perfil dos leitores.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Para decidir se o texto será impresso ou digital.",
            isCorrect: false,
          },
        ],
        explanation:
          "Conhecer o público-alvo é fundamental para que o autor adapte sua comunicação, escolhendo a linguagem mais apropriada, o tom e os exemplos que serão mais eficazes para atingir seus leitores.",
      },
      {
        id: 9,
        questionText: 'Em um texto, o que é um "argumento"?',
        options: [
          { id: "a", text: "Uma opinião sem fundamentos.", isCorrect: false },
          {
            id: "b",
            text: "Uma informação que contradiz a tese do autor.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Uma ideia, fato ou evidência usada para apoiar a tese do autor.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Apenas um resumo do parágrafo anterior.",
            isCorrect: false,
          },
        ],
        explanation:
          "Um argumento é a base lógica ou o conjunto de razões e evidências que o autor utiliza para defender seu ponto de vista ou tese.",
      },
      {
        id: 10,
        questionText:
          "Qual é a função da conclusão em um texto dissertativo-argumentativo?",
        options: [
          { id: "a", text: "Introduzir um novo tema.", isCorrect: false },
          { id: "b", text: "Apresentar novos argumentos.", isCorrect: false },
          {
            id: "c",
            text: "Retomar a tese e propor uma solução ou reflexão final.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Repetir o que foi dito na introdução, palavra por palavra.",
            isCorrect: false,
          },
        ],
        explanation:
          "A conclusão tem como principal função retomar a tese central do texto, reforçar o posicionamento do autor e, em muitos casos, propor uma intervenção ou uma reflexão final sobre o tema abordado.",
      },
    ],
  },
  {
    id: "gramatica-e-coesao",
    name: "Gramática e Coesão",
    description:
      "Aprimore seus conhecimentos sobre as regras da língua e a construção de textos coesos.",
    Icon: SpellCheck2,
    questions: [
      {
        id: 1,
        questionText:
          "Qual das frases abaixo utiliza a concordância verbal corretamente?",
        options: [
          { id: "a", text: "Houveram muitos problemas.", isCorrect: false },
          { id: "b", text: "Faz muitos anos que não o vejo.", isCorrect: true },
          { id: "c", text: "Existe muitas pessoas aqui.", isCorrect: false },
          { id: "d", text: "A gente fomos ao cinema.", isCorrect: false },
        ],
        explanation:
          'A frase "Faz muitos anos que não o vejo." está correta. O verbo "fazer" indicando tempo decorrido é impessoal e fica na 3ª pessoa do singular.',
      },
      {
        id: 2,
        questionText: "O uso da crase é obrigatório em qual alternativa?",
        options: [
          { id: "a", text: "Vou a praia.", isCorrect: false }, // seria à
          { id: "b", text: "Entreguei o livro a ela.", isCorrect: false }, // pronome pessoal
          {
            id: "c",
            text: "Refiro-me àquilo que discutimos.",
            isCorrect: true,
          }, // à + aquilo
          { id: "d", text: "Ele veio a cavalo.", isCorrect: false }, // locução adverbial masculina
        ],
        explanation:
          'Em "Refiro-me àquilo que discutimos", a crase é obrigatória devido à contração da preposição "a" (exigida pelo verbo referir-se) com o pronome demonstrativo "aquilo".',
      },
      {
        id: 3,
        questionText:
          "Assinale a alternativa em que a palavra destacada é um advérbio de tempo:",
        options: [
          { id: "a", text: "Ele fala muito **bem**.", isCorrect: false },
          { id: "b", text: "Chegou **ontem** de viagem.", isCorrect: true },
          { id: "c", text: "Moro **perto** da escola.", isCorrect: false },
          { id: "d", text: "Correu **lentamente**.", isCorrect: false },
        ],
        explanation:
          'A palavra "ontem" indica o tempo em que a ação de chegar ocorreu, sendo, portanto, um advérbio de tempo.',
      },
      {
        id: 4,
        questionText:
          "Em qual das frases o pronome está empregado corretamente?",
        options: [
          {
            id: "a",
            text: "Entre eu e você, não há segredos.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Para mim fazer o trabalho, preciso de ajuda.",
            isCorrect: false,
          },
          { id: "c", text: "Deixaram-me sozinho na festa.", isCorrect: true },
          { id: "d", text: "Me disseram que você viria.", isCorrect: false },
        ],
        explanation:
          'A frase "Deixaram-me sozinho na festa" está correta, pois o pronome oblíquo "me" está em próclise após o verbo terminado em -ram (mesóclise não seria natural neste caso, e ênclise seria "Deixaram-me"). Em "Entre eu e você", o correto é "entre mim e você". Em "Para mim fazer", o correto é "Para eu fazer". "Me disseram" está incorreto, o correto seria "Disseram-me".',
      },
      {
        id: 5,
        questionText:
          "Qual das opções apresenta uma frase com erro de regência verbal?",
        options: [
          { id: "a", text: "Eu assisti ao filme ontem.", isCorrect: false },
          { id: "b", text: "Ele obedeceu o sinal.", isCorrect: true },
          { id: "c", text: "Prefiro café a chá.", isCorrect: false },
          { id: "d", text: "Custou-me muito sair de casa.", isCorrect: false },
        ],
        explanation:
          'O verbo "obedecer" é transitivo indireto, exigindo a preposição "a". O correto seria "Ele obedeceu ao sinal".',
      },
      {
        id: 6,
        questionText:
          "A vírgula está empregada corretamente em qual alternativa?",
        options: [
          {
            id: "a",
            text: "João, e Maria, foram ao parque.",
            isCorrect: false,
          },
          { id: "b", text: "Se chover, não iremos à praia.", isCorrect: true },
          {
            id: "c",
            text: "Comprei lápis, canetas e, borracha.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Ele é inteligente mas, preguiçoso.",
            isCorrect: false,
          },
        ],
        explanation:
          'A vírgula é utilizada corretamente em orações subordinadas adverbiais deslocadas, como é o caso de "Se chover" antes da oração principal. Nas demais, há erros de vírgula (entre sujeito e predicado, antes de "e" em enumeração simples, antes de "mas" conectivo aditivo).',
      },
      {
        id: 7,
        questionText:
          'Qual a função da conjunção "embora" na frase: "Embora estivesse chovendo, saímos para passear"?',
        options: [
          { id: "a", text: "Adição", isCorrect: false },
          { id: "b", text: "Oposição/Concessão", isCorrect: true },
          { id: "c", text: "Causa", isCorrect: false },
          { id: "d", text: "Conclusão", isCorrect: false },
        ],
        explanation:
          'A conjunção "embora" introduz uma oração subordinada adverbial concessiva, expressando uma ideia de oposição ou ressalva em relação à oração principal.',
      },
      {
        id: 8,
        questionText:
          "Identifique a alternativa em que a palavra destacada é um substantivo:",
        options: [
          { id: "a", text: "Ela corre **rápido**.", isCorrect: false },
          { id: "b", text: "O **azul** do céu é lindo.", isCorrect: true },
          { id: "c", text: "Ele é um menino **estudioso**.", isCorrect: false },
          { id: "d", text: "Comemos **muito** ontem.", isCorrect: false },
        ],
        explanation:
          'Na frase "O azul do céu é lindo", "azul" está funcionando como substantivo (nomeando uma cor), antecedido por artigo. Nas outras opções, as palavras são, respectivamente, advérbio, adjetivo e advérbio.',
      },
      {
        id: 9,
        questionText: "Qual das frases está gramaticalmente incorreta?",
        options: [
          {
            id: "a",
            text: "Menas pessoas compareceram ao evento.",
            isCorrect: true,
          },
          {
            id: "b",
            text: "É proibido entrada de pessoas não autorizadas.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Anexo, seguem os documentos solicitados.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "À medida que o tempo passa, ficamos mais velhos.",
            isCorrect: false,
          },
        ],
        explanation:
          'A palavra "menas" não existe na língua portuguesa; o correto é "menos".',
      },
      {
        id: 10,
        questionText:
          "Aponte a frase que apresenta um erro de concordância nominal:",
        options: [
          { id: "a", text: "Comprei duas blusas brancas.", isCorrect: false },
          {
            id: "b",
            text: "Os alunos e as alunas dedicadas passaram no teste.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "É necessário paciência para aprender.",
            isCorrect: false,
          },
          { id: "d", text: "Ela mesma resolveu o problema.", isCorrect: false },
        ],
        explanation:
          'Quando há substantivos de gêneros diferentes, o adjetivo deve concordar com o mais próximo ou ir para o masculino plural. O correto seria "Os alunos e as alunas dedicados" (concordando com ambos, no masculino plural) ou "Os alunos e as alunas dedicada" (concordando com o mais próximo). A opção "dedicadas" está incorreta.',
      },
    ],
  },
  {
    id: "redacao",
    name: "Redação",
    description:
      "Dicas e conceitos importantes para produzir textos dissertativos argumentativos nota mil.",
    Icon: FileEdit,
    questions: [
      {
        id: 1,
        questionText:
          "Qual destes elementos NÃO é essencial em uma introdução de texto dissertativo-argumentativo?",
        options: [
          { id: "a", text: "Apresentação do tema.", isCorrect: false },
          {
            id: "b",
            text: "Tese (posicionamento do autor).",
            isCorrect: false,
          },
          { id: "c", text: "Antecipação dos argumentos.", isCorrect: false },
          { id: "d", text: "Uma citação filosófica longa.", isCorrect: true },
        ],
        explanation:
          "Embora citações possam enriquecer, uma citação filosófica longa não é um elemento essencial da estrutura básica da introdução, que deve focar em tema, tese e breve menção aos argumentos.",
      },
      {
        id: 2,
        questionText:
          "Em um texto dissertativo-argumentativo, o desenvolvimento deve:",
        options: [
          {
            id: "a",
            text: "Apenas repetir a tese com outras palavras.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar novos temas não relacionados à tese.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Expandir e comprovar os argumentos apresentados na introdução.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Concluir o raciocínio sem apresentar provas.",
            isCorrect: false,
          },
        ],
        explanation:
          "O desenvolvimento é a parte do texto onde os argumentos são expostos, detalhados e comprovados, fornecendo sustento à tese defendida.",
      },
      {
        id: 3,
        questionText:
          'Qual a função de um "operador argumentativo" em uma redação?',
        options: [
          {
            id: "a",
            text: "Tornar o texto mais bonito visualmente.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Conectar as ideias, indicando relações lógicas (oposição, adição, causa, etc.).",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Apenas preencher espaço no texto.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Substituir a necessidade de argumentos concretos.",
            isCorrect: false,
          },
        ],
        explanation:
          "Operadores argumentativos (conectivos) são essenciais para garantir a coesão e a coerência textual, estabelecendo as relações lógicas entre as diferentes partes do texto e guiando o leitor no raciocínio do autor.",
      },
      {
        id: 4,
        questionText:
          'Para que serve a "proposta de intervenção" na conclusão de um texto dissertativo-argumentativo (como no ENEM)?',
        options: [
          {
            id: "a",
            text: "Apenas para mostrar que o autor se importa com o problema.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar soluções detalhadas para todos os problemas do mundo.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Propor ações concretas e viáveis para mitigar o problema abordado, com agentes, meios, finalidade e detalhamento.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Reafirmar a tese sem adicionar nenhuma informação nova.",
            isCorrect: false,
          },
        ],
        explanation:
          "A proposta de intervenção é um requisito em algumas avaliações, como o ENEM, e visa demonstrar a capacidade do autor de pensar em soluções práticas para o problema social abordado, com propostas bem elaboradas e detalhadas.",
      },
      {
        id: 5,
        questionText:
          "Ao planejar uma redação, qual a importância de fazer um rascunho?",
        options: [
          {
            id: "a",
            text: "Apenas para ocupar o tempo antes de escrever a versão final.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Permite organizar as ideias, estruturar o texto e corrigir erros antes da versão definitiva.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "É obrigatório em todas as provas, mas não tem utilidade real.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Faz o texto ficar mais longo e cansativo.",
            isCorrect: false,
          },
        ],
        explanation:
          "O rascunho é uma etapa crucial no processo de escrita, pois possibilita ao autor testar a organização das ideias, a clareza da argumentação e identificar possíveis falhas antes de passar a limpo.",
      },
      {
        id: 6,
        questionText:
          'Qual é a principal característica de um texto "dissertativo-argumentativo"?',
        options: [
          { id: "a", text: "Contar uma história de ficção.", isCorrect: false },
          {
            id: "b",
            text: "Descrever detalhadamente um objeto ou lugar.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Apresentar e defender um ponto de vista sobre um tema, utilizando argumentos e provas.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Instruir o leitor sobre como fazer algo.",
            isCorrect: false,
          },
        ],
        explanation:
          "O texto dissertativo-argumentativo se caracteriza pela apresentação de um tema, pela defesa de uma tese (ponto de vista) por meio de argumentos e pela busca em persuadir o leitor.",
      },
      {
        id: 7,
        questionText:
          'O que significa "repertório sociocultural" em uma redação?',
        options: [
          {
            id: "a",
            text: "Usar gírias e expressões populares.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar conhecimentos de diversas áreas (história, filosofia, sociologia, arte) para fundamentar os argumentos.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Copiar trechos de livros famosos.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Apenas citar autores sem entender o que eles dizem.",
            isCorrect: false,
          },
        ],
        explanation:
          "O repertório sociocultural refere-se à capacidade do autor de mobilizar conhecimentos de outras áreas do saber para enriquecer e fundamentar sua argumentação, conferindo maior credibilidade ao texto.",
      },
      {
        id: 8,
        questionText:
          "Qual a importância da leitura de diferentes gêneros textuais para a escrita de redações?",
        options: [
          {
            id: "a",
            text: "Nenhuma, a leitura não influencia a escrita.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Ajuda a expandir o vocabulário, aprimorar a capacidade de argumentação e conhecer diferentes estruturas textuais.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Apenas para ter mais tempo livre.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Faz a pessoa copiar o estilo de outros autores.",
            isCorrect: false,
          },
        ],
        explanation:
          "A leitura diversificada é fundamental para o desenvolvimento da escrita, pois amplia o vocabulário, fornece modelos de argumentação, enriquece o repertório de ideias e ajuda a compreender diferentes estruturas textuais.",
      },
      {
        id: 9,
        questionText: 'O que caracteriza a "originalidade" em uma redação?',
        options: [
          {
            id: "a",
            text: "Inventar fatos e dados para comprovar a tese.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar uma perspectiva única e bem desenvolvida sobre o tema, fugindo do senso comum.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Usar palavras que ninguém mais conhece.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Copiar ideias de outros textos e apresentá-las como suas.",
            isCorrect: false,
          },
        ],
        explanation:
          "A originalidade em uma redação não significa inventar informações, mas sim a capacidade de desenvolver uma argumentação autêntica, com um olhar próprio sobre o tema, que se diferencia das abordagens mais comuns.",
      },
      {
        id: 10,
        questionText:
          'Qual é o papel da "coerência" em um texto dissertativo-argumentativo?',
        options: [
          {
            id: "a",
            text: "Fazer o texto ter um tamanho mínimo exigido.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Garantir que as ideias apresentadas sejam lógicas, não contraditórias e que haja progressão de sentido.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Utilizar apenas frases curtas e simples.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Repetir as mesmas palavras várias vezes.",
            isCorrect: false,
          },
        ],
        explanation:
          "A coerência garante a inteligibilidade do texto, assegurando que as ideias se conectem logicamente, sem contradições, e que o texto tenha um sentido completo e progressivo para o leitor.",
      },
    ],
  },
];
