const usersRequested = () => {
    return {
        type: 'FETCH_USERS_REQUEST',
    }
};
const usersLoaded  = (newUsers) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        payload: newUsers
    }
};
const usersError = (error) => {
    return {
        type: 'FETCH_ITEMS_FAILURE',
        payload: error
    }
};
const changePage  = (pageNumber) => {
    return {
        type: 'CHANGE_PAGE',
        payload: pageNumber
    }
};


export {
    usersLoaded,
    usersRequested,
    usersError,
    changePage
};