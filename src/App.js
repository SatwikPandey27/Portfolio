import './App.scss';
import React /*, {useState}*/ from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  // const [mode, setMode] = useState('light'); // check whether dark mode is enabled or not

  // const toggleMode = () => {
  //   if (mode === 'dark') {
  //     setMode('light');
  //     document.body.style.color = 'black';
  //     document.body.style.backgroundColor = 'white';
  //   } else {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#2f2f2f';
  //     document.body.style.color = 'white';
  //   }
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
