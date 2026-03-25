import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import StartPage from './pages/StartPage'
import SolutionsPage from './pages/SolutionsPage'
import AutomationPage from './pages/AutomationPage'
import SystemsPage from './pages/SystemsPage'
import WebsitesPage from './pages/WebsitesPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comecar" element={<StartPage />} />
        <Route path="/solucoes" element={<SolutionsPage />} />
        <Route path="/automacao" element={<AutomationPage />} />
        <Route path="/sistemas" element={<SystemsPage />} />
        <Route path="/sites" element={<WebsitesPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
    </Layout>
  )
}
