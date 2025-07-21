import { Routes, Route, Form } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Darkmode from './components/Darkmode'
import Sidebar from './components/Sidebar'
import SimpleForm from './components/SimpleForm'
import Counter from './components/counter'
import SearchFilter from './components/SearchFilter'
import ToDo from './components/ToDo'
import DigitalClock from './components/DigitalClock'
import Calculator from './components/Calcilator'
import Stopwatch from './components/Stopwatch'

function App() {
  return (
    <div className='flex'>
      <div className='w-1/4 bg-slate-800 h-screen text-white'>
        <Sidebar />
      </div>
      <div className='bg-slate-700 w-2/2 h-screen text-white'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/darkmode' element={<Darkmode />} />
          <Route path='/form' element={<SimpleForm/>}/>
          <Route path='/count' element={<Counter/>}/>
          <Route path='/search' element={<SearchFilter/>}/>
          <Route path='/todo' element={<ToDo/>}/>
          <Route path='/digital' element={<DigitalClock/>}/>
          <Route path='/cals' element={<Calculator/>}/>
          <Route path='watch' element={<Stopwatch/>}/>
        </Routes>
      </div>

    </div>
  )
}

export default App
