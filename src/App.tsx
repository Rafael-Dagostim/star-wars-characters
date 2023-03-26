import { SwApiProvider } from './contexts/SwApiContext';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CharacterInfo } from './pages/CharacterInfo';

import './fonts.css'

function App() {
  return (
    <div className="App">
      <SwApiProvider>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='character/:slug' element={<CharacterInfo />} />
        </Routes>
      </SwApiProvider>
    </div>
  )
}

export default App
