import { connect } from "react-redux";
import { StateDataType, UsersActionType, UsersType } from "../../redux/store";
import { followActionCreator, setUsersAC, unFollowActionCreator } from "../../redux/users-reduser";
import Users from "./Users";

let mapStateProps = (state:StateDataType) => {
    return {
        users: state.users.users

    }
}

let mapDispatchProps = (dispatch:(action:UsersActionType) => void) => {
    

    return{
        follow: (userID:string) => dispatch(followActionCreator(userID)),
        unFollow: (userID:string) => dispatch(unFollowActionCreator(userID)),
        setUsers: (users:Array<UsersType>) => dispatch(setUsersAC(users))
    }
    
    

}



const UsersContainer = connect (mapStateProps,mapDispatchProps) (Users);

export default UsersContainer;