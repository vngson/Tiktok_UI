import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faCloudArrowUp,
    faPaperPlane,
    faEnvelope,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as WindowWrapper } from '~/components/Window';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-suggest')} tabIndex="-1" {...attrs}>
                            <WindowWrapper>
                                <h4 className={cx('search-suggest-label')}>Accounts</h4>
                                <AccountItem />
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
                </Tippy>

                <div className={cx('actions')}>
                    <Button less leftIcon={<FontAwesomeIcon icon={faPlus} />} className={cx('actions-upload')}>
                        Upload
                    </Button>
                    <Button primary className={cx('action-login')}>
                        Login
                    </Button>
                    {/* <button className={cx('actions-upload')}>
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                    </button>

                    <Tippy content="Messages">
                        <button className={cx('actions-message')}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </Tippy>

                    <Tippy content="Inbox">
                        <button className={cx('actions-mailbox')}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                    </Tippy>

                    <button className={cx('actions-user')}>
                        <FontAwesomeIcon icon={faCircleUser} />
                    </button> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
