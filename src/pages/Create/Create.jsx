import classNames from 'classnames/bind';
import styles from './Create.module.scss';
import QuizQuestion from './components/QuizQuestion';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Create() {
    const [quizName, setQuizName] = useState('');
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>CREATE YOUR QUIZ</h1>
            <div className={cx('quiz-info')}>
                <div className={cx('quiz-info-container')}>
                    <label className={cx('quiz-name-label')}>Quiz Name</label>
                    <input
                        htmlFor="quiz-name"
                        className={cx('quiz-name-inp')}
                        type="text"
                        onChange={(e) => setQuizName(e.target.value)}
                    />
                </div>
            </div>
            <QuizQuestion quizName={quizName} />
        </div>
    );
}

export default Create;
