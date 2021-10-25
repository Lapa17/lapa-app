let renderAll = (state:StateDataType) => {
  console.log('State changed')
}

export type StateType ={
  state:StateDataType;
  addPost: () => void
  textareaChange: (value:string) => void
}

export type StateDataType = {
    dialogsPage:DialogsType
    profilePage:PostType
    navbarRight:NavbarRightType
    textareaData:string
  }

export type NavbarRightType ={
    friends: Array<DialogsDataType>
}


export type DialogsType = {
    
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
  }
  
  export type DialogsDataType = {
    id: number;
    name: string;
  
  }
  
  export type MessagesDataType ={
    id: number;
    message: string;
  }
  
  
  
  export type PostType = {
    myPost: string;
    newPost:string;
    posts:Array<PostsDataType>
  }
  
  export type PostsDataType ={
    id:number
    postMessage: string
    likes:number
  } 
  
  export type PostMesageType = {
    message: string;
    likes:number
  }
  
  export type TextAreaDataType ={
    array: Array<TextAreaArrayDataType>
  }
  
  export type TextAreaArrayDataType ={
    value: string
  }


  
  
  export type NavigationType ={
    menu: string;
    link: string;
  } 
  
  
  export type WidgetsType ={
    src: string
  }

  export type ProfileDescriptionType = {
    title:string
    description: string
  }

  export type AvatarType = {
    imgAdress: string
  }


 export type FriendType ={
    friend:string;
  }
export type AddPostType ={
  myPost: string;
  newPost:string;
  posts:Array<PostsDataType>
    addPost: () => void
    textareaChange: (value:string) => void
    textareaData:string
  }
  
  export const state:StateDataType ={
      dialogsPage: {dialogs:[
        { id: 1, name: 'Pashka' },
        { id: 2, name: 'Maks' },
        { id: 3, name: 'Vlados' },
        { id: 4, name: 'Leha' },
        { id: 5, name: 'Dima' }
      ],
      messages:[
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'I am fine' }
      ]},
      profilePage:{posts:[
        {id:1, postMessage:"Hi, I'm Pavel", likes:10},
        {id:2, postMessage:"Let's go to learn a React", likes:9},
        {id:3, postMessage:"Also we need improve our html/css skills", likes:11},
        {id:4, postMessage:"Then we'll learn Redux", likes:22}
      ], myPost:'My posts', newPost:'New post'},
      navbarRight:{friends:[
          {id:1, name: 'Pashka'},
          {id:2, name: 'Maks'},
          {id:3, name: 'Vlad'},
          {id:4, name: 'Leha'}
      ]
  },
  textareaData:''
}



  export const addPost = () =>{
    let newPost = {
      id:5,
      postMessage:state.textareaData,
      likes:0
    }
    state.profilePage.posts.push(newPost)
    renderAll(state)
    
  }


  export const textareaChange = (value:string) => {
    state.textareaData = value;
    renderAll(state);
  }
 
  export const subscribe = (observer:(state:StateDataType) => void) =>{
    renderAll = observer
  }