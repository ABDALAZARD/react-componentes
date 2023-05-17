import ReactDOM from 'react-dom/client'
import App from './App'

//Após npm install bootstrap, adicionar as próximas 2 linhas:
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const root = document.querySelector('#root')
ReactDOM.createRoot(root).render(<App />)