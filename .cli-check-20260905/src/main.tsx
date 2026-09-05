import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'acioleui';
import 'acioleui/styles';
import './styles.css';

function App() { return <main><h1>Seu projeto AcioleUI</h1><p>Comece a construir.</p></main>; }
createRoot(document.getElementById('root')!).render(<ThemeProvider defaultTheme="light"><App /></ThemeProvider>);
