import classNames from 'classnames/bind';
import styles from './View.module.scss';

const cx = classNames.bind(styles);

function View() {
    return <div className={cx('wrapper')}>View</div>;
}

export default View;
