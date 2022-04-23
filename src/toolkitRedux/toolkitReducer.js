import {createReducer, createAction} from "@reduxjs/toolkit";

const currentPage = 1,
    usersPerPage = 5,
    lastUserIndex = currentPage * usersPerPage,
    firstUserIndex = lastUserIndex - usersPerPage;

const initialState = {
    users: [],
    visibleUsers:[],
    currentPage: currentPage,
    usersPerPage: usersPerPage,
    lastUserIndex: lastUserIndex,
    firstUserIndex: firstUserIndex,
    loading: true,
    error: null
};

export const changePage = createAction('CHANGE_PAGE');

export default createReducer(initialState, {
    [changePage]: function (state, action) {
        let currentPage,
            lastUserIndex,
            firstUserIndex;

        switch (action.payload) {
            case 'prev':
                currentPage = state.currentPage - 1;
                break;
            case 'next':
                currentPage = state.currentPage + 1;
                break;
            default:
                currentPage = action.payload;
        }

        lastUserIndex = currentPage * state.usersPerPage;
        firstUserIndex = lastUserIndex - state.usersPerPage;
        state.currentPage = currentPage;
        state.visibleUsers = state.users.slice(firstUserIndex, lastUserIndex);
        state.lastUserIndex = lastUserIndex;
        state.firstUserIndex = firstUserIndex;
    },
})