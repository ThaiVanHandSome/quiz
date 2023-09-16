import classNames from 'classnames/bind';
import styles from './QuizQuestion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function QuizOption({ bgColor, isInp, value, setValueOption, isCorrectOption, handleSetCorrectOption }) {
    return (
        <div className={cx('quiz-option')} style={{ backgroundColor: bgColor }}>
            {!isInp && <div className={cx('quiz-option-label')}>Test thoi nha</div>}
            {isInp && (
                <textarea
                    value={value}
                    className={cx('quiz-option-inp')}
                    placeholder="Your value option..."
                    rows="3"
                    onChange={(e) => setValueOption(e.target.value)}
                />
            )}
            <div
                className={cx('btn-correct', {
                    active: isCorrectOption,
                })}
                onClick={handleSetCorrectOption}
            >
                <FontAwesomeIcon icon={faCheck} />
            </div>
        </div>
    );
}

export default QuizOption;
