#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
const name = args.find((arg) => !arg.startsWith('-'));
const install = args.includes('--install');
if (!name) {
  console.error('Uso: npm create acioleui@latest <nome> [--install]');
  process.exit(1);
}
const target = resolve(process.cwd(), name);
if (existsSync(target)) {
  console.error('A pasta já existe: ' + target);
  process.exit(1);
}
const files = {
  'package.json': JSON.stringify({ name: name.toLowerCase().replace(/[^a-z0-9-_]/g, '-'), private: true, type: 'module', scripts: { dev: 'vite', build: 'tsc && vite build', preview: 'vite preview' }, dependencies: { acioleui: '^0.1.7', react: '^18.3.1', 'react-dom': '^18.3.1' }, devDependencies: { '@vitejs/plugin-react': '^4.4.1', '@types/react': '^18.3.0', '@types/react-dom': '^18.3.0', typescript: '^5.4.0', vite: '^7.3.1' } }, null, 2) + '\n',
  'index.html': '<div id="root"></div><script type="module" src="/src/main.tsx"></script>\n',
  'tsconfig.json': JSON.stringify({ compilerOptions: { target: 'ES2020', lib: ['ES2020', 'DOM'], module: 'ESNext', moduleResolution: 'Bundler', strict: true, jsx: 'react-jsx', noEmit: true, skipLibCheck: true }, include: ['src'] }, null, 2) + '\n',
  'vite.config.ts': "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nexport default defineConfig({ plugins: [react()] });\n",
  'src/main.tsx': "import { createRoot } from 'react-dom/client';\nimport { ThemeProvider } from 'acioleui';\nimport 'acioleui/styles';\nimport './styles.css';\n\nfunction App() { return <main><h1>Seu projeto AcioleUI</h1><p>Comece a construir.</p></main>; }\ncreateRoot(document.getElementById('root')!).render(<ThemeProvider defaultTheme=\"light\"><App /></ThemeProvider>);\n",
  'src/styles.css': ':root { font-family: Inter, system-ui, sans-serif; color: #1f2937; background: #f8fafc; } body { margin: 0; } main { padding: 48px; }\n',
  'AGENTS.md': '# Estrutura do projeto\n\nReact + Vite + TypeScript com AcioleUI.\n\n- `src/components`: um componente reutilizável por pasta, com `index.tsx` e `styles.ts` quando necessário.\n- `src/pages`: telas, uma por pasta.\n- `src/layouts`: shells compartilhados.\n- `src/contexts`: providers e estado global.\n- `src/hooks`: hooks reutilizáveis.\n- `src/services`: API e integrações externas.\n- `src/store`: estado de domínio.\n- `src/styles`: tokens, temas e estilos globais.\n- `src/assets`: imagens importadas pelo código.\n- `src/utils`: helpers puros.\n\nUse AcioleUI e seu `ThemeProvider` antes de criar alternativas. Separe UI, negócio e dados. Preserve acessibilidade. Valide com `npm run build`.\n',
  '.agents/skills/acioleui-design/SKILL.md': readFileSync(new URL('../.agents/skills/acioleui-design/SKILL.md', import.meta.url), 'utf8')
};
for (const directory of ['src/components', 'src/contexts', 'src/hooks', 'src/layouts', 'src/pages/Home', 'src/services', 'src/store', 'src/styles', 'src/assets', 'src/utils']) {
  files[`${directory}/.gitkeep`] = '';
}
for (const [file, content] of Object.entries(files)) { const path = resolve(target, file); mkdirSync(resolve(path, '..'), { recursive: true }); writeFileSync(path, content); }
console.log('Projeto AcioleUI criado em ' + target);
if (install) { const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], { cwd: target, stdio: 'inherit' }); if (result.status !== 0) process.exit(result.status ?? 1); }
