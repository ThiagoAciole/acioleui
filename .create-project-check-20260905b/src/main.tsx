import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, useTheme } from 'acioleui';
import { Icon } from 'acioleui/icons';
import 'acioleui/styles';
import './styles.css';
const items = [{ label: 'Home', icon: 'home' }, { label: 'Projetos', icon: 'folder' }, { label: 'Configurações', icon: 'settings' }];
function ThemeToggle() { const { theme, toggleTheme } = useTheme(); return <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema"><Icon name={theme === 'dark' ? 'sun' : 'moon'} size="small" /></button>; }
function App() { const [active, setActive] = useState('Home'); return <div className="app-shell"><aside><div className="brand"><span className="brand-mark">A</span><strong>Aciole</strong></div><nav>{items.map(item => <button className={active === item.label ? 'active' : ''} onClick={() => setActive(item.label)} key={item.label}><Icon name={item.icon} size="small" />{item.label}</button>)}</nav></aside><main><header><ThemeToggle /></header><section><p className="eyebrow">Workspace</p><h1>{active}</h1><p className="subtitle">Um ponto de partida pronto para evoluir seu produto.</p><div className="empty-state"><div className="empty-icon"><Icon name="sparkles" size="medium" /></div><h2>Comece por aqui</h2><p>Projeto configurado com AcioleUI, tema e layout base.</p></div></section></main></div>; }
createRoot(document.getElementById('root')!).render(<ThemeProvider defaultTheme="light"><App /></ThemeProvider>);