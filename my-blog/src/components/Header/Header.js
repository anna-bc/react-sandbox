import './Header.scss';

import { useEffect, useState } from 'react';

export default function Header(props) {

    function handleToggle() {
        const newTheme = props.theme === 'light' ? 'dark' : 'light';
        props.setTheme(newTheme);
    }

    return (
        <header className={'Header' + ' Header' + (props.theme === 'light' ? '--light' : '--dark')}>
            <div className="header__item header__item--logo">Anna's Blog</div>
            <div className="header__item header__item--navigation">
                <ul>
                    <li key={"Home"}>Home</li>
                    <li key={"About Me"}>About Me</li>
                    <li key={"Posts"}>Posts</li>
                    <li key={"Contact"}>Contact</li>
                </ul>
            </div>
            <div className="header__item header__item--theme">
                <button onClick={handleToggle}>{props.theme === 'light' ? <span>Light Theme</span> : <span>Dark Theme</span>}</button>
            </div>
        </header>
    )
}