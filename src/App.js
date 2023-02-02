import {BrowserRouter as Router,Switch,Route,Link,Routes
} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import Noteslist from './Pages/Noteslist'
import NotePage from './Pages/NotePage';


function App() {
  return (
    <Router>
        <div className='container dark'>
          <div className='app'>
        <Header/>
    <Routes>
      <Route path='/' exact element={<Noteslist/>}/>
      <Route path='/note/:id'  element={<NotePage/>}/>
      <Route path='/body'  element={<Body/>}/>
      {/* <Body/> */}
    </Routes>
    </div>
    </div>
    </Router>


  );
}

export default App;
