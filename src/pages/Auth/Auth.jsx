import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Auth.module.scss';
import { FormLogin, FormSignUp } from '~/components/Form';
import Dialog from '~/components/Dialog';

const cx = classNames.bind(styles);
const login = JSON.parse(localStorage.getItem('login')) || false;

function Auth() {
    const [openLogin, setOpenLogin] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(login);
    const [openDialog, setOpenDialog] = useState(false);

    if (loginSuccess) {
        window.location.href = '/home';
    }

    return (
        <>
            {openDialog && <Dialog setOpen={setOpenDialog} />}
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('logo-container')}>
                        <div className={cx('logo')}>
                            <img
                                src={require('~/assets/images/img-01.webp')}
                                className={cx('logo')}
                                alt="computer-logo"
                            />
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
        </>
    );
}

Auth.propTypes = {
    setLogin: PropTypes.func.isRequired,
};

export default Auth;
