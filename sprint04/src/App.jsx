import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Login from './components/pages/login/Login'
import Cadastro from './components/pages/cadastro/Cadastro'
import Servicos from './components/pages/servicos/Servicos'

import Container from './components/style/container/Container'
import Navbar from './components/pages/navbar/Navbar'
import Footer from './components/pages/footer/Footer'

import CadastroRecrutador from './components/pages/cadastroRecrutador/CadastroRecrutador'
import CadastroCandidato from './components/pages/cadastroCandidato/CadastroCandidato'
import ListaUsuario from './components/pages/usuario/ListaUsuario'

import PerfilRecrutador from './components/pages/perfilRecrutador/PerfilRecrutador'
import PerfilCandidato from './components/pages/perfilCandidato/PerfilCandidato'

import CadastroComplementar from './components/pages/cadastroComplementar/CadastroComplementar'
import CadastroComplementar2 from './components/pages/cadastroComplementar2/CadastroComplementar2'

import CadastroVagas from './components/pages/cadastroVagas/CadastroVagas'
import VisualizaVagas from './components/pages/visualizaVagas/VisualizaVagas'

import Senha from './components/pages/senha/Senha'

import FiltroCandidato from './components/pages/filtroCandidato/FiltroCandidato'
import Usuario from './components/pages/usuario/Usuario'

export default function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route customClass="min-height" path="/about" element={<About />} />
          <Route customClass="min-height" path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cadastroCandidato" element={<CadastroCandidato />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/listaUsuario" element={<ListaUsuario />} />
          <Route path="/cadastroRecrutador" element={<CadastroRecrutador />} />
          <Route path="/perfilRecrutador" element={<PerfilRecrutador />} />
          <Route path="/perfilCandidato" element={<PerfilCandidato />} />
          <Route
            path="/cadastroComplementar"
            element={<CadastroComplementar />}
          />
          <Route
            path="/cadastroComplementar2"
            element={<CadastroComplementar2 />}
          />
          <Route path="/senha" element={<Senha />} />
          <Route path="/cadastroVagas" element={<CadastroVagas />} />
          <Route path="/visualizaVagas" element={<VisualizaVagas />} />
          <Route path="/filtroCandidato" element={<FiltroCandidato />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}
