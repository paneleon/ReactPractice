
import './styles/App.css';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Visibility from './pages/Visibility';
import Fetch from './pages/Fetch';
import PropsUpdateParent from './pages/PropsUpdateParent';
import Counter1 from './pages/Counter1';
import Counter2 from './pages/Counter2';
import ListItems from './pages/ListItems';
import Accordion from './pages/Accordion';
import Search from './pages/Search';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Gallery from './pages/Gallery';
import Checklist from './pages/Checklist';
import Login from './pages/Login';
import Requests from './pages/Requests';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/visibility" element={<Visibility/>}/>
        <Route path="/props" element={<PropsUpdateParent/>}/>
        <Route path="/fetch" element={<Fetch/>}/>
        <Route path="/counter1" element={<Counter1/>}/>
        <Route path="/counter2" element={<Counter2/>}/>
        <Route path="/listItems" element={<ListItems/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/accordion" element={<Accordion/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/checklist" element={<Checklist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/requests" element={<Requests/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
