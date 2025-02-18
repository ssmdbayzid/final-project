import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {RootState} from "@/store/store";


// Define a type for the slice state
interface CounterState {
    value: number
}
 const loadCartFromLocalStorage = ()=>{
    if(typeof window !== 'undefined'){
         const storedCart = localStorage.getItem('counter')
        return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
 }

// Define the initial state using that type
const initialState: CounterState = {
    value:  loadCartFromLocalStorage(),
}

export const counterSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            localStorage.setItem('counter', JSON.stringify(state.value))
        },
        decrement: (state) => {
            state.value -= 1
            localStorage.setItem('counter', JSON.stringify(state.value))
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart.value

export default counterSlice.reducer