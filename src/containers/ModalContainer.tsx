import React from 'react';
import Modal from '../components/modal/index';
import {changeModalVisibility} from "../toolkitRedux/toolkitSlice";
import { connect } from 'react-redux';

const ModalContainer = ({currentUser, modalVisibility, changeModalVisibility}) => {

    return (
        <Modal user={currentUser} active={modalVisibility} changeModalVisibility={changeModalVisibility}/>
    );
};

const mapStateToProps = store => {
    return {
        currentUser: store.toolkit.currentUser,
        modalVisibility: store.toolkit.modalVisibility,
    }
};
const mapDispatchToProps = {
    changeModalVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);