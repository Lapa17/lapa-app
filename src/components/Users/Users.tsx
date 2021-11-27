import { v1 } from "uuid";
import { UsersType } from "../../redux/store";
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from './../../assets/images/user.png'
import React from "react";


export interface Items {
    items: Array<NewUsersType>
    totalCount:number
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
    pageSize:number
    totalUserCounter:number
    currentPage:number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<NewUsersType>) => void
    setCurrentPage:(currentPage:number)=> void
    setTotalUsersCount:(totalCount:number)=>void
}

class UsersC extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.default.get<Items>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageClick =(currentPage:number) =>{
        this.props.setCurrentPage(currentPage)
        axios.default.get<Items>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUserCounter/100/this.props.pageSize)
        let pages = []
        for(let i=1; i<=pagesCount;i++){
            pages.push(i)
        }
        

        return (<div>
            {pages.map(p=>{
               return <span className={this.props.currentPage===p ? s.selected : ''} onClick={() => this.onPageClick(p)}>{p}</span>
            })}
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