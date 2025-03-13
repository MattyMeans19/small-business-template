import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route  } from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Products from './Products.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/small-business-template/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>
)
