import { Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import AddContact from './Pages/AddContact';
import UpdateContact from './Pages/UpdateContact';
import ViewContact from './Pages/ViewContact';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#171717', color: 'white' }}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-contact' element={<AddContact />} />
        <Route path='/update-contact/:id' element={<UpdateContact />} />
        <Route path='/view-contact/:id' element={<ViewContact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
