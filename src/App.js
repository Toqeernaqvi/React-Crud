import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />}> </Route>
          <Route path="/read" element={<Read />}> </Route>
          <Route path="/update" element={<Update />}> </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
