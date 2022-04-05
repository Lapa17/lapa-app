import s from './Paginator.module.css'
import {useEffect, useState} from "react";
import cn from 'classnames';
import {Pagination} from "antd";

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

    function onShowSizeChange(current:number, pageSize:number) {
        console.log(current, pageSize);
    }

    const onChangePage = (page: number, pageSize: number) => {
        onPageClick(page)
    }

    return (
        <div>
        {/*<div>*/}
        {/*    {portionNumber > 1 && <button onClick={()=> setPortionNumber(portionNumber -1 )}>Prev</button>}*/}
        {/*        {pages*/}
        {/*            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)*/}
        {/*            .map(p => <span className={currentPage === p ? cn(s.selected, s.page) : s.page}*/}
        {/*                      onClick={() => onPageClick(p)}>{p}</span> )}*/}
        {/*    {portionNumber < portionCount && <button onClick={()=> setPortionNumber(portionNumber +1 )}>Next</button>}*/}
        {/*</div>*/}
            <Pagination
                showSizeChanger={false}
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={1}
                current={currentPage}
                total={pagesCount}
                onChange={onChangePage}
            />
        </div>)
}