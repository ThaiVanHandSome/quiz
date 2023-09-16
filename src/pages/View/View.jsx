import classNames from 'classnames/bind';
import styles from './View.module.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import QuizItem from './QuizItem';

const cx = classNames.bind(styles);

function View() {
    const quiz = useSelector((state) => state.quizReducer);
    const [quizChoosen, setQuizChoosen] = useState(null);

    const handleSetQuiz = (quizName) => {
        setQuizChoosen(quizName);
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>VIEW QUIZ</h1>
            <div className={cx('container')}>
                <div className={cx('container-left')}>
                    <div className={cx('container-quiz')}>
                        {Object.keys(quiz).map((quizItem, index) => (
                            <div key={index} className={cx('quiz-container')} onClick={() => handleSetQuiz(quizItem)}>
                                {quizItem}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('container-right')}>
                    {quizChoosen && (
                        <div className={cx('show-quiz')}>
                            {quiz[quizChoosen].map((item, index) => (
                                <QuizItem data={item} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default View;
