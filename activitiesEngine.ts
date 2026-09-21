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
  },
  {
    id: 'APA-1.2',
    disciplineId: 'DISC01',
    title: 'Gargalo no Funil: Alta de Tráfego e Queda de Receita',
    type: 'METRICS_DASHBOARD',
    level: 'Intermediário',
    estimatedMinutes: 25,
    badgeLabel: '📊 Análise de Painel',
    icon: 'BarChart2',
    dataPanel: [
      { label: 'Tráfego Mensal', value: '140.000', change: '+40%', status: 'success' },
      { label: 'Faturamento', value: 'R$ 180.000', change: '-20%', status: 'danger' },
      { label: 'Taxa de Conversão', value: '0.6%', change: '-50%', status: 'danger' },
      { label: 'Ticket Médio', value: 'R$ 210', change: '0%', status: 'neutral' }
    ],
    scenarioText: 'Uma marca D2C de suplementos aumentou os anúncios focando nas embalagens instagramáveis. O tráfego subiu 40%, mas a receita caiu 20%.',
    instructions: [
      'Analise a tabela acima e identifique a desconexão do funil.',
      'Formule 2 hipóteses para o descompasso entre atração e conversão.',
      'Indique quais 2 métricas adicionais pediria para o e-commerce.'
    ],
    responseFormat: 'TEXT_MARKDOWN',
    placeholderText: '### Análise do Funil...\n### Hipóteses de Causa Raiz...\n### Métricas Solicitadas...',
    evaluationCriteria: [
      { id: 'c1', label: 'Leitura de Métricas', description: 'Identificou a queda da Taxa de Conversão.' },
      { id: 'c2', label: 'Qualidade do Tráfego', description: 'Percebeu a atração de público não qualificado.' }
    ],
    mentorTip: 'Anúncios visuais sem promessa clara geram tráfego curioso, não comprador.',
    sampleGabarito: 'O tráfego aumentou, mas a qualificação caiu drasticamente...'
  },
  {
    id: 'APA-1.3',
    disciplineId: 'DISC01',
    title: 'Simulação C-Level: CEO Exigindo Rebranding em 30 Dias',
    type: 'ROLEPLAY_C_LEVEL',
    level: 'Sênior C-Level',
    estimatedMinutes: 30,
    badgeLabel: '🎙️ Roleplay C-Level',
    icon: 'Mic',
    forbiddenTerms: ['paleta de cores', 'logo', 'feed', 'tipografia', 'aesthetic', 'instagramável'],
    clientProfile: {
      companyName: 'Rede FitPrime Academias',
      segment: 'Fitness Premium',
      stakeholderRole: 'CEO & Sócio Majoritário'
    },
    scenarioText: '"Nossa marca está ultrapassada! As redes nacionais estão com neon e luzes modernas. Quero um rebranding completo em 30 dias para estancar a perda de alunos."',
    instructions: [
      'Escreva o script da sua fala em uma reunião de 3 minutos com esse CEO.',
      'Convença-o a pausar o pedido de rebranding sem ser confrontacional.',
      'Atenção: Você está PROIBIDO de usar os termos da lista de palavras bloqueadas.'
    ],
    responseFormat: 'AUDIO_OR_SCRIPT',
    placeholderText: '"Entendo sua urgência, fulano. Mas como estrategista, meu papel é proteger o seu caixa. Vamos olhar para..."',
    evaluationCriteria: [
      { id: 'c1', label: 'Postura Executiva', description: 'Demonstrou autoridade de negócio sem ser agressivo.' },
      { id: 'c2', label: 'Foco Financeiro', description: 'Alertou sobre o risco de gasto sem diagnóstico operacional.' }
    ],
    mentorTip: 'Fale de retenção de alunos, custo de aquisição e experiência de treino.',
    sampleGabarito: 'Antes de investir em comunicação visual, precisamos entender por que os alunos estão cancelando...'
  },
  {
    id: 'APA-1.4',
    disciplineId: 'DISC01',
    title: 'Caça-Erros: Corrigindo um Briefing Defeituoso',
    type: 'FIX_THE_BRIEF',
    level: 'Avançado',
    estimatedMinutes: 20,
    badgeLabel: '⚠️ Caça-Erros',
    icon: 'AlertTriangle',
    scenarioText: 'Briefing recebido do cliente: "Queremos ser o Uber dos pet shops. Nosso público é todo mundo que ama animais. Precisamos de um posicionamento jovem, moderno, barato e de luxo ao mesmo tempo."',
    instructions: [
      'Identifique os 4 erros graves e contradições deste briefing.',
      'Reescreva o objetivo estratégico de forma coerente e focada.'
    ],
    responseFormat: 'TEXT_MARKDOWN',
    placeholderText: '### Erros Identificados...\n### Briefing Reestruturado...',
    evaluationCriteria: [
      { id: 'c1', label: 'Detecção de Contradições', description: 'Apontou o conflito entre "barato" e "luxo" e o público "todo mundo".' }
    ],
    mentorTip: 'Estratégia é escolher o que NÃO fazer.',
    sampleGabarito: 'Não é possível ser luxo e barato simultaneamente...'
  },
  {
    id: 'APA-1.5',
    disciplineId: 'DISC01',
    title: 'Técnica Feynman: Explicando Causa Raiz para um Leigo',
    type: 'FEYNMAN_TECHNIQUE',
    level: 'Iniciante',
    estimatedMinutes: 15,
    badgeLabel: '💬 Pílula para Leigos',
    icon: 'Smile',
    forbiddenTerms: ['brand equity', 'funil', 'conversion rate', 'touchpoints', 'kpi'],
    scenarioText: 'Um dono de uma padaria local quer entender por que você insiste em investigar o atendimento da recepção antes de mudar a placa da fachada da loja.',
    instructions: [
      'Explique a diferença entre "Tratar o Sintoma" e "Resolver a Causa Raiz".',
      'Use uma analogia do cotidiano (ex: medicina ou mecânica).',
      'Não utilize nenhum jargão de marketing.'
    ],
    responseFormat: 'TEXT_MARKDOWN',
    placeholderText: 'Imagine que você está com dor de dente...',
    evaluationCriteria: [
      { id: 'c1', label: 'Clareza Didática', description: 'Usou analogia simples e compreensível.' }
    ],
    mentorTip: 'Se você não consegue explicar de forma simples, você não entendeu o conceito.',
    sampleGabarito: 'Mudar a placa sem arrumar o atendimento é como tomar analgésico para dor de dente sem ir ao dentista...'
  }
];

// ============================================================================
// COMPONENTE DE SUGESTÃO PARA O FRONTEND (COMO RENDERIZAR CADA FORMATO)
// ============================================================================

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
