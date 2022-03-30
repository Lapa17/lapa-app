import s from './Paginator.module.css'
import {useEffect, useState} from "react";

type PaginatorPropsType = {
    totalItemsCounter: number
    pageSize: number
    currentPage: number
    portionSize?: number
    onPageClick: (currentPage: number) => void

}


export const Paginator = ({
                              totalItemsCounter,
                              pageSize,
                              currentPage,
                              onPageClick,
                              portionSize = 10
                          }: PaginatorPropsType) => {

    const pagesCount = Math.ceil(totalItemsCounter / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage, portionSize])

    const selectedPage = `${s.selected} ${s.page}`

    return (
        <div>
            {portionNumber > 1 && <button onClick={()=> setPortionNumber(portionNumber -1 )}>Prev</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <span className={currentPage === p ? selectedPage : s.page}
                              onClick={() => onPageClick(p)}>{p}</span> )}
            {portionNumber < portionCount && <button onClick={()=> setPortionNumber(portionNumber +1 )}>Next</button>}
        </div>)
}