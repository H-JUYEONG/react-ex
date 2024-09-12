import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ex00 from './views/Ex00';
import Ex01 from './views/Ex01';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/ex01' element={<Ex01 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
