import { createRoot } from 'react-dom/client'
import './assets/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import Todo from 'pages/Todo'
import Contador from 'pages/Contador/Contador'
import Introducao from 'pages/Introdução/Introdução'
import NotFound from 'pages/Notfound'
import CompMount from 'pages/CompMount'
import FetchApi from 'pages/FetchAPI'
import Form from 'pages/Form'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Router>
    <div className="flex justify-center space-x-2">
      <a href="/">Home</a>
      <a href="/todo">Todo</a>
      <a href="/contador">Contador</a>
      <a href="/introdução">Introdução</a>
      <a href="/mounting">Mount</a>
      <a href="/fetchapi">FetchAPI</a>
      <a href="/form">Form</a>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/contador" element={<Contador />} />
      <Route path="/introducao" element={<Introducao />} />
      <Route path="/mounting" element={<CompMount />} />
      <Route path="/fetchapi" element={<FetchApi />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)
