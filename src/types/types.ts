export interface CategoriesType{
    id:number,
    img:string,
    title:string,
}

export interface ItemMeal{
    id:string,
    title:string,
    price:string,
    img:string,
    gram:string,
    count:number
}

export interface MealInitialStore{
    mealItems:ItemMeal[],
    car:ItemMeal[],
    prices:number,
    popup:boolean,
    loading:boolean,
    
    popupItem:ItemMeal[],
    activeCategorie:string,
   
}



export const categories:CategoriesType[]=[
    {
        id:0,
        title:"Бургеры",
        img:"free-icon-cheeseburger-2362255.png"
    },
    {
        id:1,
        title:"Закуски",
        img:"free-icon-onion-2362361.png"
    },
    {
        id:2,
        title:"Хот-доги",
        img:"free-icon-hotdog-sandwich-2362313.png"
    },
    {
        id:3,
        title:"Комбо",
        img:"free-icon-fast-food-2362274.png"
    },
    {
        id:4,
        title:"Шаурма",
        img:"free-icon-burrito-2362225.png"
    },
    {
        id:8,
        title:"Пицаа",
        img:"free-icon-pizza-2362372.png"
    },
    {
        id:5,
        title:"Вок",
        img:"free-icon-noodles-2362350.png"
    },
    {
        id:6,
        title:"Десерты",
        img:"free-icon-doughnut-2362260.png"
    },
]