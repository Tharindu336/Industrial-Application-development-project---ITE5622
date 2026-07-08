import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Detail from './pages/Detail'
import LumiAI from './pages/LumiAI'
import FloatingChat from './components/FloatingChat'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/lumi-ai" element={<LumiAI />} />
      </Routes>
      <FloatingChat />
    </>
  )
}

export default App
