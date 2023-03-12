import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from './logo.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={logo} alt="logo_tiktok"></img>
            </div>
        </header>
    );
}

export default Header;
