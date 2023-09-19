import classNames from 'classnames/bind';
import styles from './QuizPlaying.module.scss';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ShowResult({ setAppearLogger }) {
    return (
        <div className={cx('show-result')}>
            <div className={cx('show-result-container')}>
                <div className={cx('show-result-icon')}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className={cx('show-result-heading')}>
                    Chúc mừng bạn đã trả lời đúng câu hỏi này
                    <br></br>
                    Mời bạn đến với câu hỏi tiếp theo
                </div>
                <div className={cx('show-result-list-btn')}>
                    <Button color="danger" className={cx('show-result-back-btn')}>
                        Trở lại
                    </Button>
                    <Button color="warning" className={cx('show-result-see-btn')}>
                        Xem điểm
                    </Button>
                    <Button
                        color="primary"
                        className={cx('show-result-next-btn')}
                        onClick={() => setAppearLogger(false)}
                    >
                        Câu tiếp theo
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ShowResult;
