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
          <Route path='character/:index' element={<CharacterInfo />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </SwApiProvider>
    </div>
  )
}

export default App
