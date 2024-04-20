import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{ value: 0 },
    reducers:{
        increment:(state)=>{
            state.value++
        },
        decrement:(state)=>{
            state.value--
        }
    }
})

const counterStore = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

export const counterAction = counterSlice.actions;
export default counterStore
