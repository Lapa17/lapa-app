import { v1 } from "uuid"

export type StoreType = {
  store: StateType;
 
}

export type StateType = {
  addPost: () => void
  textareaChange: (value: string) => void
  getState:StateDataType
  getPosts:Array<PostsDataType>
  getFriends:Array<DialogsDataType>
  getDialogs:Array<DialogsDataType>
  getTextareaData:string
  getNewPostText: string
  getMyPostText: string
  getMessages: Array<MessagesDataType>
  subscribe: (observer: (state: StateDataType)=>void) => void
  _renderAll: (state: StateDataType) => void
}

export type StateDataType = {
  dialogsPage: DialogsType
  profilePage: PostType
  navbarRight: NavbarRightType
  textareaData: string
}

export type NavbarRightType = {
  friends: Array<DialogsDataType>
}

export type DialogsType = {

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
  addPost: () => void
  textareaChange: (value: string) => void
  textareaData: string
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
      ]
    },
    profilePage: {
      posts: [
        { id: v1(), postMessage: "Hi, I'm Pavel", likes: 10 },
        { id: v1(), postMessage: "Let's go to learn a React", likes: 9 },
        { id: v1(), postMessage: "Also we need improve our html/css skills", likes: 11 },
        { id: v1(), postMessage: "Then we'll learn Redux", likes: 22 }
      ], myPost: 'My posts', newPost: 'New post'
    },
    navbarRight: {
      friends: [
        { id: v1(), name: 'Pashka' },
        { id: v1(), name: 'Maks' },
        { id: v1(), name: 'Vlad' },
        { id: v1(), name: 'Leha' }
      ]
    },
    textareaData: ''
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
    return store._state.dialogsPage.messages
  },
  getFriends(){
    return this._state.navbarRight.friends
  },
  getNewPostText(){
    return store._state.profilePage.newPost
  },
  getMyPostText(){
    return store._state.profilePage.myPost
  },
  getTextareaData(){
    return this._state.textareaData
  },
  _renderAll (state: StateDataType){
    console.log('State changed')
  },
  addPost() {
    let newPost = {
      id: v1(),
      postMessage:store.getTextareaData(),
      likes: 0
    }
    store._state.profilePage.posts.push(newPost)
    store._renderAll(store.getState())

  },
  textareaChange(value: string) {
    store._state.textareaData = value;
    store._renderAll(store.getState());
  },

  subscribe(observer: (state: StateDataType) => void) {
    store._renderAll = observer
  }
}