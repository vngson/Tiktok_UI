import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button leftIcon={<FontAwesomeIcon icon={data.icon} />} className={cx('item')} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
