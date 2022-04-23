import React from 'react';
import style from './App.module.scss';
import UserContainer from '../../containers/UserContainer';
import PaginationContainer from '../../containers/PaginationContainer';
import Header from '../../components/header/index';
import ModalContainer from '../../containers/ModalContainer';
import ErrorBoundry from "../error-boundry";


function App() {
    return (
      <>
        <Header/>
        <ErrorBoundry>
            <div className={style.container}>
                <UserContainer/>
                <PaginationContainer/>
                <ModalContainer/>
            </div>
        </ErrorBoundry>

      </>
    );
}

export default App;
