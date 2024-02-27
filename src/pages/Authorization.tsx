import ButtonMain from "../components/ButtonMain";

export default function Authorization(){
    return(
        <>
        <div className={`flex justify-center w-[90%] max-w-[1200px] h-[500px] relative m-auto `}>

            <div className={` absolute flex rounded w-[60%] h-[300px] top-[20%] bg-black p-2`}>
                <div className={`flex flex-col`}>
<h2 className={` text-3xl text-center`}>Авторизация</h2>
<p className={`text-white pl-5 mt-5 text-center`}>Нет аккаунта? Создайте его прямо сейчас и получите кэшбэк 10% ! </p>
<div className={`flex justify-center ml-5 mt-5 w-[100%]`}>
<ButtonMain TextNotActive={`Регистрация`} width={40} color={`#FFFFFF`}/>
<br />
</div>

</div>
<div className={`flex flex-col text-white items-center  w-[80%]`}>

<div className={`w-[80%] `}>
<p className={`mb-2 text-center`}>Ваш логин</p>
<input type="e-mail" 
placeholder={`Введите ваш логин...`}
className={`w-[100%] h-[40px] ml-5 rounded p-4`} />
</div>

<div className={`w-[80%] mt-5`}>
<p className={`mb-2 text-center `}>Ваш пароль</p>
<input type="password" placeholder={`Введите ваш пароль...`} className={`w-[100%] h-[40px] ml-5 rounded p-4`} />
</div>
<div className={`flex justify-center ml-5 mt-2 w-[100%] items-center `}>
<input type="checkbox" className={`ml-5`}/> <p className={`text-xs pl-2`}>Запомнить пароль для этого браузера? </p>
</div>
<a href='#' className={`text-xs pl-2 text-pink-500 mt-2`}>Заабыли пароль? </a>
<div className={` w-[60%]  ml-5 mt-2`}>
<ButtonMain TextNotActive={`Войти`} width={100}/>
</div>
</div>

        </div>
  
        </div>
        </>
    )
}