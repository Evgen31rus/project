import { HandleswitchMobileMenu } from "../store/sliceSwitchMobileMenu"
import {  useSelector, useDispatch } from 'react-redux'
import { RootState } from "../store/store"
import { NavLink } from "react-router-dom"
import SwitchTeam from "./SwitchTeam"


export default function MobileMenu(){
    let dispatch = useDispatch()
    let state = useSelector((state:RootState) => state)
    let switchMobuleMenu = state.switchMobileMenu.switch

    return(
        <>
      <div
className={`hidden flex-col w-[60%] h-[100%] bg-[#586784] fixed top-[0%] z-50 transition-all  text-2xl font-black
${
  switchMobuleMenu?
  'flex ': 'flex translate-x-[-100%]'
}
sm:flex
`}
>

<div className={`flex border-b-4 w-[100%] `}>

<div className=' flex w-[45px] h-[45px] bg-white rounded-full mb-2 ml-2 mt-2 mr-2'
id={`box-shadow`}
></div>

<NavLink to="Sign_in" className=" flex items-center"
onClick={()=>{
  dispatch(HandleswitchMobileMenu())}}
>

Мой профиль
</NavLink>

</div>



  <div className='flex flex-col  w-[100%] translate-x-[20%] '>
<NavLink
to='project'
onClick={()=>{
dispatch(HandleswitchMobileMenu())}}
className={`cusor-pointer z-10 `}>
Главная</NavLink>

<NavLink
to='Products' 
onClick={()=>{
  dispatch(HandleswitchMobileMenu())
}}
className={`cusor-pointer z-10 `}
>Товары</NavLink>

<NavLink
to='Delevery'
onClick={()=>{
  dispatch(HandleswitchMobileMenu())
}}
className={`cusor-pointer z-10 `}
>Доставка</NavLink>

</div>
<div className={`ml-5 mt-5`}>
<SwitchTeam visibilityMobile={true} />
</div>

</div>
        </>
    )
}