import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c4da8fde1445e89bbd9f93b1a6f89c06~c5_100x100.jpeg?x-expires=1679126400&x-signature=woo2DIcDXiy6jFPEERTBpeI9Mes%3D"
                alt="Avatar"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('ID')}>
                    <span>nson1611</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <p className={cx('username')}>_vns</p>
            </div>
        </div>
    );
}

export default AccountItem;
