import css from './Header.module.css';
import Logo from "../Logo/Logo";

import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.container}>
                <NavLink to="/">
                    <Logo></Logo>
                </NavLink>
            </div>
        </div>
    )
};

export default Header;