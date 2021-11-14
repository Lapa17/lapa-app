import { connect } from "react-redux";
import { Dispatch } from "redux";
import { StateDataType, UsersType } from "../../redux/store";
import { followAC, setUsersAC, unFollowAC, UsersActionType } from "../../redux/users-reduser";
import Users, { NewUsersType } from "./Users";

let mapStateProps = (state:StateDataType) => {
    return {
        users: state.users.users
    }
}

let mapDispatchProps = (dispatch:Dispatch<UsersActionType>) => {
    
    return{
        follow: (userID:number) => dispatch(followAC(userID)),
        unFollow: (userID:number) => dispatch(unFollowAC(userID)),
        setUsers: (users:Array<NewUsersType>) => dispatch(setUsersAC(users))
    }
    

}


const UsersContainer = connect (mapStateProps,mapDispatchProps) (Users);

export default UsersContainer;