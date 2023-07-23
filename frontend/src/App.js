import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import FacilComponent from './Components/FacilComponent';
import ResultadosComponent from './Components/ResultadosComponent';
import IntermedioComponent from './Components/IntermedioComponent';
import DificilComponent from './Components/DificilComponent';
import NuevaPreguntaComponent from './Components/NuevaPreguntaComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/faciles" element={<FacilComponent />} />
          <Route path="/medias" element={<IntermedioComponent />} />
          <Route path="/dificiles" element={<DificilComponent />} />
          <Route path="/resultados" element={<ResultadosComponent/>} />
          <Route path="/nueva-pregunta" element={<NuevaPreguntaComponent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
