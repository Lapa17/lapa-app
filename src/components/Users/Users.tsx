import { v1 } from "uuid";
import { UsersType } from "../../redux/store";
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'


export interface Items {
    items: Array<NewUsersType>
}

export type NewUsersType = {
    id: number;
    name: string;
    photos:PhotosType
    uniqueUrlName:string 
    status: string 
    followed:boolean
}

type PhotosType = {
    small: string 
    large: string 
}

type UsersPropsType = {
    users: Array<NewUsersType>
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<NewUsersType>) => void
}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {

    axios.default.get<Items>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
    })
}
    
    // {
    //     props.setUsers([{ id: v1(), name: "Pashka", message: 'Hi', country: 'Belarus', city: 'Minsk', follow: true },
    //     { id: v1(), name: "Leha", message: 'Hello', country: 'Belarus', city: 'Minsk', follow: true },
    //     { id: v1(), name: "Maks", message: 'Bonjur', country: 'Belarus', city: 'Minsk', follow: false },
    //     { id: v1(), name: "Vlad", message: 'Aloha', country: 'Belarus', city: 'Minsk', follow: false }])
    // }

    return (<div>
        {props.users.map(u => {
            return (<div className={s.wrapper}>
                <div className={s.items}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    {u.followed ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}

                </div>
                <div className={s.info}>
                    <div>{u.name}</div>
                    <div>{"u.city"}</div>
                    <div>{"u.status"}</div>
                    <div>{"u.country"}</div>

                </div>

            </div>)

        })}
    </div>
    )
}

export default Users;