function Header() {
    return (
        <header className="wrapper__item wrapper__item--header">
            <div className="header__item header__item--logo">
                <h1>Todo App</h1>
            </div>
            <div className="header__item"></div>
            <div className="header__item header__item--menu-btn">
                <div className="button">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                  </div>
            </div>
        </header>
    )
}

export default Header;