import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));    // <App /> est un components écrit en JSX.

//la méthode render prend 2 paramètre 
//1er :   un component généralement <App />

//2eme :  le second paramètre est une API Dom JavaScript par défaut dans un global documen object et on applique un "getElementById" pour le selectionner par l'Id root
// qui se trouve dans le fichier index.html du dossier public.
// enfin de compte nous disons a React de render un component dans l'id root.
