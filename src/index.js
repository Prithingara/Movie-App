import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
//import App from './App.js';
// import reportWebVitals from './reportWebVitals'; 
//import Register from './Register.js'
//import Home from './Home.js'
//import Movie from './Movie.js'
//import  './AddMovie.css';
//import counter from './Counter.js'
import MovieList from './MovieList.js';
//import AddMovie from './AddMovie.css'
//import AddMovie from './AddMovie.js'

function movie()
{
   return(
    <MovieList/>
   )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<MovieList/>);




/*
// import logo from './logo.svg';
import './App.css';
import AddMovie from './component/AddMovie';
import Register from './component/Register';
import Login from './component/Login.js'
import { Route,Routes } from 'react-router-dom';
// import Topbar from './component/Topbar.js';
import Portal from './component/Portal.js';
import Home from './component/Home.js';
import Notfound from './component/Notfound.js';
import Movie from './component/Movie.js';
import MovieList from './component/MovieList.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper'

function App() {
  const [mode,setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline />
      <main>This app is using the dark mode</main> 
    <Paper style={{ minHeight:'100vh' ,borderRadius:'0%'}} elevation={9}>
    <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/register" element={<Register/>} />
    <Route path="/portal" element={<Portal mode={mode} setMode={setMode} />} >
    <Route path="home" element={<Home/>} />
      <Route path="movielist" element={<MovieList/>} />
      <Route path="movie" element={<Movie/>} />
      <Route path="addmovie" element={<AddMovie/>} />
    </Route>
    <Route path="*" element={<Notfound/>} />
    
    </Routes> </Paper>
    </ThemeProvider>
    
    </>
    
  );
}

export default App;
*/