import { v1 } from "uuid";
import { UsersType } from "../../redux/store";
import s from './Users.module.css'
import * as axios from 'axios'

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userID: string) => void
    unFollow: (userID: string) => void
    setUsers: (users: Array<UsersType>) => void
}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
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
                    <img src='https://2.downloader.disk.yandex.by/preview/c33abbeedf2544813e8e194dd20f17c49c8525bc8a4c13ff54fdcd76e6970467/inf/IQDoTQ9-t0Oyj8Xx04QwfQH0J1DSOU1BptY6p8aNSydwwkexzhJIMwjoKhSTi3zbr8IWPXiHulTJPGfOwk4Wpw%3D%3D?uid=1108277722&filename=lapa-logo.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1108277722&tknv=v2&size=1898x830' />
                    {u.follow ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}

                </div>
                <div className={s.info}>
                    <div>{u.name}</div>
                    <div>{u.city}</div>
                    <div>{u.message}</div>
                    <div>{u.country}</div>

                </div>

            </div>)

        })}
    </div>
    )
}

export default Users;