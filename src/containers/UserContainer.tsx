import React, { useEffect } from 'react'
import Spinner from '../components/spinner/index';
import UserList from '../components/user-list/index';
import {useDispatch} from "react-redux";

import {changeModalVisibility, fetchUsers} from "../toolkitRedux/toolkitSlice";
import { connect } from 'react-redux';

const UserContainer = ({users, loading, error, usersError, changeModalVisibility}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <Spinner />
    }

    return (
        <>
            <UserList users={users} changeModalVisibility = {changeModalVisibility}/>

        </>
    )
};

const mapStateToProps = store => {
    return {
        loading: store.toolkit.loading,
        users: store.toolkit.visibleUsers,
        modalVisibility: store.toolkit.modalVisibility,
    }
};
const mapDispatchToProps = {
    changeModalVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)