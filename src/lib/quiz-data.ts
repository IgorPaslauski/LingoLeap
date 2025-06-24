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
  tip?: string; // Adicionado o campo de dica, que é opcional
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
          "Leia o trecho a seguir: 'A Amazônia, maior floresta tropical do mundo, desempenha um papel crucial na regulação do clima global. Seus vastos ecossistemas abrigam uma biodiversidade inigualável, com milhões de espécies de plantas e animais, muitas das quais ainda desconhecidas pela ciência. No entanto, o desmatamento e as queimadas representam ameaças severas a este bioma vital, impactando não apenas a flora e a fauna, mas também os ciclos de chuva e a vida das comunidades locais que dependem da floresta. É imperativo que ações urgentes sejam tomadas para proteger este patrimônio natural insubstituível para as futuras gerações.' Qual é a principal ideia do parágrafo?",
        options: [
          { id: "a", text: "A riqueza da fauna local da Amazônia.", isCorrect: false },
          {
            id: "b",
            text: "A importância da Amazônia para o clima global e a urgência de sua preservação frente às ameaças de desmatamento.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Os desafios econômicos enfrentados pelas comunidades ribeirinhas na Amazônia.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "As tradições culturais e os modos de vida dos povos indígenas da Amazônia.",
            isCorrect: false,
          },
        ],
        explanation:
          'A alternativa correta é "A importância da Amazônia para o clima global e a urgência de sua preservação frente às ameaças de desmatamento", pois o texto enfatiza tanto o valor ecológico quanto as ameaças e a necessidade de proteção.',
        tip: "O texto inicia apresentando a importância e termina reforçando a necessidade de ações. Busque a opção que abranja esses dois aspectos.",
      },
      {
        id: 2,
        questionText:
          'No trecho "Apesar dos desafios financeiros, a pequena empresa de tecnologia conseguiu lançar seu produto inovador no mercado, alcançando um sucesso surpreendente em poucos meses. O feedback dos clientes foi extremamente positivo, e a equipe, embora exausta, estava orgulhosa do trabalho árduo que havia dedicado ao projeto. Eles sabiam que a jornada estava apenas começando, mas o primeiro passo havia sido dado de forma notável." Qual a função da palavra "surpreendente" neste contexto?',
        options: [
          { id: "a", text: "Classifica a empresa como inovadora.", isCorrect: false },
          { id: "b", text: "Qualifica o sucesso alcançado pelo produto.", isCorrect: true },
          { id: "c", text: "Descreve o estado de exaustão da equipe.", isCorrect: false },
          { id: "d", text: "Modifica o verbo 'lançar', indicando a forma.", isCorrect: false },
        ],
        explanation:
          '"Surpreendente" é um adjetivo que qualifica o substantivo "sucesso", indicando a natureza inesperada e notável desse sucesso.',
        tip: "Pense na palavra que 'surpreendente' está diretamente relacionada e o que ela adiciona a essa palavra.",
      },
      {
        id: 3,
        questionText:
          "Ao ler um texto, qual o objetivo principal da interpretação textual, considerando que ela vai além da simples leitura e decodificação de palavras?",
        options: [
          { id: "a", text: "Memorizar todas as palavras e pontuações do texto.", isCorrect: false },
          {
            id: "b",
            text: "Entender a mensagem central, as ideias subjacentes, as intenções do autor e os possíveis significados implícitos do conteúdo.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Identificar apenas as palavras desconhecidas e pesquisar seus significados no dicionário.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Reescrever o texto com suas próprias palavras sem se preocupar com a fidelidade ao original.",
            isCorrect: false,
          },
        ],
        explanation:
          "O objetivo principal da interpretação textual é ir além da leitura superficial, buscando compreender a mensagem central, as ideias subjacentes, as intenções do autor e os possíveis significados implícitos do conteúdo, o que envolve análise crítica e contextualização.",
      },
      {
        id: 4,
        questionText:
          "Qual estratégia pode ser mais eficaz para auxiliar na compreensão de textos extensos e complexos, especialmente aqueles que abordam temas científicos ou filosóficos com muitos conceitos novos?",
        options: [
          {
            id: "a",
            text: "Ler o texto o mais rápido possível para ter uma visão geral e depois esquecê-lo.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Ignorar os exemplos e focar apenas nas definições teóricas apresentadas.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Fazer anotações, sublinhar ideias principais, elaborar resumos periódicos e discutir o conteúdo com outras pessoas para solidificar o entendimento.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Ler o texto em voz alta sem fazer pausas ou tentar processar as informações.",
            isCorrect: false,
          },
        ],
        explanation:
          "Fazer anotações, sublinhar, resumir e discutir o conteúdo são estratégias ativas que promovem a organização das ideias, a identificação dos pontos-chave e a fixação do conteúdo, auxiliando significativamente na compreensão de textos complexos.",
        tip: "Para textos desafiadores, a interação ativa com o conteúdo é mais valiosa do que a leitura passiva.",
      },
      {
        id: 5,
        questionText:
          'No contexto de interpretação textual, o que significa "inferir" e como essa habilidade se diferencia da simples identificação de informações explícitas?',
        options: [
          {
            id: "a",
            text: "Copiar partes do texto sem alteração, demonstrando que você encontrou a informação.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Adivinhar o que o autor quis dizer sem qualquer base no texto, contando com a intuição.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Chegar a uma conclusão ou deduzir algo que não está explicitamente declarado no texto, mas que pode ser compreendido através da análise de evidências e do raciocínio lógico sobre as informações apresentadas.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Ignorar informações que parecem irrelevantes para o tema principal do texto.",
            isCorrect: false,
          },
        ],
        explanation:
          "Inferir significa deduzir ou concluir algo que não está explicitamente declarado no texto, mas que pode ser compreendido através da leitura atenta e do raciocínio sobre as informações apresentadas. É uma habilidade de leitura crítica que vai além do que está na superfície.",
      },
      {
        id: 6,
        questionText: "Um título de texto, em qualquer gênero, tem como principal função:",
        options: [
          { id: "a", text: "Tornar o texto artificialmente mais longo para preencher requisitos de formatação.", isCorrect: false },
          {
            id: "b",
            text: "Sintetizar o conteúdo principal do texto, oferecer uma prévia clara e concisa do que será abordado e, consequentemente, atrair o interesse do leitor.",
            isCorrect: true,
          },
          { id: "c", text: "Apenas enfeitar a página e servir como elemento estético sem função prática.", isCorrect: false },
          {
            id: "d",
            text: "Substituir completamente a necessidade de ler o texto completo, fornecendo todas as informações essenciais de antemão.",
            isCorrect: false,
          },
        ],
        explanation:
          "O título tem a função de sintetizar a ideia central do texto, oferecer uma prévia do conteúdo e despertar o interesse do leitor, servindo como um convite à leitura e um guia inicial.",
      },
      {
        id: 7,
        questionText:
          "Qual das seguintes afirmações é verdadeira sobre a coesão textual, um dos pilares da textualidade que garante a unidade e a clareza de um texto?",
        options: [
          {
            id: "a",
            text: "É a organização das ideias em parágrafos aleatórios, sem conexão aparente.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Refere-se à ligação gramatical e lexical entre as partes do texto, utilizando conectivos, pronomes, sinônimos e referências para garantir a continuidade de sentido.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "É o uso de muitas palavras difíceis e complexas para impressionar o leitor.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Depende apenas da gramática normativa e não do sentido que as palavras e frases estabelecem entre si.",
            isCorrect: false,
          },
        ],
        explanation:
          "A coesão textual garante a fluidez e a interligação das ideias, parágrafos e frases dentro de um texto, tornando-o compreensível e coerente. Ela é construída através de mecanismos gramaticais e lexicais que criam relações de sentido.",
      },
      {
        id: 8,
        questionText:
          "Qual a importância fundamental de identificar o público-alvo ao se preparar para escrever ou analisar um texto, e como isso impacta a comunicação?",
        options: [
          {
            id: "a",
            text: "Não tem importância, pois todo texto é universal e deve ser compreendido por qualquer pessoa, independentemente de seu perfil.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apenas para escolher o tamanho e o tipo da fonte que será usada no documento final.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "É crucial para adequar a linguagem, o tom, o nível de profundidade do conteúdo, os exemplos e as referências ao perfil, aos conhecimentos prévios e às expectativas dos leitores, garantindo a eficácia da comunicação.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Para decidir se o texto será impresso em papel ou publicado em formato digital na internet.",
            isCorrect: false,
          },
        ],
        explanation:
          "Conhecer o público-alvo é fundamental para que o autor adapte sua comunicação, escolhendo a linguagem mais apropriada, o tom, os exemplos e o nível de detalhe que serão mais eficazes para atingir seus leitores e garantir que a mensagem seja bem recebida e compreendida.",
      },
      {
        id: 9,
        questionText: 'Em um texto dissertativo-argumentativo, o que é e para que serve um "argumento"?',
        options: [
          { id: "a", text: "Uma opinião sem fundamentos lógicos ou provas que a sustentem.", isCorrect: false },
          {
            id: "b",
            text: "Uma informação que contradiz abertamente a tese principal do autor, visando confundir o leitor.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Uma ideia, um fato, uma evidência, um raciocínio lógico ou uma citação utilizada para apoiar e comprovar a tese central do autor, buscando persuadir o leitor de sua validade.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Apenas um resumo superficial do parágrafo anterior, sem aprofundamento das ideias.",
            isCorrect: false,
          },
        ],
        explanation:
          "Um argumento é a base lógica ou o conjunto de razões, evidências, fatos, exemplos ou citações que o autor utiliza para defender seu ponto de vista ou tese, buscando convencer o leitor da validade de sua posição.",
      },
      {
        id: 10,
        questionText:
          "Qual é a função primordial da conclusão em um texto dissertativo-argumentativo, especialmente considerando os requisitos de exames como o ENEM?",
        options: [
          { id: "a", text: "Introduzir um novo tema completamente diferente do que foi abordado no desenvolvimento.", isCorrect: false },
          { id: "b", text: "Apresentar novos argumentos e provas para sustentar a tese que não foram mencionados antes.", isCorrect: false },
          {
            id: "c",
            text: "Retomar a tese apresentada na introdução, fazer uma síntese dos argumentos desenvolvidos e, em muitos casos, propor uma solução ou reflexão final para o problema abordado, com detalhamento de agentes, ações, meios e finalidades.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Repetir o que foi dito na introdução, palavra por palavra, para reforçar a ideia inicial.",
            isCorrect: false,
          },
        ],
        explanation:
          "A conclusão tem como principal função retomar a tese central do texto, reforçar o posicionamento do autor e, em muitos casos, propor uma intervenção ou uma reflexão final sobre o tema abordado, sintetizando as ideias apresentadas e fechando o raciocínio.",
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
          "Qual das frases abaixo demonstra o uso correto da concordância verbal, especialmente em casos que envolvem verbos impessoais ou sujeitos coletivos?",
        options: [
          { id: "a", text: "Houveram muitos problemas na reunião de ontem.", isCorrect: false },
          { id: "b", text: "Faz muitos anos que não nos encontramos para conversar sobre o futuro.", isCorrect: true },
          { id: "c", text: "Existe muitas pessoas esperando por uma oportunidade como esta.", isCorrect: false },
          { id: "d", text: "A gente fomos ao cinema, mesmo sem muita vontade de sair de casa.", isCorrect: false },
        ],
        explanation:
          'A frase "Faz muitos anos que não nos encontramos para conversar sobre o futuro." está correta. O verbo "fazer" indicando tempo decorrido é impessoal e deve permanecer na 3ª pessoa do singular. Nas outras opções, há erros de concordância.',
        tip: "Lembre-se que verbos como 'haver' (no sentido de existir) e 'fazer' (indicando tempo decorrido) são impessoais e permanecem no singular.",
      },
      {
        id: 2,
        questionText: "O uso da crase é obrigatório em qual das seguintes alternativas, de acordo com as regras da gramática normativa da língua portuguesa?",
        options: [
          { id: "a", text: "Vou a praia no próximo feriado prolongado para relaxar.", isCorrect: false }, // seria à
          { id: "b", text: "Entreguei o relatório a ela, solicitando que o revisasse o mais rápido possível.", isCorrect: false }, // pronome pessoal
          {
            id: "c",
            text: "Refiro-me àquilo que discutimos intensamente durante a reunião anterior, sobre o planejamento estratégico da empresa.",
            isCorrect: true,
          }, // à + aquilo
          { id: "d", text: "Ele veio a cavalo, atravessando a fazenda em uma velocidade impressionante.", isCorrect: false }, // locução adverbial masculina
        ],
        explanation:
          'Em "Refiro-me àquilo que discutimos intensamente durante a reunião anterior, sobre o planejamento estratégico da empresa.", a crase é obrigatória devido à contração da preposição "a" (exigida pelo verbo "referir-se", que pede complemento com "a") com o pronome demonstrativo "aquilo".',
        tip: "A crase geralmente ocorre antes de substantivos femininos que aceitam 'a' e quando há a fusão de 'a' com 'a', 'as', 'aquilo', 'aquelas', 'aqueles', 'aquele', 'aquela'.",
      },
      {
        id: 3,
        questionText:
          "Assinale a alternativa em que a palavra destacada é classificada corretamente como um advérbio de tempo, modificando um verbo, um adjetivo ou outro advérbio e indicando a circunstância temporal de uma ação ou estado:",
        options: [
          { id: "a", text: "Ele fala muito **bem** em público, com uma oratória impecável.", isCorrect: false },
          { id: "b", text: "Chegou **ontem** de viagem, trazendo muitas novidades e presentes para a família.", isCorrect: true },
          { id: "c", text: "Moro **perto** da escola, o que facilita bastante o deslocamento diário.", isCorrect: false },
          { id: "d", text: "Correu **lentamente** pela pista, poupando energia para o trecho final da maratona.", isCorrect: false },
        ],
        explanation:
          'A palavra "ontem" indica o tempo em que a ação de chegar ocorreu, sendo, portanto, um advérbio de tempo. As outras palavras destacadas são advérbios de modo, lugar e modo, respectivamente.',
        tip: "Advérbios de tempo respondem à pergunta 'quando?' em relação à ação verbal.",
      },
      {
        id: 4,
        questionText:
          "Em qual das frases o pronome oblíquo átono está empregado corretamente de acordo com as regras de colocação pronominal (próclise, ênclise, mesóclise) da norma culta da língua portuguesa?",
        options: [
          {
            id: "a",
            text: "Entre eu e você, não deveria haver segredos, dada a nossa longa amizade e confiança mútua.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Para mim fazer o trabalho, preciso de mais informações e de um prazo estendido.",
            isCorrect: false,
          },
          { id: "c", text: "Deixaram-me sozinho na festa, o que me fez sentir um pouco desapontado com a situação.", isCorrect: true },
          { id: "d", text: "Me disseram que você viria, mas até agora não o vi chegar ao local do evento.", isCorrect: false },
        ],
        explanation:
          'A frase "Deixaram-me sozinho na festa" está correta, pois o pronome oblíquo "me" está em ênclise, a colocação padrão após o verbo quando não há fator atrativo. As outras opções contêm erros comuns: "Entre eu e você" deveria ser "entre mim e você" (pronomes oblíquos depois de preposição); "Para mim fazer" deveria ser "Para eu fazer" (não se usa "mim" como sujeito); e "Me disseram" é próclise antes do verbo no início de frase, que não é permitido na norma culta, o correto seria "Disseram-me".',
        tip: "Lembre-se das regras de próclise (antes do verbo), ênclise (depois do verbo) e mesóclise (no meio do verbo), e quando elas são aplicadas.",
      },
      {
        id: 5,
        questionText:
          "Qual das opções apresenta uma frase com um erro de regência verbal, ou seja, a inadequada ligação do verbo com seus complementos (objetos diretos ou indiretos) por meio ou não de preposição?",
        options: [
          { id: "a", text: "Eu assisti ao filme ontem à noite, e achei a trama muito envolvente.", isCorrect: false },
          { id: "b", text: "Ele obedeceu o sinal de trânsito, avançando mesmo com o semáforo fechado.", isCorrect: true },
          { id: "c", text: "Prefiro café a chá, principalmente quando preciso me concentrar nos estudos.", isCorrect: false },
          { id: "d", text: "Custou-me muito sair de casa tão cedo para o compromisso.", isCorrect: false },
        ],
        explanation:
          'A frase "Ele obedeceu o sinal de trânsito, avançando mesmo com o semáforo fechado." contém um erro de regência. O verbo "obedecer" é transitivo indireto, exigindo a preposição "a". O correto seria "Ele obedeceu **ao** sinal".',
        tip: "Fique atento aos verbos que pedem preposição. O verbo 'obedecer' é um clássico exemplo que exige a preposição 'a'.",
      },
      {
        id: 6,
        questionText:
          "A vírgula está empregada corretamente em qual das seguintes alternativas, seguindo as normas de pontuação da língua portuguesa, especialmente em relação a adjuntos adverbiais deslocados, apostos ou orações subordinadas?",
        options: [
          {
            id: "a",
            text: "João, e Maria, foram juntos ao parque de diversões no último fim de semana.",
            isCorrect: false,
          },
          { id: "b", text: "Se chover intensamente amanhã, não iremos à praia, como havíamos planejado inicialmente.", isCorrect: true },
          {
            id: "c",
            text: "Comprei lápis, canetas e, borracha, para iniciar meus estudos de forma organizada.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Ele é muito inteligente mas, preguiçoso para se dedicar aos estudos mais complexos.",
            isCorrect: false,
          },
        ],
        explanation:
          'A vírgula é utilizada corretamente em orações subordinadas adverbiais deslocadas, como é o caso de "Se chover intensamente amanhã" antes da oração principal. Nas demais, há erros de vírgula (entre sujeito e predicado, antes de "e" em enumeração simples, e antes de "mas" quando conjunção adversativa sem sujeito diferente ou oração elíptica de sujeito).',
      },
      {
        id: 7,
        questionText:
          'Qual a função sintática e semântica da conjunção "embora" na frase: "Embora estivesse chovendo torrencialmente, o grupo de aventureiros decidiu prosseguir com a expedição, mostrando grande determinação"?',
        options: [
          { id: "a", text: "Introduzir uma ideia de adição, somando informações relevantes.", isCorrect: false },
          { id: "b", text: "Expressar uma ideia de oposição ou concessão, indicando uma circunstância contrária ao que se esperava, mas que não impede a realização da ação principal.", isCorrect: true },
          { id: "c", text: "Indicar a causa ou o motivo pelo qual a ação principal ocorreu.", isCorrect: false },
          { id: "d", text: "Apresentar uma conclusão lógica ou uma consequência direta da ação anterior.", isCorrect: false },
        ],
        explanation:
          'A conjunção "embora" introduz uma oração subordinada adverbial concessiva, expressando uma ideia de oposição ou ressalva em relação à oração principal, mas que não impede a sua realização. É um fator de quebra de expectativa.',
      },
      {
        id: 8,
        questionText:
          "Identifique a alternativa em que a palavra destacada é um substantivo, ou seja, uma palavra que nomeia seres, lugares, qualidades, sentimentos ou ações, podendo ser precedida por artigos ou outros determinantes:",
        options: [
          { id: "a", text: "Ela corre **rápido** para alcançar o ônibus todos os dias.", isCorrect: false },
          { id: "b", text: "O **azul** profundo do céu do fim de tarde é realmente encantador e inspirador.", isCorrect: true },
          { id: "c", text: "Ele é um menino muito **estudioso** e dedicado aos livros.", isCorrect: false },
          { id: "d", text: "Comemos **muito** ontem na festa de aniversário, quase exageramos.", isCorrect: false },
        ],
        explanation:
          'Na frase "O azul profundo do céu do fim de tarde é realmente encantador e inspirador", "azul" está funcionando como substantivo (nomeando uma cor), antecedido por artigo ("O"). Nas outras opções, as palavras são, respectivamente, advérbio ("rápido" modificando "corre"), adjetivo ("estudioso" qualificando "menino") e advérbio ("muito" modificando "comemos").',
      },
      {
        id: 9,
        questionText: "Qual das frases está gramaticalmente incorreta, apresentando um erro comum de desvio da norma padrão da língua portuguesa?",
        options: [
          {
            id: "a",
            text: "Menas pessoas compareceram ao evento beneficente do que o esperado pela organização.",
            isCorrect: true,
          },
          {
            id: "b",
            text: "É proibido a entrada de pessoas não autorizadas neste setor restrito do prédio.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Anexo, seguem os documentos solicitados para a sua análise e aprovação final.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "À medida que o tempo passa, ficamos mais velhos e experientes na vida.",
            isCorrect: false,
          },
        ],
        explanation:
          'A palavra "menas" não existe na língua portuguesa; o correto e invariável é "menos". Portanto, a frase "Menas pessoas compareceram ao evento beneficente do que o esperado pela organização." está incorreta.',
      },
      {
        id: 10,
        questionText:
          "Aponte a frase que apresenta um erro de concordância nominal, que se refere à relação de gênero e número entre o substantivo e os termos que o acompanham (artigos, adjetivos, pronomes adjetivos, numerais adjetivos):",
        options: [
          { id: "a", text: "Comprei duas blusas brancas e uma saia azul para o verão.", isCorrect: false },
          {
            id: "b",
            text: "Os alunos e as alunas dedicadas passaram no teste com notas excelentes, superando as expectativas.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "É necessário paciência para aprender um novo idioma complexo como o japonês.",
            isCorrect: false,
          },
          { id: "d", text: "Ela mesma resolveu o problema que surgiu na reunião, sem precisar de ajuda externa.", isCorrect: false },
        ],
        explanation:
          'Quando há substantivos de gêneros diferentes, o adjetivo (neste caso, "dedicadas") deve concordar com o mais próximo ou ir para o masculino plural. O correto seria "Os alunos e as alunas **dedicados**" (concordando com ambos, no masculino plural, por prevalência) ou "Os alunos e as alunas **dedicada**" (concordando com o mais próximo). A opção "dedicadas" está incorreta por concordar apenas com o último termo feminino.',
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
          "Qual destes elementos, embora possa ser utilizado, NÃO é considerado um componente essencial e obrigatório na estrutura fundamental de uma introdução de texto dissertativo-argumentativo, especialmente em avaliações padronizadas?",
        options: [
          { id: "a", text: "Apresentação clara e contextualizada do tema a ser abordado.", isCorrect: false },
          {
            id: "b",
            text: "A tese, que é o posicionamento claro e conciso do autor sobre o tema proposto.",
            isCorrect: false,
          },
          { id: "c", text: "A antecipação dos argumentos principais que serão desenvolvidos ao longo do texto.", isCorrect: false },
          { id: "d", text: "Uma citação filosófica longa e complexa, que ocupe mais de duas linhas e demande muita explicação.", isCorrect: true },
        ],
        explanation:
          "Embora citações possam enriquecer e contextualizar, uma citação filosófica longa e complexa, que demande muita explicação ou ocupe espaço excessivo, não é um elemento essencial da estrutura básica da introdução. A introdução deve focar em apresentar o tema, a tese e a antecipação dos argumentos de forma concisa e direta.",
        tip: "Pense no que é fundamental para apresentar o tema e a ideia principal sem se aprofundar demais ou desviar o foco inicial.",
      },
      {
        id: 2,
        questionText:
          "Em um texto dissertativo-argumentativo, o desenvolvimento, que é o coração da argumentação, deve cumprir qual das seguintes funções para ser eficaz?",
        options: [
          {
            id: "a",
            text: "Apenas repetir a tese apresentada na introdução com outras palavras, sem adicionar novas informações ou provas.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar novos temas e discussões que não foram relacionados à tese na introdução, para surpreender o leitor.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Expandir, comprovar e analisar criticamente os argumentos apresentados na introdução, utilizando exemplos, dados, citações, analogias e outras estratégias argumentativas para sustentar a tese.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Concluir o raciocínio sem apresentar provas ou aprofundar as ideias, deixando o leitor com dúvidas sobre o posicionamento do autor.",
            isCorrect: false,
          },
        ],
        explanation:
          "O desenvolvimento é a parte do texto onde os argumentos são expostos, detalhados, analisados e comprovados. Ele deve fornecer sustento à tese defendida por meio de diversas estratégias argumentativas, como exemplos, dados, citações, comparações, etc.",
        tip: "Após a introdução, o que você faz com os argumentos que prometeu abordar? Pense na parte em que você 'prova' seu ponto.",
      },
      {
        id: 3,
        questionText:
          'Qual a função essencial de um "operador argumentativo" (também conhecido como conectivo ou articulador textual) em uma redação, e como seu uso contribui para a qualidade do texto?',
        options: [
          {
            id: "a",
            text: "Tornar o texto mais bonito visualmente, adicionando elementos decorativos à escrita.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Conectar as ideias, frases, orações e parágrafos de forma lógica e coerente, indicando as relações de sentido entre eles (como oposição, adição, causa, consequência, conclusão, etc.), e guiando o leitor no raciocínio do autor.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Apenas preencher espaço no texto para atingir um número mínimo de palavras ou linhas.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Substituir a necessidade de argumentos concretos e bem elaborados, pois o conectivo por si só já dá validade à ideia.",
            isCorrect: false,
          },
        ],
        explanation:
          "Operadores argumentativos (conectivos) são essenciais para garantir a coesão e a coerência textual. Eles estabelecem as relações lógicas entre as diferentes partes do texto, articulam as ideias e guiam o leitor no raciocínio do autor, tornando a leitura mais fluida e compreensível.",
      },
      {
        id: 4,
        questionText:
          'Para que serve a "proposta de intervenção" na conclusão de um texto dissertativo-argumentativo, especialmente nos moldes exigidos por exames como o ENEM, e quais elementos ela geralmente deve conter?',
        options: [
          {
            id: "a",
            text: "Apenas para mostrar que o autor se importa superficialmente com o problema, sem aprofundar em soluções reais.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar soluções genéricas e utópicas para todos os problemas sociais do mundo, sem viabilidade prática.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Propor ações concretas, originais e viáveis para mitigar ou resolver o problema social abordado ao longo do texto, detalhando o agente (quem fará), a ação (o que será feito), o meio (como será feito), a finalidade (para que) e um detalhamento adicional.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Reafirmar a tese sem adicionar nenhuma informação nova, e sem apontar para uma solução para a problemática.",
            isCorrect: false,
          },
        ],
        explanation:
          "A proposta de intervenção é um requisito em algumas avaliações, como o ENEM, e visa demonstrar a capacidade do autor de pensar em soluções práticas e cidadãs para o problema social abordado. Ela deve ser bem elaborada e detalhada, contendo os cinco elementos essenciais: agente, ação, meio, finalidade e detalhamento.",
        tip: "Pense na parte em que você apresenta uma solução para o problema discutido no texto, de forma prática e com todos os elementos necessários.",
      },
      {
        id: 5,
        questionText:
          "Ao planejar e elaborar uma redação de caráter dissertativo-argumentativo, qual a importância estratégica de fazer um rascunho completo antes de passar o texto para a versão final, e quais benefícios esse processo pode trazer ao resultado?",
        options: [
          {
            id: "a",
            text: "Apenas para ocupar o tempo disponível durante a prova ou o processo de escrita, sem real impacto na qualidade final do texto.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Permite organizar as ideias de forma lógica, estruturar o texto em seus parágrafos (introdução, desenvolvimento, conclusão), testar a argumentação, revisar e corrigir erros gramaticais, ortográficos ou de coesão e coerência antes da versão definitiva, otimizando a qualidade final.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "É um procedimento obrigatório em todas as provas e concursos, mas não possui uma utilidade real para aprimorar a escrita.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Faz o texto ficar artificialmente mais longo e cansativo de escrever, sem benefícios práticos.",
            isCorrect: false,
          },
        ],
        explanation:
          "O rascunho é uma etapa crucial no processo de escrita, pois possibilita ao autor testar a organização das ideias, a clareza da argumentação, a coesão e coerência textual, e identificar possíveis falhas ou oportunidades de melhoria antes de passar o texto a limpo, o que impacta diretamente na qualidade final da redação.",
      },
      {
        id: 6,
        questionText:
          'Qual é a principal característica que define um texto como "dissertativo-argumentativo", diferenciando-o de outros gêneros textuais como narrativos, descritivos ou injuntivos?',
        options: [
          { id: "a", text: "Contar uma história de ficção com personagens e enredo bem definidos.", isCorrect: false },
          {
            id: "b",
            text: "Descrever detalhadamente um objeto, um lugar ou uma pessoa, sem apresentar um ponto de vista.",
            isCorrect: false,
          },
          {
            id: "c",
            text: "Apresentar um tema, defender um ponto de vista (tese) sobre ele, utilizando argumentos lógicos e provas (dados, exemplos, citações) para persuadir o leitor, e buscar a progressão de sentido.",
            isCorrect: true,
          },
          {
            id: "d",
            text: "Instruir o leitor sobre como fazer algo, apresentando um passo a passo ou um manual de instruções.",
            isCorrect: false,
          },
        ],
        explanation:
          "O texto dissertativo-argumentativo se caracteriza pela apresentação de um tema, pela defesa de uma tese (ponto de vista) por meio de argumentos e provas, e pela busca em persuadir o leitor sobre a validade daquele posicionamento. O foco é convencer.",
      },
      {
        id: 7,
        questionText:
          'O que significa e qual a importância de utilizar um "repertório sociocultural produtivo" em uma redação dissertativo-argumentativa, especialmente em contextos de avaliação como o ENEM?',
        options: [
          {
            id: "a",
            text: "Usar gírias, memes e expressões populares para tornar o texto mais informal e descontraído.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar conhecimentos de diversas áreas do saber (história, filosofia, sociologia, literatura, arte, ciência, etc.) de forma pertinente e relacionada ao tema, para fundamentar e legitimar os argumentos, demonstrando cultura geral e capacidade de articulação.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Copiar trechos de livros famosos ou artigos científicos sem citar a fonte ou relacionar com a discussão.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Apenas citar autores renomados sem entender o que eles realmente dizem ou como suas ideias se aplicam ao tema.",
            isCorrect: false,
          },
        ],
        explanation:
          "O repertório sociocultural produtivo refere-se à capacidade do autor de mobilizar conhecimentos de outras áreas do saber (filosofia, história, sociologia, literatura, cinema, etc.) de forma pertinente e relacionada ao tema. Ele serve para enriquecer e fundamentar a argumentação, conferindo maior credibilidade, profundidade e originalidade ao texto.",
      },
      {
        id: 8,
        questionText:
          "Qual a importância crucial da leitura de diferentes gêneros textuais (notícias, artigos científicos, ensaios, romances, poemas, etc.) para o aprimoramento da escrita de redações, especialmente as dissertativo-argumentativas?",
        options: [
          {
            id: "a",
            text: "Nenhuma, a leitura e a escrita são habilidades independentes e não se influenciam mutuamente.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Ajuda a expandir o vocabulário, aprimorar a capacidade de argumentação e persuasão, conhecer diferentes estruturas textuais, assimilar padrões de coesão e coerência, e desenvolver o repertório sociocultural necessário para fundamentar os próprios textos.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Apenas para ter mais tempo livre e se distrair durante os momentos de estudo.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Faz a pessoa copiar automaticamente o estilo e as ideias de outros autores, perdendo a originalidade na escrita.",
            isCorrect: false,
          },
        ],
        explanation:
          "A leitura diversificada é fundamental para o desenvolvimento da escrita. Ela amplia o vocabulário, fornece modelos de argumentação, enriquece o repertório de ideias, ajuda a compreender diferentes estruturas textuais e a internalizar os mecanismos de coesão e coerência, tornando o escritor mais proficiente e versátil.",
      },
      {
        id: 9,
        questionText: 'O que caracteriza a "originalidade" e a "autoralidade" em uma redação dissertativo-argumentativa, e por que esses aspectos são valorizados em avaliações de alto nível?',
        options: [
          {
            id: "a",
            text: "Inventar fatos e dados falsos para comprovar a tese, mesmo que não sejam baseados na realidade.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Apresentar uma perspectiva única, criativa e bem desenvolvida sobre o tema, fugindo do senso comum, construindo uma argumentação própria, mesmo que se utilize de repertório externo de forma produtiva.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Usar apenas palavras extremamente raras e complexas que a maioria das pessoas não conhece.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Copiar integralmente ideias de outros textos e apresentá-las como suas, sem qualquer elaboração ou citação.",
            isCorrect: false,
          },
        ],
        explanation:
          "A originalidade e a autoralidade em uma redação não significam inventar informações, mas sim a capacidade de desenvolver uma argumentação autêntica, com um olhar próprio sobre o tema, que se diferencia das abordagens mais comuns. É a marca pessoal do autor na construção do texto, demonstrando sua capacidade de reflexão e análise crítica.",
      },
      {
        id: 10,
        questionText:
          'Qual é o papel fundamental da "coerência" em um texto dissertativo-argumentativo, e como ela se relaciona com a clareza e a inteligibilidade da mensagem para o leitor?',
        options: [
          {
            id: "a",
            text: "Fazer o texto ter um tamanho mínimo exigido pela prova ou pela tarefa de escrita, independentemente da qualidade do conteúdo.",
            isCorrect: false,
          },
          {
            id: "b",
            text: "Garantir que as ideias apresentadas sejam lógicas, não contraditórias, que haja progressão de sentido e que todas as partes do texto contribuam para a construção de um significado global, tornando a mensagem clara e compreensível.",
            isCorrect: true,
          },
          {
            id: "c",
            text: "Utilizar apenas frases curtas e simples, com vocabulário limitado, para facilitar a leitura para todos os públicos.",
            isCorrect: false,
          },
          {
            id: "d",
            text: "Repetir as mesmas palavras e expressões várias vezes ao longo do texto para reforçar a ideia central.",
            isCorrect: false,
          },
        ],
        explanation:
          "A coerência garante a inteligibilidade do texto, assegurando que as ideias se conectem logicamente, sem contradições, e que o texto tenha um sentido completo e progressivo para o leitor. É a articulação semântica que dá unidade ao texto.",
      },
    ],
  },
];