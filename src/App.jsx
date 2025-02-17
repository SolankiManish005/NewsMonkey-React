import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import process from 'process';
window.process = process;

const App = () => {
  const pageSize = 15;
  // const apiKey = process.env.VITE_APP_NEWS_API;
  const apiKey = import.meta.env.VITE_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
    return (
      <>      
        <div>
        <BrowserRouter>
              <NavBar/>
              <LoadingBar
                color="#f11946"
                height={3}
                progress={progress}
              />
              <Routes>
                  <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="us" category="general"/>}/>
                  <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country="us" category="business"/>}/>
                  <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}/>
                  <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country="us" category="general"/>}/>
                  <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country="us" category="health"/>}/>
                  <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country="us" category="science"/>}/>
                  <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country="us" category="sports"/>}/>
                  <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country="us" category="technology"/>}/>
              </Routes>
        </BrowserRouter>
        </div>
      </>
    )
}

export default App
