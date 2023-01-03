import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='wvh/' element={<Home />} />
        <Route path="wvh/about/" element={<About />} />
        <Route path="wvh/contact/" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App