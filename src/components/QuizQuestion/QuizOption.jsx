import classNames from 'classnames/bind';
import styles from './QuizQuestion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function QuizOption({
    data,
    index,
    bgColor,
    isPlaying,
    isInp,
    value,
    setValueOption,
    isCorrectOption,
    handleSetCorrectOption,
    currCorrectAnswer,
    setAnswer,
    answerChoosen = null,
    isCheck,
}) {
    // console.log('isCheck', isCheck);
    // console.log('index', index);
    // console.log('answerChoosen', answerChoosen);
    // console.log('currCorrectOption', currCorrectOption);
    return (
        <div
            className={cx('quiz-option', {
                'answer-true':
                    isCheck &&
                    currCorrectAnswer !== null &&
                    answerChoosen === index &&
                    answerChoosen === currCorrectAnswer,
                'answer-false':
                    isCheck &&
                    currCorrectAnswer !== null &&
                    answerChoosen === index &&
                    answerChoosen !== currCorrectAnswer &&
                    currCorrectAnswer !== null,
                choosen: isPlaying && answerChoosen === index,
                'not-choosen': isPlaying && answerChoosen != null && answerChoosen !== index,
            })}
            style={{ backgroundColor: bgColor }}
            onClick={isPlaying && !answerChoosen ? () => setAnswer(index) : () => {}}
        >
            {!isInp && <div className={cx('quiz-option-label')}>{data}</div>}
            {isInp && (
                <textarea
                    value={value}
                    className={cx('quiz-option-inp')}
                    placeholder="Your value option..."
                    rows="3"
                    onChange={(e) => setValueOption(e.target.value)}
                />
            )}
            {!isPlaying && (
                <div
                    className={cx('btn-correct', {
                        active: isCorrectOption,
                    })}
                    onClick={!isInp ? () => {} : handleSetCorrectOption}
                >
                    <FontAwesomeIcon icon={faCheck} />
                </div>
            )}
        </div>
    );
}

export default QuizOption;
