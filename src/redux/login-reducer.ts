const SET_LOGIN = 'lapa-app/login-reducer/SET_LOGIN'


export type LoginActionType = ReturnType<typeof setLoginData>
export type LoginType = {
    data: {
        login: string,
        password: string
    }
}

const initialProfileState = {
    data: {
        login:'',
        password:'',
    }
    
}

export const setLoginData = (data: {login:string, password:string}) => ({ type: SET_LOGIN, data} as const)

export const loginReducer = (state:LoginType  = initialProfileState, action:LoginActionType ) => {
    switch (action.type) {
        case SET_LOGIN: {
            return { ...state, data:action.data}
        }
        default:
            return state;
    }
}


