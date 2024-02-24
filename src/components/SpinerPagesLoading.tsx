import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export default function SpinerPagesLoading(){
   const state = useSelector((state:RootState) => state)
    return(
        <>
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
        </>
    )
}