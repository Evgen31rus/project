import {  useState , useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import './App.css';

import BackendObject from './modle';
import ModalFilter from './components/ModalFilter';
import TopMenu from './components/TopMenu';
import BuscketPage from './pages/BuscketPage';
import DeliveryPages from './pages/DeliveryPages'
import LikePage from './pages/LikePage';
import ProductPages from './pages/ProductPages';
import MainPages from './pages/MainPages';
import Footer from './components/Footer';

import { RootState } from './store/store';
import MobileMenu from './components/mobileMenu';
import SwitchTeam from './components/SwitchTeam';
import { HandleSetResultFetch } from './store/sliceRequest';

function App() {

  let dispatch = useDispatch()
  let state = useSelector((state:RootState) => state)





  useEffect(()=>{
    const apiUrl = 'https://evgen31rus.github.io/server-platnik-shop/server.json';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      dispatch(HandleSetResultFetch(allPersons));
    });
  }, [])


  let props:BackendObject[]|undefined =state.resultFetch.value;


  return (
<BrowserRouter>
  <div className={`font-mono w-100% h-100%  `}
   id={`${!state.switchTeamSlice.nightTeam? 'dark-team': 'light-team' }`}
  >
    <ModalFilter/>
    <TopMenu/>
{
  state.resultFetch.value!==undefined?
  <Routes>
  <Route path="project" element={<MainPages product={props}/>}/>
  <Route path="products" element={<ProductPages product={props}/>} />
  <Route path="Delevery" element={<DeliveryPages product={props} />} />
  <Route path="Buscket" element={<BuscketPage />} />
  <Route path="Likes" element={<LikePage  />} />
</Routes>
  :
  <div className='w-[100%] h-[80vh] flex justify-center'
  id={`${!state.switchTeamSlice.nightTeam? 'dark-team': 'light-team' }`}
  >
<div className="spinner">
  <div className="spinner-circle spinner-circle-outer"></div>
  <div className="spinner-circle-off spinner-circle-inner"></div>
  <div className="spinner-circle spinner-circle-single-1"></div>
  <div className="spinner-circle spinner-circle-single-2"></div>
  <div className="text ">...Loading...</div>
</div>
</div>
}



    <SwitchTeam/>

    <Footer/>
    <MobileMenu/>

  </div>
</BrowserRouter>

);
}

export default App;
