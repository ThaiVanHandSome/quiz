import classNames from 'classnames/bind';
import styles from './Create.module.scss';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useDebounce from '~/hooks/useDebounce';
import { Alert, Button } from 'reactstrap';
import CreateQuiz from './CreateQuiz';
const cx = classNames.bind(styles);

function Create() {
    const quiz = useSelector((state) => state.quizReducer);
    const [quizName, setQuizName] = useState('');
    const [checkName, setCheckName] = useState(false);
    const [apply, setApply] = useState(false);

    const quizNameVal = useDebounce(quizName);

    const handleApply = () => {
        setApply(true);
        setCheckName(false);
    };

    useEffect(() => {
        let check = true;
        Object.keys(quiz).forEach((item) => {
            if (item === quizNameVal) {
                check = false;
                return;
            }
        });
        setCheckName(check);
    }, [quizNameVal]);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>CREATE YOUR QUIZ</h1>
            <div className={cx('quiz-info')}>
                <div className={cx('quiz-info-container')}>
                    <label className={cx('quiz-name-label')}>Quiz Name</label>
                    <input
                        htmlFor="quiz-name"
                        className={cx('quiz-name-inp', {
                            disable: apply,
                        })}
                        type="text"
                        onChange={(e) => setQuizName(e.target.value)}
                    />
                    <Button className={cx('choose-btn')} disabled={!checkName} color="primary" size="lg" onClick={handleApply}>
                        Choose
                    </Button>
                </div>
                {!checkName && !apply && (
                    <Alert className={cx('alert')} color="danger">
                        You must enter another quiz name!
                    </Alert>
                )}
            </div>
            {apply && <CreateQuiz quizName={quizName} />}
        </div>
    );
}

export default Create;
