import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import { FormLogin, FormSignUp } from '../Form';

const cx = classNames.bind(styles);

function Auth({ setLoginSuccess, setOpenDialog }) {
    const [openLogin, setOpenLogin] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo-container')}>
                    <div className={cx('logo')}>
                        <img src={require('~/assets/images/img-01.webp')} className={cx('logo')} alt="computer-logo" />
                    </div>
                </div>
                <div className={cx('form-container')}>
                    {openLogin && (
                        <FormLogin
                            setLoginSuccess={setLoginSuccess}
                            openLogin={openLogin}
                            setOpenLogin={setOpenLogin}
                            setOpenDialog={setOpenDialog}
                        />
                    )}
                    {!openLogin && (
                        <FormSignUp
                            setLoginSuccess={setLoginSuccess}
                            openLogin={openLogin}
                            setOpenLogin={setOpenLogin}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

Auth.propTypes = {
    setLogin: PropTypes.func.isRequired,
};

export default Auth;
