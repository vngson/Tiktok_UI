import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('item', {
        separate: data.separate,
    });
    return (
        <Button
            rotation={data.rotation}
            leftIcon={<FontAwesomeIcon icon={data.icon} rotation={data.rotation} />}
            className={classes}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
