import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
if(!(localStorage.getItem('liked'))){
    localStorage.setItem('liked', JSON.stringify([]))
}

createRoot(document.getElementById('root')).render(
    <App />
)
