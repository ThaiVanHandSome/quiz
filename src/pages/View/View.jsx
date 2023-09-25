import { useSelector } from 'react-redux';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './View.module.scss';
import QuizQuestionView from './QuizQuestionView';
import Ready from './Ready';

const cx = classNames.bind(styles);

function View() {
    const quiz = useSelector((state) => state.quizReducer);
    const [quizChoosen, setQuizChoosen] = useState(null);
    const [ready, setReady] = useState(null);

    const handleSetQuiz = (quizName) => {
        setQuizChoosen(quizName);
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>{'VIEW QUIZ'}</h1>
            <div className={cx('container')}>
                {!ready ? (
                    <>
                        <div className={cx('container-left')}>
                            <div className={cx('quiz-name-label')}> Your Quiz</div>
                            <div className={cx('quiz-container')}>
                                {Object.keys(quiz).map((quizItem, index) => (
                                    <div
                                        key={index}
                                        className={cx('quiz-name')}
                                        onClick={() => handleSetQuiz(quizItem)}
                                    >
                                        {quizItem}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {quizChoosen && (
                            <QuizQuestionView data={quiz[quizChoosen]} quizName={quizChoosen} setReady={setReady} />
                        )}
                    </>
                ) : (
                    <Ready data={quiz[quizChoosen]} />
                )}
            </div>
        </div>
    );
}

export default View;
