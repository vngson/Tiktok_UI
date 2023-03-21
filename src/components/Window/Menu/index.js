import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as WindowWrapper } from '~/components/Window';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 500]}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <WindowWrapper className={cx('wrapper')}>{renderItems()}</WindowWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
