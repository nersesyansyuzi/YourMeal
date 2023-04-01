import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ItemMeal, MealInitialStore } from "../../types/types";




export const fetchMeal = createAsyncThunk<ItemMeal[], string>(
    "mealSlice/fetchMeal",
    async function (type) {
        const respons = await fetch(`https://641f2326ad55ae01ccb7386d.mockapi.io/meal?category=${type}`);
        const data = await respons.json()
        return data
    }

)



const initialState: MealInitialStore = {
    mealItems: [],
    car: [],
    prices: 0,
    popup: false,
    loading: false,
    popupItem: [],
    activeCategorie: "Бургеры",

}

const mealSlice = createSlice({
    initialState,
    name: "mealSlice",
    reducers: {
        setActiveCategorie(state, { payload }: PayloadAction<string>) {
            state.activeCategorie = payload
        },
        addItme(state, { payload }: PayloadAction<ItemMeal>) {
            state.popup = false
            let includes = state.car.find((elem) => elem.id == payload.id)

            if (includes) {
                includes.count = includes.count + 1
            }
            else {
                const newItem = {
                    ...payload,
                    count: 1,
                }
                state.car.push(newItem)

            }

        },
        countInc(state, { payload }: PayloadAction<string>) {
            const item = state.car.find((elem) => elem.id == payload)!
            item.count = item.count + 1
        },
        countDec(state, { payload }: PayloadAction<string>) {
            const item = state.car.find((elem) => elem.id == payload)!
            item.count = item.count - 1
            state.car = state.car.filter((elem) => elem.count > 0)
        },
        price(state, { payload }: PayloadAction<number>) {
            state.prices = payload
        },
        popupFunc(state) {
            state.popup = !state.popup
        },
        popupItemAdd(state, { payload }: PayloadAction<ItemMeal>) {
            
            state.popupItem=[payload]
            state.popup = true
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeal.pending, (state) => {
                state.loading = false
            })
            .addCase(fetchMeal.fulfilled, (state, action) => {
                state.mealItems = action.payload
                state.loading = true
               
               
            })
         
    }
})



export const { setActiveCategorie, addItme, price, countInc, countDec, popupFunc, popupItemAdd } = mealSlice.actions
export default mealSlice.reducer