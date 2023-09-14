import classNames from 'classnames/bind';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import styles from './Dialog.module.scss';

const cx = classNames.bind(styles);

function Dialog({ setOpen }) {
    return (
        <>
            <Modal isOpen={true} toggle={() => setOpen(false)}>
                <ModalHeader className={cx('modal-header')}>Bạn đã nhập sai tài khoản hoặc mật khẩu. Vui lòng nhập lại!</ModalHeader>
                {/* <ModalBody>Modal body</ModalBody> */}
            </Modal>
        </>
    );
}

export default Dialog;
