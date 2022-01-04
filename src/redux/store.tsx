import { v1 } from "uuid"
import { NewUsersType } from "../components/Users/Users"
import { AuthDataType } from "./auth-reduser"

import  dialogsReduser  from "./dialogs-reduser"
import {APIProfileType }  from "./profile-reduser"


export type ReduxStoreType ={
  store: ReduxStoreDataType;
}

export type ReduxStoreDataType = {
  getState:() => StateDataType
  // subscribe: (observer: (state: StateDataType)=>void) => void
  // _renderAll: (state: StateDataType) => void
  dispatch: (action:ActionType) => void

}


// export type StoreType = {
//   store: StoreDataType;
 
// }

// export type StoreDataType = {
//   _state: StateDataType
//   getState:() => StateDataType
//   getPosts:() => Array<PostsDataType>
//   getFriends:() => Array<DialogsDataType>
//   getDialogs:() => Array<DialogsDataType>
//   getNewPostText:() =>  string
//   getMyPostText:() =>  string
//   getProfileTextareaData: ()=> string
//   getMessageTextareaData:()=> string
//   getMessages:() =>  Array<MessagesDataType>
//   subscribe: (observer: (state: StateDataType)=>void) => void
//   _renderAll: (state: StateDataType) => void
//   dispatch: (action:ActionType) => void

// }

export type StateDataType = {
  dialogsPage: DialogsType
  profilePage: PostType
  navbarRight: NavbarRightType
  users:UsersStateType
  auth:AuthDataType
}



export type ActionType = {
  type: string
  value:string 
}

export type NavbarRightType = {
  friends: Array<DialogsDataType>
}
export type PostMessageType = {
  dialogs: Array<DialogsDataType>
  messages: Array<MessagesDataType>
  messagetTextareaData: string
  addMessage: ()=> void
  textareaChange:(text:string)=> void

}

export type DialogsType = {
  messageTextareaData:string
  dialogs: Array<DialogsDataType>
  messages: Array<MessagesDataType>
}

export type DialogsDataType = {
  id: string;
  name: string;
}

export type MessagesDataType = {
  id: string;
  message: string;
}

export type PostType = {
  myPost: string;
  newPost: string;
  posts: Array<PostsDataType>
  profileTextareaData:string
  profile:APIProfileType
}

export type PostsDataType = {
  id: string
  postMessage: string
  likes: number
}

export type PostMesageType = {
  message: string;
  likes: number
  id: string
}

export type TextAreaDataType = {
  array: Array<TextAreaArrayDataType>
}

export type TextAreaArrayDataType = {
  value: string
}

export type NavigationType = {
  menu: string;
  link: string;
}

export type WidgetsType = {
  src: string
}

export type ProfileDescriptionType = {
  title: string
  description: string
}

export type AvatarType = {
  imgAdress: string
}

export type AddPostType = {
  myPost: string;
  newPost: string;
  posts: Array<PostsDataType>
  addPost:()=> void
  textareaChange:(text:string)=>void
  postTextareaData: string

}
export type UsersStateType ={
  users: Array<NewUsersType>
  pageSize: number
  totalUserCounter: number
  currentPage:number
  isFetching: boolean
  followInProgress: Array<number>

}


export type UsersType = {
  id: string
  name: string
  message:string
  country:string
  city:string
  follow: boolean
}

export type UsersActionType ={
  type: string
  userID:string
  users: Array<UsersType>
}



export const store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: v1(), name: 'Pashka' },
        { id: v1(), name: 'Maks' },
        { id: v1(), name: 'Vlados' },
        { id: v1(), name: 'Leha' },
        { id: v1(), name: 'Dima' }
      ],
      messages: [
        { id: v1(), message: 'Hi' },
        { id: v1(), message: 'How are you?' },
        { id: v1(), message: 'I am fine' }
      ],
      messageTextareaData:''
    },
    profilePage: {
      posts: [
        { id: v1(), postMessage: "Hi, I'm Pavel", likes: 10 },
        { id: v1(), postMessage: "Let's go to learn a React", likes: 9 },
        { id: v1(), postMessage: "Also we need improve our html/css skills", likes: 11 },
        { id: v1(), postMessage: "Then we'll learn Redux", likes: 22 }
      ], 
      myPost: 'My posts', 
      newPost: 'New post',
      profileTextareaData: '',
    },
    navbarRight: {
      friends: [
        { id: v1(), name: 'Pashka' },
        { id: v1(), name: 'Maks' },
        { id: v1(), name: 'Vlad' },
        { id: v1(), name: 'Leha' }
      ]
    },
    
  },
  getState() {
    return this._state
  },
  getPosts() {
    return this._state.profilePage.posts
  },
  getDialogs(){
    return this._state.dialogsPage.dialogs
  },
  getMessages(){
    return this._state.dialogsPage.messages
  },
  getFriends(){
    return this._state.navbarRight.friends
  },
  getNewPostText(){
    return this._state.profilePage.newPost
  },
  getMyPostText(){
    return this._state.profilePage.myPost
  },
  getMessageTextareaData(){
    return this._state.dialogsPage.messageTextareaData
  },
  getProfileTextareaData(){
    return this._state.profilePage.profileTextareaData
  },
  _renderAll (state: StateDataType){
    console.log('State changed')
  },

  subscribe(observer: (state: StateDataType) => void) {
    this._renderAll = observer
  }, 
  dispatch(action:ActionType) {
    

    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
    
  }
}
