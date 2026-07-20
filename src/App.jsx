import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './routes/Layout';
import Create from './routes/Create';
import Detail from './routes/Detail';
import Edit from './routes/Edit';
import Home from './routes/Home';
import Summary from './routes/Summary';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create/" element={<Create />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="summary/" element={<Summary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;