import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Wrapper as WindowWrapper } from '~/components/Window';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, className }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const onBack = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 500]}
            placement="bottom-end"
            offset={[20, 10]}
            interactive
            render={(attrs) => (
                <div className={classNames(cx('menu'), { className })} tabIndex="-1" {...attrs}>
                    <WindowWrapper className={cx('wrapper')}>
                        {history.length > 1 && <HeaderMenu title="Language" onBack={onBack} />}
                        {renderItems()}
                    </WindowWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
