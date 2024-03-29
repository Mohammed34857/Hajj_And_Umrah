import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { Home } from './assets/Pages/Home'
import { Header , Footer} from './assets/Sections';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    
      <Router>
         <Header/>
             <Routes>
                <Route path='/' element={<Home/>}/>           
             </Routes>
          <Footer/>
       </Router> 
    </>
  )
}

export default App
