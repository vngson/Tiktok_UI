import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faCircleUser, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faPaperPlane,
    faEnvelope,
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Menu, Wrapper as WindowWrapper } from '~/components/Window';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

const MENU1 = [
    {
        icon: faCircleUser,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: faCoins,
        title: 'Get Coins',
        to: '/getcoins',
    },
    {
        icon: faGear,
        title: 'Setting',
        to: '/setting',
    },
    {
        icon: faLanguage,
        title: 'English',
        children: {
            title_1: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: faCircleQuestion,
        title: 'Feedback and help',
        to: '/feadback',
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts',
    },
    {
        icon: faArrowRightFromBracket,
        rotation: 180,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

const MENU2 = [
    {
        icon: faLanguage,
        title: 'English',
        children: {
            title_1: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: faCircleQuestion,
        title: 'Feedback and help',
        to: '/feadback',
    },
    {
        icon: faKeyboard,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    const handleMenuChange = (MenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const [userLogin, SetUserLogin] = useState(true);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <HeadlessTippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-suggest')} tabIndex="-1" {...attrs}>
                            <WindowWrapper>
                                <h4 className={cx('search-suggest-label')}>Accounts</h4>
                                <AccountItem />
                            </WindowWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />

                        <button className={cx('search-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {userLogin ? (
                        <div className={cx('logged')}>
                            <Button less leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload')}>
                                Upload
                            </Button>

                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cx('logged-message')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('logged-mailbox')}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </button>
                            </Tippy>

                            <Menu items={MENU1} className={cx('menu1')}>
                                <img
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c4da8fde1445e89bbd9f93b1a6f89c06~c5_720x720.jpeg?x-expires=1680195600&x-signature=%2B8CM6msGfa3Ca3M0a9DFxYHO1DY%3D"
                                    className={cx('header-avatar')}
                                />
                            </Menu>
                        </div>
                    ) : (
                        <div className={cx('not-login')}>
                            <Button less leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('upload')}>
                                Upload
                            </Button>
                            <Button primary className={cx('login')}>
                                Login
                            </Button>

                            <Menu items={MENU2} onChange={handleMenuChange}>
                                <button className={cx('not-login-more')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
