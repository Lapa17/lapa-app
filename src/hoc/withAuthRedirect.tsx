import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { StateDataType } from "../redux/store"


let mapStateWithAuthProps = (state:StateDataType) => {
    return {
      isAuth: state.auth.isAuth
    }
  }

export let withAuthRedirect = (Component:any) => {

    let wiathAuthContainer  = (props:any)=> {
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
      }

    return  connect(mapStateWithAuthProps)(wiathAuthContainer);
}