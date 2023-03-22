import { SearchBar } from './components/SearcBar';
import { SwapiApiProvider } from './contexts/SwapiApiContext';
import "react-toastify/dist/ReactToastify.css";
import { Box } from './components/Box';

function App() {
  return (
    <div className="App">
      <SwapiApiProvider>
        <Box remHeight={20} remWidth={8}></Box>
        <SearchBar />
      </SwapiApiProvider>
    </div>
  )
}

export default App
