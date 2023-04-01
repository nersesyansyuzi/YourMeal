
function Footer() {
  return (
    <footer className=' bg-white'>
        <div className='w-container my-0 mx-auto py-9 flex flex-col md:justify-between md:flex-row' >
           <div className='text-logo text-3xl font-black   '>
              <h2  className='flex items-center gap-2'>YourMeal <img src="img/free-icon-kitchen-utensil-4790616 1.png" alt="logo" /></h2>
           </div>
           <div >
              <div >
                 <h4 className='text-2xl pb-5 '>Номер для заказа</h4>
                 <p className='flex gap-2 items-center'> <img src="img/Vector.png" alt="tele"  className='w-[10px] h-[10px]  md:w-[15px] md:h-[15px]'/> +374 (93) 22-53-39</p>
              </div>
              
           </div>
        </div>
    </footer>
  )
}

export default Footer