import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './main.css';
import './theme.css';

const rootNode = document.getElementById('root');

if (rootNode) {
  ReactDOM.createRoot(rootNode).render(<App />);
} else {
  throw new Error('root node not found');
}
