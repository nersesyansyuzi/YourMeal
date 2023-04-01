

function Header() {
   
    return (
        <header className=' w-full bg-bg h-full ' >
        
             <h2 className='text-2xl text-white w-max my-0 mx-auto py-5 flex gap-2 font-black'>YourMeal <img src="img/Group.png" alt="logo" /> </h2>
            <div className=' w-container items-center  my-0 mx-auto flex flex-col justify-center gap-5 py-8  2xl:w-2/4 md:flex-row md:gap-10' >
                <div>
                    <img src="img/logo.png" alt="logo"  className='max-w-full max-h-full' />
                </div>
                <div className='flex flex-col justify-between   text-white text-center md:text-start  md:h-25  '>
                    <h1 className='text-3xl   md:leading-normal  md:text-5xl '>Только самые <br /> <span className='text-title'> сочные бургеры!</span></h1>
                     <p className='pt-2'>Бесплатная доставка от 599₽</p>
                </div>
            </div>
        </header>
    )
}

export default Header