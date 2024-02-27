import { HandleswitchMobileMenu } from "../store/sliceSwitchMobileMenu"
import {  useSelector, useDispatch } from 'react-redux'
import { RootState } from "../store/store"
import { NavLink } from "react-router-dom"


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
<div className=' flex pl-5 border-b-4 w-[90%] mb-2 pb-2 ml-2'>

<a href="Sign_in" className="w-[45px] h-[45px] bg-white rounded-full mr-1
max-sm:absolute max-sm:top-2 max-sm:right-2
"
id={`box-shadow`}
></a>
Мой профиль



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
</div>
        </>
    )
}