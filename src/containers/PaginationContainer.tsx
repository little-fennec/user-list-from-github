import Pagination from '../components/pagination/index';
import {changePage} from "../toolkitRedux/toolkitSlice";
import { connect } from 'react-redux';

const PaginationContainer = ({users, currentPage, usersPerPage, changePage}) => {

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
    return {
        users: store.toolkit.users,
        currentPage: store.toolkit.currentPage,
        usersPerPage: store.toolkit.usersPerPage,
        lastUserIndex: store.toolkit.lastUserIndex,
        firstUserIndex: store.toolkit.firstUserIndex,
    }
};
const mapDispatchToProps = {
    changePage
};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);