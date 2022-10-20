import { SearchTicker } from "../../../features/searchingTicker";

import "./header.scss";

function Header({ children }) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <h1>Finance</h1>
                    </div>
                    <div className="header__tools">
                        <SearchTicker />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header