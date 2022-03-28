import { Dispatch } from "redux";
import { AuthActionType, authMe } from "./auth-reducer";
import {ThunkType} from "./redux-store";

const SET_INITIALIZED = 'lapa-app/app-reducer/SET_INITIALIZED'



export type AppActionType = SetInitializedActionType | AuthActionType

export type SetInitializedActionType = ReturnType<typeof setInitialized>



export const setInitialized = (initialized:boolean)=> ({ type: SET_INITIALIZED, initialized } as const)



const initialAppState = {
    initialized: false
}

export const appReduser = (state = initialAppState, action: AppActionType) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return { ...state, initialized:action.initialized}
        }
        default:
            return state;
    }
}

export const initializedTC = ():ThunkType => {
    return (dispatch: Dispatch) => {
        //@ts-ignore
      const promise = dispatch(authMe())
      promise.then(()=>{
        dispatch(setInitialized(true))
      })

    }
}

