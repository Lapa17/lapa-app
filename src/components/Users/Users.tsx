import { v1 } from "uuid";
import { UsersType } from "../../redux/store";
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React from "react";


export interface Items {
    items: Array<NewUsersType>
}

export type NewUsersType = {
    id: number;
    name: string;
    photos: PhotosType
    uniqueUrlName: string
    status: string
    followed: boolean
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

class UsersC extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.default.get<Items>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        return (<div>
            {this.props.users.map(u => {
                return (<div className={s.wrapper}>
                    <div className={s.items}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        {u.followed
                            ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
}

export default UsersC;