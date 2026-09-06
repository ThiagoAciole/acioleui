export const homeContent = {
  overview: {
    header: {
      title: 'AcioleUI - Visao geral',
      description: 'AcioleUI e uma biblioteca de componentes React focada em velocidade de implementacao, consistencia visual e composicao. A base foi pensada para uso imediato em produtos reais.',
    },
    introduction: {
      title: 'Introducao',
      paragraphs: [
        'AcioleUI entrega um conjunto de componentes reutilizaveis, estilos base e tokens semanticos para acelerar a construcao de interfaces sem perder controle sobre o design.',
        'A biblioteca cobre formularios, layout, exibicao de dados, feedback e navegacao. Em vez de impor uma camada pesada de abstracao, ela prioriza primitives simples, API clara e integracao direta com a aplicacao.',
      ],
      callout: 'O playground ja esta configurado para demonstrar o uso dos componentes em cenarios reais. Use a sidebar para navegar entre categorias e ajustar exemplos ao vivo.',
    },
    benefits: {
      title: 'Vantagens do AcioleUI',
      items: [
        {
          kicker: 'Velocity',
          title: 'Entrega mais rapida',
          description: 'componentes prontos para uso reduzem tempo de implementacao e evitam retrabalho em telas repetitivas.',
        },
        {
          kicker: 'Consistency',
          title: 'Consistencia visual',
          description: 'espacamento, tipografia, estados e feedback seguem o mesmo conjunto de tokens e convencoes.',
        },
        {
          kicker: 'Composition',
          title: 'Composicao real',
          description: 'os componentes foram pensados para combinacao entre si, sem travar o layout em estruturas fechadas.',
        },
        {
          kicker: 'Access',
          title: 'Acessibilidade',
          description: 'a base considera semantica, estados interativos e navegacao por teclado como requisito e nao como opcional.',
        },
        {
          kicker: 'Adoption',
          title: 'Adocao incremental',
          description: 'voce pode introduzir a biblioteca por tela, fluxo ou modulo, sem depender de uma migracao total.',
        },
      ],
    },
    quickStart: {
      title: 'Comece agora',
      description: 'Escolha um dos fluxos abaixo para iniciar rapidamente com a biblioteca.',
      links: [
        {
          href: '/home-installation',
          icon: 'download' as const,
          title: 'Instalacao',
          description: 'Adicione o pacote ao projeto e configure a base de estilos e providers.',
        },
        {
          href: '/home-usage',
          icon: 'book' as const,
          title: 'Uso',
          description: 'Veja o fluxo recomendado para navegar pela biblioteca e aplicar os componentes.',
        },
      ],
    },
  },
  installation: {
    header: {
      title: 'Instalacao',
      description: 'Configure o pacote, carregue os estilos globais e envolva a aplicacao com os providers necessarios.',
    },
    steps: [
      {
        step: 1,
        title: 'Instale o pacote',
        description: 'Adicione <Code>acioleui</Code> ao seu projeto com o gerenciador de pacotes da stack.',
        code: 'npm install acioleui',
      },
      {
        step: 2,
        title: 'Importe os estilos base',
        description: 'Garanta que os tokens e estilos globais sejam carregados no ponto de entrada da aplicacao.',
        code: "import 'acioleui/styles';",
      },
      {
        step: 3,
        title: 'Configure os providers',
        description: 'Envolva a aplicacao com <Code>ThemeProvider</Code>. Ele ja inclui a camada de toast por padrao.',
        code: `import { ThemeProvider } from 'acioleui';

function AppProviders({ children }) {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}`,
      },
    ],
  },
  usage: {
    header: {
      title: 'Uso',
      description: 'Aprenda o fluxo basico para explorar componentes, adaptar exemplos e compor interfaces com a biblioteca.',
    },
    quickStart: {
      title: 'Inicio rapido',
      paragraphs: [
        'Depois da instalacao, escolha qualquer componente na sidebar e use o playground para experimentar variacoes de props, estrutura e composicao.',
      ],
      snippet: `import { Button } from 'acioleui';

export function Example() {
  return <Button variant="primary">Ola mundo</Button>;
}`,
    },
    globals: {
      title: 'Globais',
      paragraphs: [
        'Os componentes foram desenhados para funcionar de forma isolada, mas a experiencia melhora quando a aplicacao compartilha providers, tema e estilos base.',
        'Para garantir consistencia visual, mantenha a biblioteca dentro do fluxo de tokens semanticos e evite sobrescrever estilos estruturais diretamente nos componentes base.',
      ],
    },
    bestPractices: {
      title: 'Boas praticas',
      items: [
        {
          title: 'Use tokens semanticos para cores, espacamentos e raios.',
          content: 'A biblioteca expoe tokens semanticos em <Code>./tokens/semantic.css</Code> para cores, espacamentos e raios. Usar esses tokens garante consistencia visual e facilita manutencao futura.',
        },
        {
          title: 'Centralize providers na raiz da aplicacao.',
          content: 'Envolva a aplicacao com <Code>ThemeProvider</Code> na raiz. Ele ja compoe tema e toast global em um unico ponto.',
        },
        {
          title: 'Prefira variacoes declarativas a overrides locais repetidos.',
          content: 'Em vez de sobrescrever estilos localmente, use as variacoes disponiveis em cada componente. Isso garante consistencia e facilita manutencao.',
        },
        {
          title: 'Valide acessibilidade antes de publicar novos fluxos.',
          content: 'A biblioteca foi desenhada com acessibilidade em mente, mas e importante validar novos fluxos com leitores de tela e navegacao por teclado antes de publicar.',
        },
      ],
    },
  },
} as const;
