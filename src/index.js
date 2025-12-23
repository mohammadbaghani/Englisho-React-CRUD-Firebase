
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    </link>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



