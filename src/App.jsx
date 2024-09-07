import NavBar from './NavBar.jsx';
import MainEle from './MainEle.jsx';
import {Routes , Route} from 'react-router-dom';
export default function App(){
  return(
    <div className="bg-gradient-to-r from-purple-950 to-blue-950 text-white p-2 font-mono font-extrabold">
      <NavBar />
      <Routes>
    <Route path="" element={<MainEle />} />
      </Routes>
    </div>
  )
}