import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { Home , UmrahPrograms , Hotel} from './assets/Pages'
import { Header , Footer} from './assets/Sections';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    
      <Router>
         <Header/>
             <Routes>
                <Route path='/' element={<Home/>}/>           
                <Route path='/Programs/:id' element={<UmrahPrograms/> }/>   
                <Route path='Hotel/:id' element={<Hotel/>} />            
            </Routes>
          <Footer/>
       </Router> 
    </>
  )
}

export default App
