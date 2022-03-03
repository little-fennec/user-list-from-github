import React, { useState, useEffect } from 'react'
import Spinner from '../components/spinner/index';
import UserList from '../components/user-list/index';
import Pagination from '../components/pagination/index';
import {changePage} from "../actions/index";
import { connect } from 'react-redux';

const PaginationContainer = ({users, currentPage, usersPerPage, changePage}) => {

    // const [currentPage, setCurrentPage] = useState(1);
    // const [usersPerPage] = useState(5);

    // const lastUserIndex = currentPage * usersPerPage;
    // const firstUserIndex = lastUserIndex - usersPerPage;
    // const currentUser = users.slice(firstUserIndex, lastUserIndex);

    // const paginate = pageNumber => setCurrentPage(pageNumber);
    // const nextPage = () => setCurrentPage(prev => prev + 1 );
    // const prevPage = () => setCurrentPage(prev => prev - 1 );
    return (
        <Pagination
            usersPerPage = {usersPerPage}
            totalUsers = {users.length}
            changePage = {changePage}
            currentPage = {currentPage}
          />
    )
};

const mapStateToProps = store => {
    console.log(store);
    return {
        users: store.users,
        currentPage: store.currentPage,
        usersPerPage: store.usersPerPage,
        lastUserIndex: store.lastUserIndex,
        firstUserIndex: store.firstUserIndex,
    }
};
const mapDispatchToProps = {
    changePage
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);