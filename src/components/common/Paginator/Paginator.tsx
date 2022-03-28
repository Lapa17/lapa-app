import s from './Paginator.module.css'

type PaginatorPropsType = {
    totalUserCounter:number
    pageSize: number
    currentPage: number
    onPageClick: (currentPage: number) => void
}


export const Paginator = ({totalUserCounter, pageSize, currentPage, onPageClick }:PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalUserCounter / 100 / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? s.selected : ''} onClick={() => onPageClick(p)}>{p}</span>
            })}
        </div>)
}