import ButtonMain from "../components/ButtonMain";

export default function Authorization(){
    return(
        <>
        <div className={`flex justify-center w-[90%] max-w-[1200px] h-[500px] relative m-auto `}>

            <div className={` absolute flex rounded w-[60%] h-[300px] top-[20%] bg-black p-2
            sm:w-[90%] sm:h-[70%]
            `}
            id={`box-shadow`}
            >
                <div className={`flex flex-col`}>
<h2 className={` text-3xl text-center sm:hidden`}>Авторизация</h2>
<p className={`text-white pl-5 mt-5 text-center sm:hidden`}>Нет аккаунта? Создайте его прямо сейчас и получите кэшбэк 10% ! </p>
<div className={`flex justify-center ml-5 mt-5 w-[100%] sm:hidden`}>
<ButtonMain TextNotActive={`Регистрация`} width={40} color={`white`}/>
<br />
</div>

</div>
<div className={`flex flex-col text-white items-center  w-[80%]`}>

<div className={`flex flex-col ml-5 w-[80%] sm:w-[100%] `}>
<p className={`mb-2 w-[120%] text-center sm:text-xs`}>Ваш логин</p>
<input type="e-mail" 
placeholder={`Введите ваш логин...`}
className={`w-[100%] h-[40px] ml-5 rounded p-4 sm:text-xs`} />
</div>

<div className={`flex flex-col ml-5 w-[80%] sm:w-[100%] mt-5`}>
<p className={`mb-2 w-[120%] text-center sm:text-xs`}>Ваш пароль</p>
<input type="password" placeholder={`Введите ваш пароль...`} className={`w-[100%] h-[40px] ml-5 rounded p-4 sm:text-xs`} />
</div>
<div className={`flex justify-center ml-5 mt-2 w-[100%] items-center h-[50px]`}>
<input type="checkbox" className={`ml-5`}/> <p className={`text-xs pl-2 sm:text-[0.7rem]`}>Запомнить пароль для этого браузера? </p>
</div>
<a href='#' className={`text-xs pl-2 text-pink-500 mt-2 ml-5`}>Заабыли пароль? </a>
<div className={` w-[60%]  ml-10 mt-2 `}>
<ButtonMain TextNotActive={`Войти`} width={100}/>
</div>
</div>

        </div>
  
        </div>
        </>
    )
}