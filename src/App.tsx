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
import SpinerPagesLoading from './components/SpinerPagesLoading';
import IBackendObject from './modle';
import { HandleAddInishialStateFetch } from './store/sliceRequest';
import ButtonMain from './components/ButtonMain';
import Authorization from './pages/Authorization';

function App() {

  let dispatch = useDispatch()
  let state = useSelector((state:RootState) => state)
  const props:IBackendObject[]|undefined = state.resultFetch.value




  useEffect(()=>{
    const apiUrl = 'https://evgen31rus.github.io/server-platnik-shop/server.json';
    axios.get(apiUrl).then((resp) => {
      const allProducts:IBackendObject[]|undefined = resp.data;
      dispatch(HandleAddInishialStateFetch(allProducts))
      dispatch(HandleSetResultFetch(allProducts));
      console.log(state.resultFetch.value)
    });
  }, [])

  const productCategory=()=>{
    let arr:string[] = []
  if(state.resultFetch.inishialValue){
    state.resultFetch.inishialValue.map(product =>
      {
      arr.push(product.category)
      if(arr.filter(el => el === product.category).length>1){
        arr.pop()
      }
    }
      )
  }
  return arr
  }


  return (
<BrowserRouter>
  <div className={`font-mono w-100% h-100%  `}
   id={`${!state.switchTeamSlice.nightTeam? 'dark-team': 'light-team' }`}
  >
  <ModalFilter 
  buttonCategory={productCategory().map(el =><ButtonMain TextNotActive={el} isClickProps={true}/>)} 
  buttonСonfirmation={<ButtonMain TextNotActive={'Применить'} width={50}/>}/> 
    <TopMenu/>
{
  state.resultFetch.value!==undefined?
  <Routes>
  <Route path="project" element={<MainPages product={props}/>}/>
  <Route path="products" element={<ProductPages product={props}/>} />
  <Route path="Delevery" element={<DeliveryPages product={props} />} />
  <Route path="Buscket" element={<BuscketPage />} />
  <Route path="Likes" element={<LikePage  />} />
  <Route path='Sign_in' element={<Authorization/>}/>
</Routes>
  :
  <SpinerPagesLoading/>
}
    <SwitchTeam/>

    <Footer/>

    <MobileMenu/>

  </div>
</BrowserRouter>

);
}

export default App;
