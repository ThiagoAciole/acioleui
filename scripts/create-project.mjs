import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const [name, ...args] = process.argv.slice(2);
if (!name || name.startsWith('-')) { console.error('Uso: npm run create:project -- <nome>'); process.exit(1); }
const target = resolve(process.cwd(), name);
if (existsSync(target)) { console.error('A pasta já existe: ' + target); process.exit(1); }
const files = {
  'package.json': JSON.stringify({ name: name.toLowerCase().replace(/[^a-z0-9-_]/g, '-'), private: true, type: 'module', scripts: { dev: 'vite', build: 'tsc && vite build', preview: 'vite preview' }, dependencies: { acioleui: '^0.1.7', react: '^18.3.1', 'react-dom': '^18.3.1' }, devDependencies: { '@vitejs/plugin-react': '^4.4.1', typescript: '^5.4.0', vite: '^7.3.1' } }, null, 2) + '\n',
  'index.html': '<div id="root"></div><script type="module" src="/src/main.tsx"></script>\n',
  'tsconfig.json': JSON.stringify({ compilerOptions: { target: 'ES2020', lib: ['ES2020', 'DOM'], module: 'ESNext', moduleResolution: 'Bundler', strict: true, jsx: 'react-jsx', noEmit: true, skipLibCheck: true }, include: ['src'] }, null, 2) + '\n',
  'vite.config.ts': "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\nexport default defineConfig({ plugins: [react()] });\n",
  'src/main.tsx': String.raw`import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, useTheme } from 'acioleui';
function Icon({ name }) { return <span aria-hidden="true">{{ home: '⌂', folder: '▱', settings: '⚙', sun: '☼', moon: '◐', sparkles: '✦' }[name]}</span>; }
import 'acioleui/styles';
import './styles.css';
const items = [{ label: 'Home', icon: 'home' }, { label: 'Projetos', icon: 'folder' }, { label: 'Configurações', icon: 'settings' }];
function ThemeToggle() { const { theme, toggleTheme } = useTheme(); return <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema"><Icon name={theme === 'dark' ? 'sun' : 'moon'} size="small" /></button>; }
function App() { const [active, setActive] = useState('Home'); return <div className="app-shell"><aside><div className="brand"><span className="brand-mark">A</span><strong>Aciole</strong></div><nav>{items.map(item => <button className={active === item.label ? 'active' : ''} onClick={() => setActive(item.label)} key={item.label}><Icon name={item.icon} size="small" />{item.label}</button>)}</nav></aside><main><header><ThemeToggle /></header><section><p className="eyebrow">Workspace</p><h1>{active}</h1><p className="subtitle">Um ponto de partida pronto para evoluir seu produto.</p><div className="empty-state"><div className="empty-icon"><Icon name="sparkles" size="medium" /></div><h2>Comece por aqui</h2><p>Projeto configurado com AcioleUI, tema e layout base.</p></div></section></main></div>; }
createRoot(document.getElementById('root')!).render(<ThemeProvider defaultTheme="light"><App /></ThemeProvider>);`,
  'src/styles.css': String.raw`:root { font-family: Inter, ui-sans-serif, system-ui, sans-serif; color: #1f2937; background: #f8fafc; } * { box-sizing: border-box; } body { margin: 0; } button { font: inherit; border: 0; cursor: pointer; } .app-shell { min-height: 100vh; display: flex; } aside { width: 280px; flex: none; background: #fff; border-right: 1px solid #e5e7eb; padding: 34px 16px; } .brand { display: flex; align-items: center; gap: 10px; padding: 0 8px 46px; font-size: 20px; } .brand-mark { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 13px; color: white; background: #6d3bd1; font-weight: 800; } nav { display: grid; gap: 5px; } nav button { display: flex; align-items: center; gap: 12px; width: 100%; padding: 13px 16px; border-radius: 8px; color: #64748b; background: transparent; text-align: left; } nav button.active { color: #6857ee; background: #f1efff; font-weight: 650; border-left: 3px solid #6857ee; padding-left: 13px; } main { min-width: 0; flex: 1; } header { height: 72px; display: flex; justify-content: flex-end; align-items: center; padding: 0 24px; background: #fff; border-bottom: 1px solid #f1f5f9; } .theme-toggle { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 7px; color: #6844d6; background: #ded4ff; } section { padding: 42px 40px; } .eyebrow { margin: 0 0 8px; color: #64748b; font-size: 13px; } h1 { margin: 0; font-size: 25px; } .subtitle { margin: 8px 0; color: #64748b; } .empty-state { max-width: 520px; margin: 100px auto 0; padding: 38px; text-align: center; border: 1px dashed #d8dce5; border-radius: 14px; background: rgba(255,255,255,.55); } .empty-icon { margin: auto; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 12px; color: #6857ee; background: #f1efff; } h2 { margin: 16px 0 6px; font-size: 18px; } .empty-state p { margin: 0; color: #64748b; } @media (max-width: 700px) { aside { width: 76px; padding: 24px 10px; } .brand strong, nav button { font-size: 0; } nav button { justify-content: center; padding: 13px; } section { padding: 28px 22px; } }`
  'AGENTS.md': '# Estrutura do projeto\n\nReact + Vite + TypeScript com AcioleUI.\n\n## Pastas\n\n- src/components: componentes reutilizáveis, um por pasta.\n- src/pages: telas, uma por pasta.\n- src/layouts: shells compartilhados.\n- src/contexts: providers e estado global.\n- src/hooks: hooks reutilizáveis.\n- src/services: API e integrações externas.\n- src/store: estado de domínio.\n- src/styles: tokens e temas.\n- src/assets: imagens importadas pelo código.\n- src/utils: helpers puros.\n\n## Regras\n\n1. Reutilize AcioleUI antes de criar código.\n2. Separe UI, negócio e dados.\n3. Preserve acessibilidade e ThemeProvider.\n4. Evite abstrações prematuras.\n5. Valide com npm run build.\n'
};
for (const [file, content] of Object.entries(files)) { const path = resolve(target, file); mkdirSync(resolve(path, '..'), { recursive: true }); writeFileSync(path, content); }
console.log('Projeto criado em ' + target);
if (args.includes('--install')) {
  const result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], { cwd: target, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
