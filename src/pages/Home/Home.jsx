import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { Button } from 'reactstrap';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('area')}></div>
            <ul className={cx('circles')}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className={cx('container')}>
                <Button tag="Link" to="/cc" className={cx('btn')} color="warning" size="lg">
                    CREATE
                </Button>
                <Button className={cx('btn')} color="danger" size="lg">
                    VIEW
                </Button>
            </div>
        </div>
    );
}

export default Home;
