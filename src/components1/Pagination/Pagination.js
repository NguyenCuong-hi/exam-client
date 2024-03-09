import React from 'react';
import classNames from 'classnames/bind';
import style from './Pagination.module.scss';

const cx = classNames.bind(style);

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const goToNextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    return (
        <nav>
            <ul className={cx("pagination","justify-content-center")}>
                <li className={cx("page-item")}>
                    <a className={cx("page-link")} onClick={goToPrevPage} href="#">
                        Previous
                    </a>
                </li>
                {pageNumbers.map((pgNumber) => (
                    <li key={pgNumber} className={`page-item ${currentPage == pgNumber ? 'active' : ''} `}>
                        <a onClick={() => setCurrentPage(pgNumber)} className={cx("page-link")} href="#">
                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li className={cx("page-item")}>
                    <a className={cx("page-link")} onClick={goToNextPage} href="#">
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
