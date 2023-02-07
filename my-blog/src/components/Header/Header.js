import './Header.css';

export default function Header() {
    return (
        <header className="headerWrapper">
            <div className="header__item header__item--logo">Anna's Blog</div>
            <div className="header__item header__item--navigation">
                <ul>
                    <li key={"Home"}>Home</li>
                    <li key={"About Me"}>About Me</li>
                    <li key={"Posts"}>Posts</li>
                    <li key={"Contact"}>Contact</li>
                </ul>
            </div>
            <div className="header__item"></div>
        </header>
    )
}