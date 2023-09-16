import classNames from 'classnames/bind';
import styles from './View.module.scss';
import QuizItemOption from './QuizItemOption';

const cx = classNames.bind(styles);

const bgVal = ['yellow', 'green', 'blue', 'pink'];
function QuizItem({ data }) {
    return (
        <div className={cx('quiz-item')}>
            <div className={cx('quiz-question')}>{data.question}</div>
            <div className={cx('quiz-options')}>
                {data.options.map((item, index) => (
                    <QuizItemOption key={index} bgColor={bgVal[index]} value={item} />
                ))}
            </div>
        </div>
    );
}

export default QuizItem;
