import classNames from 'classnames/bind';
import styles from './View.module.scss';

const cx = classNames.bind(styles);

function QuizItemOption({ value, bgColor }) {
    return (
        <div className={cx('quiz-item-option')} style={{ backgroundColor: bgColor }}>
            {value}
        </div>
    );
}

export default QuizItemOption;
