import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './Pages/Home'

//components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
              />
          </Routes>


        </div>
      </BrowserRouter>     
    </div>
  );
}

export default App;
