import React from 'react';
import style from './modal.module.scss';

const Modal = ({user, active, changeModalVisibility}) => {
    let avatar_url, full_name, location, email, blog = '';
    let clazz = active ? style.container + ' ' + style.active : style.container;
    console.log('user');
    console.log(user);
    if (user !== undefined) {
        avatar_url  = user.avatar_url;
        full_name  = user.full_name;
        location  = user.location;
        email  = user.email;
        blog  = user.blog;
    }
    return (
        <div className={clazz} onClick={() => {changeModalVisibility();}}>
            <div className={style.content} onClick={e => e.stopPropagation()}>
                <div className={style.avatar}>
                    <img src={ avatar_url } className="rounded" />
                </div>
                <div className={style.user_inf}>
                    <h2>User information</h2>
                    { full_name && <div><span className={style.title}>Name:</span> {full_name}</div>}
                    { location && <div><span className={style.title}>Location:</span> {location}</div>}
                    { email && <div><span className={style.title}>Email: {email}</span></div>}
                    { blog && <div><span className={style.title}>Blog: <a href={blog} target="_blank">{blog}</a></span></div>}
                    { !full_name && !location && !email && !blog && <div>User did not provide his data :(</div>}
                </div>
            </div>
        </div>
    );
};

export default Modal;