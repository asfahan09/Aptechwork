import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import {BrowserRouter, Route, Routes} from 'react-router-dom' ;
import ShowData from './component/ShowData';

function App() {
  return (
  <BrowserRouter>

    <div className="App">
  
 <Routes>
<Route path='/' element={<Form/>}/>
<Route path='/Read' element={<ShowData/>}/>

  </Routes>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
