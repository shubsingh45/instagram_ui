import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    currentUser : '',
    error: '',
    loading: false
}

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        SignInStart:(state) =>{
            state.loading =true
            state.error = null
        },
        SignInSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        SignInFailure: (state, action) => {
            state.loading = false
            state.error = null
        },
        SignUpInStart: (state) => {
            state.loading = true
            state.error = null
        },
        SignUpSuccess : (state, action) => {
          state.currentUser = action.payload
          state.loading  = false
          state.error = false
        },
        SignUpFailure: ( state)=>{
            state.loading(false)
            state.error = null
        },
        SignOutStart : (state) => {
                state.loading = true
                state.error = null
        },
        SignOutSuccess: (state) =>{
            state.currentUser = null
            state.loading = false
            state.error = null
        }
    }

})

export const {SignInStart, SignInFailure, SignInSuccess, SignUpInStart,
    SignUpSuccess, SignUpFailure, SignOutStart, SignOutSuccess
}
 = UserSlice.actions

 export default UserSlice.reducer