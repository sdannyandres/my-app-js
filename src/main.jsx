import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './componentes/Home'
import { Lista } from './componentes/Lista'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Tx } from './componentes/Tx'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<QueryClientProvider client={queryClient}>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home></Home>}>
  <Route index element={<p>Inicio</p>}></Route>
  <Route path= "productos" element={<p>productos</p>}></Route>
  <Route path= "lista" element={<Lista/>}></Route>
  <Route path= "*" element={<P>ruta no valida</P>}></Route>
  <Route path= "tx" element={<Tx/>}></Route>    
  </Route>
</Routes>
</BrowserRouter>
</QueryClientProvider>
</React.StrictMode>
)
