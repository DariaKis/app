import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC} from "../../redux/users-reducer"
import {unfollowAC} from "../../redux/users-reducer";
import {setUsersAC} from "../../redux/users-reducer";
import {setTotalUsersCountAC} from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }

    }

};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
// export UsersContainer;