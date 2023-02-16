
import AddBrandSalesDailyPage from './AddBrandSalesDailyPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GetBrandSalesDailyPage from './GetBrandSalesDailyPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddBrandSalesDailyPage/>} />
        <Route path="/get-brand-sales-daily" element={<GetBrandSalesDailyPage/>} />
        
      </Routes>  


    </BrowserRouter>
     
    </div>
  );
}

export default App;
