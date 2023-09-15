import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { Button } from 'reactstrap';
import routes from '~/config/routes';

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
                <Button tag={Link} to={routes.create} className={cx('btn')} color="warning" size="lg">
                    CREATE
                </Button>
                <Button tag={Link} to={routes.view} className={cx('btn')} color="danger" size="lg">
                    VIEW
                </Button>
            </div>
        </div>
    );
}

export default Home;
