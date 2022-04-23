import React from 'react';
import styles from './pagination.module.scss';

const Pagination = ({usersPerPage, totalUsers, currentPage, changePage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalUsers/usersPerPage);
    let disabledPrevBtn = currentPage == 1;
    let disabledNextBtn = currentPage == totalPages;

    for (let i=1; i <= totalPages; i++ ) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.container}>

            <button className={styles.link} disabled={disabledPrevBtn} onClick={() => changePage('prev')}>Previous</button>

            {
                pageNumbers.map((number) => {
                        let clazz = styles.link;
                        if (number == currentPage) {
                            clazz = clazz + ' ' + styles.current;
                        }
                        return(

                                <span key={number} className={clazz} onClick={() => changePage(number)}>{number}</span>

                        )
                })
            }

            <button className={styles.link} disabled={disabledNextBtn} onClick={() => changePage('next')}>Next</button>

        </div>
    )
};

export default Pagination