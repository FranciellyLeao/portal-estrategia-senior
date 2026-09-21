// ============================================================================
// EAD ESTRATÉGIA DE MARCA — SYSTEMA DE ATIVIDADES & EXERCÍCIOS MULTIMODAIS
// ============================================================================

/**
 * 15 Formatos Distintos de Exercícios Práticos para Formação de Estrategista Sênior
 */
export type ActivityType =
  // 🔍 Investigação & Desconstrução
  | 'REVERSE_ENGINEERING'      // Engenharia Reversa de Campanha/Marca
  | 'FIX_THE_BRIEF'            // Caça-Erros e Reescrita de Briefing
  | 'PERCEPTUAL_MAPPING'       // Mapeamento Perceptual de Brechas no Mercado
  
  // 🎙️ Interação & Comunicação Oral
  | 'ROLEPLAY_C_LEVEL'         // Defesa Oral / Simulação de Reunião com CEO
  | 'MOM_TEST_INTERVIEW'       // Simulação de Entrevista sem Pergunta Indutiva
  | 'CRISIS_PR_SIMULATION'     // Resolução de Crise de Imagem & PR sob Tempo
  | 'DEVILS_ADVOCATE'          // Batalha de Argumentação (Defender 2 Lados)
  
  // 🧠 Decisão sob Pressão & Foco
  | 'EXTREME_CONSTRAINT'       // Estratégia sob Restrição Extrema (Orçamento 0, 1 canal)
  | 'CROSS_INDUSTRY'           // Inovação Cruzada (Benchmark de outro segmento)
  | 'HARD_TRADE_OFFS'          // Teste da Escolha Difícil (Escolher 1 caminho, abrir mão dos outros)
  
  // 📄 Síntese Executiva & Entrega
  | 'EXECUTIVE_MEMO'           // Memo Executivo de 1 Página (Fato -> Hipótese -> Ação)
  | 'FEYNMAN_TECHNIQUE'        // A Pílula para Leigos (Simplificação sem Jargão)
  | 'MANIFESTO_VALUE_PROP'     // Redação de Manifesto e Proposta de Valor
  | 'METRICS_DASHBOARD'        // Diagnóstico de Painel de Métricas / Funil
  | 'CREATIVE_BRIEF';          // Briefing Estratégico de Criação

export type DifficultyLevel = 'Iniciante' | 'Intermediário' | 'Avançado' | 'Sênior C-Level';

export interface ActivityCriteria {
  id: string;
  label: string;
  description: string;
}

export interface MetricData {
  label: string;
  value: string;
  change?: string;
  status?: 'warning' | 'danger' | 'success' | 'neutral';
}

export interface UnitLesson {
  unitId: string;
  unitTitle: string;
  readingTimeMinutes: number;
  lessonTextMarkdown: string;
}

export interface Activity {
  id: string;
  disciplineId: string; // ex: 'DISC01'
  title: string;
  type: ActivityType;
  level: DifficultyLevel;
  estimatedMinutes: number;
  badgeLabel: string;
  icon: string;
  
  // Contexto e Cenário
  clientProfile?: {
    companyName: string;
    segment: string;
    annualRevenue?: string;
    stakeholderRole: string; // ex: 'CEO', 'CFO', 'Fundador'
  };
  scenarioText: string;
  dataPanel?: MetricData[]; // Usado para dashboards/métricas simuladas
  forbiddenTerms?: string[]; // Termos/jargões proibidos (ex: em defesas C-Level ou Feynman)
  
  // Prompt de Execução do Aluno
  instructions: string[];
  responseFormat: 'TEXT_MARKDOWN' | 'AUDIO_OR_SCRIPT' | 'MATRIX_CANVAS' | 'TABLE_INPUT' | 'QUIZ_CHOICE';
  placeholderText: string;
  
  // Critérios de Avaliação do Mentor
  evaluationCriteria: ActivityCriteria[];
  mentorTip: string;
  sampleGabarito: string; // Exemplo de resposta de nível sênior para comparação
}

// ============================================================================
// AULAS DIDÁTICAS DE FUNDAMENTAÇÃO TEÓRICA (LESSON TEXT MARKDOWN)
// ============================================================================

export const DISC01_LESSONS: UnitLesson[] = [
  {
    unitId: 'U1.1',
    unitTitle: 'Unidade 1: O Kernel do Diagnóstico e a Armadilha da Solução Precoce',
    readingTimeMinutes: 8,
    lessonTextMarkdown: `
### 🏛️ O Kernel do Diagnóstico Estratégico

A maioria dos profissionais de criação opera sob uma lógica reativa: diante de uma queixa comercial do cliente, saltam imediatamente para uma proposta visual ou de comunicação. Essa tendência de pular etapas gera o seguinte atalho lógico:

**Problema de Vendas → Mudar Posicionamento → Criar Marca Premium → Nova Identidade Visual**

O papel de um estrategista sênior é quebrar essa ansiedade por respostas imediatas e segurar a solução até entender profundamente a causa raiz do problema.

---

### 1. O Núcleo da Estratégia (*The Kernel*)
De acordo com Richard Rumelt (*Good Strategy Bad Strategy*), uma estratégia real não se define por metas financeiras ou desejos de crescimento. Toda boa estratégia possui uma estrutura interna coesa denominada **Kernel** (o Núcleo), composta por três elementos fundamentais:

1. **O Diagnóstico:** Define a natureza exata do desafio. Ele simplifica a complexidade do cenário ao identificar quais aspectos da realidade são realmente críticos. Responde à pergunta: *"O que realmente está acontecendo aqui?"*.
2. **A Política Guiada (*Guiding Policy*):** É a abordagem geral escolhida para superar os obstáculos identificados no diagnóstico. Ela direciona a energia e os recursos sem detalhar cada passo operacional.
3. **As Ações Coerentes (*Coherent Actions*):** Conjunto de passos coordenados entre si para executar a política guiada. A força da estratégia reside na coerência dessas ações direcionadas ao mesmo objetivo.

---

### 2. Os Quatro Sinais da Má Estratégia
Rumelt alerta que a "má estratégia" se manifesta por meio de quatro características centrais:

* **Fluff (Linguagem Oca):** Uso de jargões complicados que criam a ilusão de pensamento de alto nível, mas não possuem substância.
* **Incapacidade de Enfrentar o Desafio:** Omitir ou falhar em definir o verdadeiro problema da empresa.
* **Confundir Metas com Estratégia:** Tratar desejos de crescimento (ex: *"crescer 30% no ano"*) como se fossem o plano para alcançar esse resultado.
* **Objetivos Estratégicos Ruins:** Traçar metas impraticáveis ou contraditórias por incapacidade de fazer escolhas duras (*trade-offs*).

---

### 3. O Separador de Raciocínio na Prática
Para atuar no nível sênior, o profissional precisa categorizar as informações do cliente em seis camadas:

* **Fato:** O dado objetivo e comprovado (ex: *"A receita caiu 30% nos últimos dois trimestres"*).
* **Hipótese:** Uma explicação plausível que precisa ser testada (ex: *"A queda pode estar ligada ao cancelamento de clientes antigos"*).
* **Investigação:** As perguntas e pesquisas necessárias para auditar a hipótese.
* **Insight:** A descoberta profunda sobre o comportamento ou operação após a investigação.
* **Estratégia:** A decisão de onde alocar recursos e qual oportunidade perseguir.
* **Expressão:** A tradução em identidade visual, linguagem, conteúdo e experiência.
`
  },
  {
    unitId: 'U1.2',
    unitTitle: 'Unidade 2: Análise de Funil e Mapeamento de Causas Conflitantes',
    readingTimeMinutes: 10,
    lessonTextMarkdown: `
### 📊 Diagnóstico de Funil de Vendas e Comportamento

Quando investigamos um negócio, a opinião do fundador ou cliente frequentemente contém vícios de julgamento. Para realizar um diagnóstico preciso, é preciso analisar os dados de comportamento ao longo do funil de vendas.

---

### 1. A Batalha pela Mente e a Percepção de Valor
Como destacam Al Ries e Jack Trout (*Posicionamento*), o marketing moderno não é uma batalha de produtos ou atributos objetivos, mas uma **batalha de percepções na mente do consumidor**. 

Se um e-commerce registra um aumento de tráfego de 40%, mas sofre uma queda de 20% no faturamento, o problema não está na atração (topo de funil), mas na **qualidade do tráfego** ou na **falta de clareza do valor percebido** no meio/fim do funil.

---

### 2. Sintoma vs. Causa Raiz no E-commerce
* **Sintoma:** Queda na taxa de conversão de vendas.
* **Hipótese Falsa do Cliente:** *"Nosso preço está alto, precisamos dar desconto ou mudar a marca."*
* **Causa Raiz Real (Exemplo):** Anúncios focados apenas em estética atraem visitantes curiosos sem intenção de compra. Quando chegam à página do produto, não encontram a explicação clara dos benefícios do produto.

---

### 3. As 3 Métricas Críticas de Investigação
1. **Taxa de Conversão (CR):** Avalia a eficiência da página de destino em transformar visitantes em compradores.
2. **Taxa de Abandono de Checkout:** Revela se o obstáculo está no momento do pagamento, frete ou decisão final.
3. **Custo de Aquisição (CAC) vs. LTV (Lifetime Value):** Indica se o negócio é sustentável a longo prazo ou se está queimando caixa para atrair clientes que não retornam.
`
  }
];

export const DISC02_LESSONS: UnitLesson[] = [
  {
    unitId: 'U2.1',
    unitTitle: 'Unidade 1: Leis Fundamentais do Posicionamento e Construção de Categoria',
    readingTimeMinutes: 9,
    lessonTextMarkdown: `
### 🧠 Leis do Posicionamento (Al Ries & Jack Trout)

Posicionamento não é o que você faz com um produto. Posicionamento é o que você faz com a mente do potencial comprador.

---

### 1. A Lei do Primeiro (*The Law of Leadership*)
É preferível ser o primeiro do que ser o melhor. A marca líder na mente de uma categoria geralmente retém mais da metade da fatia de mercado.

### 2. A Lei da Categoria (*The Law of Category*)
Se você não puder ser o primeiro em uma categoria, crie uma nova categoria em que você possa ser o primeiro.

### 3. A Lei da Mente (*The Law of the Mind*)
É melhor ser o primeiro na mente do que ser o primeiro na loja. A percepção do consumidor sobre se a marca é referência define o comportamento de escolha.
`
  }
];

// ============================================================================
// BANCO DE DADOS DE ATIVIDADES EXEMPLO (POVOAMENTO DA ENGINE)
// ============================================================================

export const ACTIVITIES_DATABASE: Activity[] = [
  // --------------------------------------------------------------------------
  // DISC01: DIAGNÓSTICO ESTRATÉGICO
  // --------------------------------------------------------------------------
  {
    id: 'APA-1.1',
    disciplineId: 'DISC01',
    title: 'Análise de Parecer: Queda de Vendas vs. Rebranding',
    type: 'EXECUTIVE_MEMO',
    level: 'Intermediário',
    estimatedMinutes: 20,
    badgeLabel: '📝 Memo Executivo',
    icon: 'FileText',
    clientProfile: {
      companyName: 'Clínica OdontoLife',
      segment: 'Saúde / Odontologia',
      stakeholderRole: 'Fundador'
    },
    scenarioText: 'O fundador relata queda de 30% nas vendas nos últimos 2 trimestres e quer fazer um rebranding urgente porque acha a marca "antiquada".',
    instructions: [
      'Separe os fatos comprovados das meras opiniões do cliente.',
      'Identifique por que o rebranding não deve ser a solução imediata.',
      'Apresente 3 perguntas de investigação comercial.'
    ],
    responseFormat: 'TEXT_MARKDOWN',
    placeholderText: '### 1. Fatos vs. Interpretações...\n### 2. Diagnóstico de Risco...\n### 3. Perguntas de Investigação...',
    evaluationCriteria: [
      { id: 'c1', label: 'Isolamento de Fatos', description: 'Separou receita (-30%) de opinião visual.' },
      { id: 'c2', label: 'Visão Comercial', description: 'Evitou soluções de design precoces.' }
    ],
    mentorTip: 'Foque em métricas de retenção e mix de produtos antes de falar de estética.',
    sampleGabarito: 'A queda de 30% é o fato; a marca ser antiquada é suposição...'
  }
];

export const RENDER_RULES = {
  ROLEPLAY_C_LEVEL: {
    color: 'bg-red-500/10 border-red-500/30 text-red-400',
    actionLabel: 'Gravar Áudio ou Digitar Script de Reunião'
  },
  METRICS_DASHBOARD: {
    color: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    actionLabel: 'Analisar Tabela de Métricas e Formular Parecer'
  },
  FIX_THE_BRIEF: {
    color: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    actionLabel: 'Destacar Contradições e Reescrever Briefing'
  },
  FEYNMAN_TECHNIQUE: {
    color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    actionLabel: 'Redigir Explicação Didática Sem Jargões'
  },
  EXECUTIVE_MEMO: {
    color: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
    actionLabel: 'Escrever Relatório Executivo Estruturado'
  }
};
