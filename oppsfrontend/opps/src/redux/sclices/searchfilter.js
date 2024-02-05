import { createSlice } from "@reduxjs/toolkit";




const searchfilterslice = createSlice({
    name:"searchfilter",
    initialState:{
        filter:"ALL"
    },
    reducers:{
        setfilter(state, action){
            state.filter = action.payload
        }
    }

})

export const {setfilter} = searchfilterslice.actions
export default searchfilterslice.reducer