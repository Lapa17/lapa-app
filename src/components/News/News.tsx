import React from 'react'
import s from './News.module.css'

type NewsType = {
    message:string;
}

const News:React.FC<NewsType> = (props) =>{
    return (
        <div>
            It is News page
        </div>
    )
}

export default News;