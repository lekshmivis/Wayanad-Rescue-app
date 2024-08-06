import logo from './logo.svg';
import './App.css';
import AddMissingPeople from './components/AddMissingPeople';
import SearchMissingPeople from './components/SearchMissingPeople';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path ='/' element={<AddMissingPeople/>}/>
<Route path='/SearchMissingPeople' element={<SearchMissingPeople/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
