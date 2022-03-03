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

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'FETCH_USERS_REQUEST':
            return {
                ...state,
                users: state.users,
                loading: true,
                error: null
            };
        case 'FETCH_USERS_SUCCESS':
            const users = action.payload;
            return {
                ...state,
                users: users,
                visibleUsers: users.slice(state.firstUserIndex, state.lastUserIndex),
                loading: false,
                error: null
            };

        case 'FETCH_USERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case 'CHANGE_PAGE':
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
            return {
                ...state,
                currentPage: currentPage,
                visibleUsers: state.users.slice(firstUserIndex, lastUserIndex),
                lastUserIndex: lastUserIndex,
                firstUserIndex: firstUserIndex
            };

        default:
            return state;
    }
};

export  {reducer};
