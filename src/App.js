import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ex00 from './views/Ex00';
import Ex01 from './views/Ex01';
import Ex02 from './views/Ex02';
import Ex03 from './views/Ex03';
import Ex04 from './views/Ex04';
import Ex05 from './views/Ex05';
import Ex06 from './views/Ex06';
import Ex07 from './views/Ex07';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/ex00' element={<Ex00 />} />
          <Route path='/ex01' element={<Ex01 />} />
          <Route path='/ex02' element={<Ex02 />} />
          <Route path='/ex03' element={<Ex03 />} />
          <Route path='/ex04' element={<Ex04 />} />
          <Route path='/ex05' element={<Ex05 />} />
          <Route path='/ex06' element={<Ex06 />} />
          <Route path='/ex07' element={<Ex07 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
