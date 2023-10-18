import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';

const rootNode = document.getElementById('root');

if (rootNode) {
    ReactDOM.createRoot(rootNode).render(<App />);
} else {
    throw new Error('root node not found');
}
