import css from './Logo.module.css';


const Logo = () => {
    return <div className={css.logo}>
                <img width="67" height="67" src="https://img.icons8.com/external-others-inmotus-design/67/ED4749/external-N-qwerty-keypad-others-inmotus-design.png" alt="external-N-qwerty-keypad-others-inmotus-design" />
                <p className={css.logoText}>ews</p>
            </div>
};

export default Logo;