import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './View.module.scss';
import QuizQuestion from '~/components/QuizQuestion';

const cx = classNames.bind(styles);

function QuizQuestionView({ data }) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.scrollIntoView(true);
    }, []);

    return (
        <div ref={ref} className={cx('container-right')}>
            <div className={cx('cnt-question')}>
                Số lượng câu hỏi:
                <span> {data.length}</span>
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
