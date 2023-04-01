import { useEffect } from 'react'
import { countDec, countInc, price, } from '../redux/slice/MealSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"


function Car() {

    const dispatch = useAppDispatch()
    const { car, prices } = useAppSelector(state => state)
    
    useEffect(() => {
        const calculateTotal = car.reduce((acc, item) => {
            return +item.price * item.count + acc

        }, 0)

        dispatch(price(calculateTotal))

    }, [car])


    return (
        <div className='w-full md:mt-16 lg:w-2/5  min-[1200px]:w-2/6  h-full bg-white rounded-xl p-5 '>
            <div className='flex  justify-between items-center border-b-2 pb-3 '>
                <h3 className='text-2xl font-medium'>Корзина </h3>
                <div className=' bg-[#F2F2F3] text-center w-[51px] h-[25px] leading-6  text-[12px] rounded-md'>{car.length}</div>
            </div>
            {car.length

                ?
                <div>
                    <div className='max-h-[250px] overflow-auto py-3 scrollbar '>
                        {car.map((elem) => {
                            const { id, img, price, title, gram, count } = elem
                            return <div key={id} className='flex justify-between border-b-2 py-3 '>
                                <div className='flex items-center gap-2'>
                                    <div><img src={"img/" + img} alt={title} className='w-[64px] h-[52px] rounded-lg' /></div>
                                    <div className='flex flex-col'>
                                        <span>{title}</span>
                                        <span className='text-[#B1B1B1]'>{gram}г</span>
                                        <span>{price}₽</span>
                                    </div>
                                </div>
                                <div className='w-[74px] h-[40px]  flex  justify-evenly items-center bg-[#F2F2F3] rounded-xl'>
                                    <AiOutlineMinus className='cursor-pointer text-[10px]' onClick={() => dispatch(countDec(id))} />
                                    {count}
                                    <AiOutlinePlus className='cursor-pointer text-[10px]' onClick={() => dispatch(countInc(id))} />
                                </div>
                            </div>
                        })}
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <div className='flex justify-between items-center'>
                            <h3 >Итого</h3>
                            <h3 className='font-medium'>{prices}₽</h3>
                        </div>
                        <div>
                            <button className='bg-logo w-full p-3 rounded-xl text-white cursor-pointer'>Оформить заказ</button>
                        </div>
                        <div >
                            <p className='flex items-center gap-3'><img src="img/free-icon-delivery-2362252.png" alt="delivery" /> Бесплатная доставка</p>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <p>Тут пока пусто :(</p>
                </div>
            }

        </div>

    )
}

export default Car