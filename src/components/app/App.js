import React from 'react';
import style from './App.module.scss';
import UserContainer from '../../containers/UserContainer';
import PaginationContainer from '../../containers/PaginationContainer';
import Header from '../../components/header/index';

function App() {
  return (
      <>
        <Header/>
        <div className={style.container}>
            <UserContainer/>
            <PaginationContainer/>
        </div>
      </>
  );
}

export default App;
