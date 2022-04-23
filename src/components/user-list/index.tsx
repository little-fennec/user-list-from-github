import React from 'react';
import styles from './user-list.module.scss';

const UserList = ({users, changeModalVisibility}) => {
    console.log(users);
    return (
        <div>
            <div className={styles.container}>
                <div className="row text-center">
                    {
                        users.map((curElem) => {
                            const { avatar_url, id, login, type } = curElem;
                            return (
                                <div className={styles.wrapper} onClick={ () => {changeModalVisibility(id)}} key={id}>
                                    <div className={styles.avatar}> <img src={ avatar_url } className="rounded" width="155" /> </div>
                                    <div className={styles.login}>{login} </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default UserList
