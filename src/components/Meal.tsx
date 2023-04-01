import { useEffect } from 'react'
import { addItme, fetchMeal, popupFunc, popupItemAdd } from '../redux/slice/MealSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { AiOutlineClose } from "react-icons/ai"
import { GiHamburger } from "react-icons/gi";
import Car from './Car'

function Meal() {

    const dispatch = useAppDispatch()
    const { mealItems, popup, popupItem, loading } = useAppSelector(state => state)
    const activeCategorie = useAppSelector(state => state.activeCategorie)

    useEffect(() => {
        dispatch(fetchMeal(activeCategorie))
    }, [activeCategorie])


    return (
        <section>
            <div className='w-container my-0 mx-auto flex flex-col  lg:flex-row gap-8 pb-5'>
                <Car />
                {loading

                    ?
                    <div className='w-full lg:w-3/4 my-0 mx-auto '>
                        <h2 className='text-4xl font-semibold'>{activeCategorie}</h2>
                        <div className='grid grid-cols-fluimd  min-[1290px]:grid-cols-fluid gap-8 py-6'>
                            {
                                mealItems.map((elem) => {
                                    const { id, title, price, img, gram } = elem
                                    return <div className='bg-white p-3 rounded-xl cursor-pointer' key={id} >
                                        <div onClick={() => dispatch(popupItemAdd(elem))}>
                                            <img src={"img/" + img} alt={title} className='w-full' />

                                        </div>
                                        <div>
                                            <div className='py-2'>
                                                <h3 className='font-bold'>{price}₽</h3>
                                                <p>{title}</p>
                                            </div>
                                            <div className='flex flex-col gap-3 '>
                                                <span className='text-[#B1B1B1]'>{gram}г</span>
                                                <button className='cursor-ponter bg-[#F2F2F3] rounded-lg py-1 transition-colors  hover:bg-bg' onClick={() => dispatch(addItme(elem))}>Добавить</button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>

                    :
                    <div className='w-3/4  flex items-center justify-center '>
                        
                        <GiHamburger  className='animate-wiggle text-3xl text-bg'/>
                    </div>
                }


            </div>

            {popup && <div className='flex justify-between items-center md:justify-center fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,0.8)]  '>
                {popupItem.map((elem) => {
                    const { id, img, price, title, count } = elem
                    return <div className='bg-white h-full w-full p-5 flex flex-col justify-between  md:h-max  md:w-[700px]  md:rounded-xl ' key={id}>

                        <div className='flex justify-between'>
                            <h3 className='text-2xl font-bold'>{title}</h3>
                            <div className='text-2xl text-[#B1B1B1] cursor-pointer' onClick={() => dispatch(popupFunc())}>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='flex flex-col   md:flex-row gap-5 py-5'>
                            <div>
                                <img src={"img/" + img} alt={title} className='w-[276px] h-[220px] rounded-lg' />
                            </div>
                            <div className='w-[400px]'>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet sed nesciunt esse vel at illum unde provident cumque neque doloribus dolorem quasi, iure, expedita praesentium alias dolores! Mollitia, ex natus?</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:justify-between'>

                            <div>
                                <div className='w-[276px]'>
                                    <button className='w-full cursor-pointer bg-logo p-2 text-white rounded-xl' onClick={() => dispatch(addItme(elem))}>Добавить </button>
                                </div>
                            </div>
                            <div className='self-end'>
                                <p>{price}₽</p>
                            </div>
                        </div>
                    </div>
                })}

            </div>}

        </section>
    )
}

export default Meal