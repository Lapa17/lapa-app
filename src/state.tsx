import { v1 } from "uuid"


const ADD_POST:string = 'ADD-POST'
const PROFILE_TEXTAREA_CHANGE:string  ='PROFILE-TEXAREA-CHANGE'
const ADD_MESSAGE:string = 'ADD-MESSAGE'
const MESSAGE_TEXTAREA_CHANGE:string  ='MESSAGE-TEXAREA-CHANGE'



export type StoreType = {
  store: StoreDataType;
 
}

export type StoreDataType = {
  _state: StateDataType
  getState:() => StateDataType
  getPosts:() => Array<PostsDataType>
  getFriends:() => Array<DialogsDataType>
  getDialogs:() => Array<DialogsDataType>
  getNewPostText:() =>  string
  getMyPostText:() =>  string
  getProfileTextareaData:()=> string
  getMessageTextareaData:()=> string
  getMessages:() =>  Array<MessagesDataType>
  subscribe: (observer: (state: StateDataType)=>void) => void
  _renderAll: (state: StateDataType) => void
  dispatch: (action:ActionType) => void

}

export type StateDataType = {
  dialogsPage: DialogsType
  profilePage: PostType
  navbarRight: NavbarRightType
  profileTextareaData: string
  messageTextareaData:string
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
  dispatch: (action:ActionType) => void
  messagetTextareaData: string

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
  dispatch: (action:ActionType) => void
  postTextareaData: string
}



export const store:StoreDataType = {
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
    profileTextareaData: '',
    messageTextareaData:''
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
  getProfileTextareaData(){
    return this._state.profileTextareaData
  },
  getMessageTextareaData(){
    return this._state.messageTextareaData
  },
  _renderAll (state: StateDataType){
    console.log('State changed')
  },
  // addPost() {
  //   let newPost = {
  //     id: v1(),
  //     postMessage:this.getTextareaData(),
  //     likes: 0
  //   }
  //   this._state.profilePage.posts.push(newPost)
  //   this._renderAll(this.getState())

  // },
  // textareaChange(value: string) {
  //   this._state.textareaData = value;
  //   this._renderAll(this.getState());
  // },

  subscribe(observer: (state: StateDataType) => void) {
    this._renderAll = observer
  }, 
  dispatch(action:ActionType) {
    if (action.type === ADD_POST){
      let newPost = {
        id: v1(),
        postMessage:this.getProfileTextareaData(),
        likes: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._renderAll(this.getState())
    }
    else if (action.type === PROFILE_TEXTAREA_CHANGE){
      this._state.profileTextareaData = action.value;
      this._renderAll(this.getState());
    }
    else if (action.type === ADD_MESSAGE){
      let newMessage = {
        id: v1(),
        message:this.getMessageTextareaData(),
      }
      this._state.dialogsPage.messages.push(newMessage)
      this._renderAll(this.getState())
    }
    else if (action.type === MESSAGE_TEXTAREA_CHANGE){
      this._state.messageTextareaData = action.value;
      this._renderAll(this.getState());
    }
  }
}

export const addPostActionCreator = () => ({type:ADD_POST,value:''})
export const changeProfileTextareaDataValueActionCreator = (text:string) => ({type:PROFILE_TEXTAREA_CHANGE,value:text})
export const addMessageActionCreator = () => ({type:ADD_MESSAGE,value:''})
export const changeMessageTextareaDataValueActionCreator = (text:string) => ({type:MESSAGE_TEXTAREA_CHANGE,value:text})