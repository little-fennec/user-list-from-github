import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
    'toolkit/fetchUsers',
    async function(_, {rejectWithValue}) {
        try {
            let users_data, users_data_promises;
            let response = await axios.get('https://api.github.com/users');
            users_data_promises = response.data.map(async user => {
                const userInf = await axios.get(user.url);
                return {
                    ...user,
                    full_name: userInf.data.name,
                    location: userInf.data.location,
                    email: userInf.data.email,
                    blog: userInf.data.blog
                };
            });
            users_data = await Promise.all(users_data_promises);
            return users_data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const currentPage = 1,
    usersPerPage = 5,
    lastUserIndex = currentPage * usersPerPage,
    firstUserIndex = lastUserIndex - usersPerPage;

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        users: [],
        visibleUsers:[],
        currentPage: currentPage,
        usersPerPage: usersPerPage,
        lastUserIndex: lastUserIndex,
        firstUserIndex: firstUserIndex,
        loading: true,
        error: null,
        modalVisibility: false,
        currentUser:[]
    },
    reducers: {
        changePage (state, action) {
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
        changeModalVisibility (state, action) {
            state.modalVisibility = !state.modalVisibility;
            state.currentUser = state.visibleUsers.filter((item) => {
                return item.id == action.payload
            });
            state.currentUser = state.currentUser[0];
        }

    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            console.log('usersLoaded');
            state.users = action.payload;
            state.visibleUsers = state.users.slice(state.firstUserIndex, state.lastUserIndex);
            state.loading = false;
            state.error = null;
        },
        [fetchUsers.rejected]: (state, action) => {
            console.log('fetchUsers.rejected');
            console.log(action.payload);
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export default toolkitSlice.reducer;
export const { changePage, changeModalVisibility} = toolkitSlice.actions;