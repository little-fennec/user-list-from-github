import React, { useState, useEffect } from 'react'
import Spinner from '../components/spinner/index';
import UserList from '../components/user-list/index';
import Pagination from '../components/pagination/index';
import {usersRequested, usersLoaded, usersError} from "../actions/index";
import { connect } from 'react-redux';


const UserContainer = ({users, loading, error, usersRequested, usersLoaded, usersError}) => {

    const getUsers = async () => {

        const res = await fetch('https://api.github.com/users');

        if (!res.ok) {
            throw new Error(`Could not fetch 'https://api.github.com/users',` +
                ` received ${res.status}`);
        }

        return await res.json();
    };

    useEffect(() => {
        usersRequested();
        getUsers().then(res => {
            usersLoaded(res);
        } )
            .catch((err) => usersError(err));
    }, []);

    if (loading) {
        return <Spinner />
    }

    return (
            <UserList users={users}/>
    )
};

const mapStateToProps = store => {
    return {
        users: store.visibleUsers,
    }
};
const mapDispatchToProps = {
    usersRequested,
    usersLoaded,
    usersError
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)