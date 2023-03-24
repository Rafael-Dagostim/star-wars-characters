import { SwapiApiProvider } from './contexts/SwapiApiContext';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, RoutesProps } from 'react-router-dom';
import { Home } from './pages/Home';
import { CharacterInfo } from './pages/CharacterInfo';
import { NotFound } from './pages/NotFound';

import './fonts.css'

function App() {
  return (
    <div className="App">
      <SwapiApiProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='character/:index' element={<CharacterInfo />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </SwapiApiProvider>
    </div>
  )
}

export default App
