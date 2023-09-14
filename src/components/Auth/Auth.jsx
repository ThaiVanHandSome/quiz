import classNames from 'classnames/bind';
import styles from './Auth.module.scss';

const cx = classNames.bind(styles);

function Auth() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo-container')}>
                    <div className={cx('logo')}>
                        <img src={require('~/assets/images/img-01.webp')} className={cx('logo')} alt="computer-logo" />
                    </div>
                </div>
                <div className={cx('form-container')}>
                    <h1 className={cx('title')}>Register</h1>
                    {/* <Form /> */}
                </div>
            </div>
        </div>
    );
}

export default Auth;
