import {  setActiveCategorie } from '../redux/slice/MealSlice'
import {  useAppDispatch, useAppSelector } from '../redux/store'
import { categories } from '../types/types'

function Categories() {

    const activeCategorie =useAppSelector(state=>state.activeCategorie)
    const dispatch=useAppDispatch()
 
    function handleActive(title: string){
        dispatch(setActiveCategorie(title))
    }



    return (
        <section  >
            <div className='w-container my-0 mx-auto py-9'>
                <ul className='flex  gap-10 justify-between overflow-x-scroll scrollbar '>
                    {categories.map(({ id, title, img }) => {
                        const categorieClass = title === activeCategorie ? "bg-bg " : " bg-white "
                        return <li key={id} className={categorieClass+ ` h-full  py-2 px-7 text-[13px] whitespace-nowrap  rounded-[50px] flex items-center justify-center gap-3 cursor-pointer md:text-[16px] `} onClick={()=>handleActive(title)}>
                            <img src={`img/` + img} alt="title" />
                            {title}
                        </li>
                    })}

                </ul>

            </div>
        </section>
    )
}

export default Categories







