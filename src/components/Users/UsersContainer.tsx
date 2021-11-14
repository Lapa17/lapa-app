import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateDataType, UsersType } from "../../redux/store";
import { followAC, setUsersAC, unFollowAC, UsersActionType } from "../../redux/users-reduser";
import Users from "./Users";

let mapStateProps = (state:StateDataType) => {
    return {
        users: state.users.users
    }
}

let mapDispatchProps = (dispatch:Dispatch<UsersActionType>) => {
    
    return{
        follow: (userID:string) => dispatch(followAC(userID)),
        unFollow: (userID:string) => dispatch(unFollowAC(userID)),
        setUsers: (users:Array<UsersType>) => dispatch(setUsersAC(users))
    }
    

}


const UsersContainer = connect (mapStateProps,mapDispatchProps) (Users);

export default UsersContainer;