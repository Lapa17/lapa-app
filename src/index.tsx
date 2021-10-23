import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type AppType = {
  dialogs: Array<DialogsDataType>
  messages: Array<MessagesDataType>
  posts: Array<PostsDataType>
}


export type DialogsType = {
  
  friends: Array<DialogsDataType>
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

export const dialogsData = [
  { id: 1, name: 'Pashka' },
  { id: 2, name: 'Maks' },
  { id: 3, name: 'Vlados' },
  { id: 4, name: 'Leha' },
  { id: 5, name: 'Dima' }
]

export const messagesData = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'I am fine' }
]

export type PostType = {
  myPost: string;
  newPost:string;
  postData:Array<PostsDataType>  
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

export const postsData:Array<PostsDataType> = [
  {id:1, postMessage:"Hi, I'm Pavel", likes:10},
  {id:2, postMessage:"Let's go to learn a React", likes:9},
  {id:3, postMessage:"Also we need improve our html/css skills", likes:11},
  {id:4, postMessage:"Then we'll learn Redux", likes:22},
  {id:5, postMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id, voluptatibus amet veri", likes:12},
  {id:6, postMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id, voluptatibus amet veri", likes:22},
  {id:7, postMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id, voluptatibus amet veri", likes:4},
  {id:8, postMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id, voluptatibus amet veri", likes:6},
  {id:9, postMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id, voluptatibus amet veri", likes:8},
  {id:10, postMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id, voluptatibus amet veri", likes:43},
  {id:11, postMessage:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id, voluptatibus amet veri", likes:19}
]




export type NavigationType ={
  menu: string;
  link: string;
} 


export type WidgetsType ={
  src: string
}


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData}
        messages={messagesData}
        posts={postsData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
