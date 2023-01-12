import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Paginate.module.css'
const Paginate = ({ count, action,page }) => {
   
    const dispatch = useDispatch()
    const [pageCount, setPageCount] = useState(0)
    useEffect(() => {
        const length = Math.ceil(+count / 2)
        setPageCount(length)
    }, [count, ])
    const handlePageClick = data => {
        dispatch(action({ page: data.selected }))
    }

    return (
        <>
            <ReactPaginate
                previousLabel={styles.Prev}
                nextLabel={styles.Next}
                breakLabel={'...'}
                pageCount={+pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={styles.paginateContainer}
                pageClassName={styles.pagebtn}
                previousClassName={page === 0 ? styles.previous : styles.next}
                previousLinkClassName={styles.linkbtn}
                pageLinkClassName={styles.linkbtn}
                nextClassName={(page + 1) !== +pageCount ? styles.next : styles.previous}
                breakClassName={styles.pagebtn}
                breakLinkClassName={styles.linkbtn}
                nextLinkClassName={styles.linkbtn}
                activeClassName={styles.activebtn}
            />
        </>
    );
};

export default Paginate;