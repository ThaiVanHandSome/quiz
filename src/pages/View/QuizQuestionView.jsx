import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './View.module.scss';
import QuizQuestion from '~/components/QuizQuestion';
import { Button } from 'reactstrap';

const cx = classNames.bind(styles);

function QuizQuestionView({ data, quizName, setReady }) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.scrollIntoView(true);
    }, []);

    return (
        <div ref={ref} className={cx('container-right')}>
            <div className={cx('question-header')}>
                <div className={cx('question-header-name')}>
                    Quiz:
                    <span> {quizName}</span>
                </div>
                <Button color="warning" className={cx('play-btn')} onClick={() => setReady(true)}>
                    Play
                </Button>
                <div className={cx('cnt-question')}>
                    Số lượng câu hỏi:
                    <span> {data.length}</span>
                </div>
            </div>
            <div className={cx('list-questions-container')}>
                <div className={cx('list-questions')}>
                    {data.map((item, index) => (
                        <div className={cx('question')}>
                            <div className={cx('question-order')}>
                                Câu hỏi
                                <span> {index + 1}</span>
                            </div>

                            <QuizQuestion isInp={false} data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default QuizQuestionView;
