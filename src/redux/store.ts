import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./slice/MealSlice";
import { useDispatch,useSelector,TypedUseSelectorHook} from "react-redux";

 const store=configureStore({
    reducer:mealSlice
})

export default store;

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;

export const useAppDispatch=()=>useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector

