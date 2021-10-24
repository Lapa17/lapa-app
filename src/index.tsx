import './index.css';
import { renderAll } from './render';
import reportWebVitals from './reportWebVitals';
import {addPost, state, textareaChange} from './state'




renderAll(state, addPost, textareaChange);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
