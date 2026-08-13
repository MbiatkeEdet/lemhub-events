import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LiveChat from './components/LiveChat'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-ink">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer onOpenChat={() => setChatOpen(true)} />
        <LiveChat open={chatOpen} onChangeOpen={setChatOpen} />
      </div>
    </BrowserRouter>
  )
}
