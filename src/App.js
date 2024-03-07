import React , {useState ,useEffect} from "react"
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Header from './components/Header';
import Create from "./components/Create";
import Fallback from "./components/Fallback";
import AllBoard from "./components/AllBoard";
import MovieBoard from "./components/MovieBoard";
import MusicBoard from "./components/MusicBoard";
import ScienceBoard from "./components/ScienceBoard";
import SportsBoard from "./components/SportsBoard";

import "./styles/Main.css"

function App() {
  const [data , setData] = useState([])

  useEffect(() => {
    localStorage.removeItem("debug")
    const bufferData = []
    const data = {...localStorage}
    for (let key in data)
    {
      const requiredData = JSON.parse(data[key])
      bufferData.push(requiredData)
    }
    setData(bufferData)
  },[])

  function handleNewData(newData)
  {
    const bufferData = data
    bufferData.push(newData) 
    setData(bufferData)
    
    localStorage.setItem(newData.time ,JSON.stringify(newData))
  }

  return (
    <div className="App">
     <Header/>
        <Routes>
          <Route path="/" element = {<AllBoard data = {data} />} />
          <Route path="/all" element = {<AllBoard data = {data} />} />
          <Route path="/music" element = {<MusicBoard data = {data} />} />
          <Route path="/movie" element = {<MovieBoard data = {data} />} />
          <Route path="/sports" element = {<SportsBoard data = {data} />} />
          <Route path="/science" element = {<ScienceBoard data = {data}/>} />
          <Route path="/create" element = {<Create handleNewData = {handleNewData}/>} />
         <Route path="*" element ={<Fallback/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
