import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './QuizPlaying.module.scss';
import { useEffect, useState } from 'react';
import QuizQuestion from '~/components/QuizQuestion';
import ShowResult from './ShowResult';

const cx = classNames.bind(styles);
let idTimeout = null;
let idRemainTime = null;
let idRemainTimeRange = null;

function QuizPlaying({ listQuestion, time }) {
    const [questionShowIndex, setQuestionShowIndex] = useState(0);
    const [remainTime, setRemainTime] = useState(time);
    const [remainTimeRange, setRemainTimeRange] = useState(0);
    const [answer, setAnswer] = useState(null);
    const [stop, setStop] = useState(false);
    const [currCorrectAnswer, setCurrCorrectAnswer] = useState(null);
    const [appearLogger, setAppearLogger] = useState(null);

    const rangeRef = useRef(null);
    useEffect(() => {
        if (stop) return;
        setRemainTime(time);
        setRemainTimeRange(0);
        setAnswer(null);
        if (questionShowIndex === listQuestion.length - 1) return;
        idTimeout = setTimeout(() => {
            setStop(true);
        }, (time + 1) * 1000);
        idRemainTime = setInterval(() => {
            setRemainTime((prev) => prev - 1);
        }, 1000);
        idRemainTimeRange = setInterval(() => {
            setRemainTimeRange((prev) => prev + step / (1000 / 30));
        }, 30);
    }, [questionShowIndex, stop]);

    useEffect(() => {
        if (!rangeRef.current) return;
        // console.log(remainTimeRange);
        // console.log(`${((time - remainTimeRange) / time) * 100}`);
        // const temp_step = ((time - remainTimeRange) / time) * 100;
        rangeRef.current.style.width = `${remainTimeRange}%`;
        rangeRef.current.style.transition = 'all .6s';
    });

    useEffect(() => {
        if (!stop || appearLogger) return;
        clearTimeout(idTimeout);
        clearInterval(idRemainTime);
        clearInterval(idRemainTimeRange);
        console.log(listQuestion[questionShowIndex].correctOption);
        setCurrCorrectAnswer(listQuestion[questionShowIndex].correctOption);
        setTimeout(() => {
            setAppearLogger(true);
        }, 3000);
    }, [stop]);

    useEffect(() => {
        if (appearLogger === null || appearLogger === true) return;
        setStop(false);
        setQuestionShowIndex((prev) => prev + 1);
    }, [appearLogger]);

    const step = 100 / time;

    console.log(remainTime);

    return (
        <div className={cx('wrapper')}>
            {!appearLogger && (
                <>
                    <div className={cx('header')}>
                        <div className={cx('question-order')}>Câu hỏi {questionShowIndex + 1}</div>
                        <div className={cx('remain-time')}>
                            <div
                                className={cx('remain-time-value', {
                                    'time-up': remainTime < time / 3,
                                })}
                            >
                                <span>{remainTime}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('remain-time-range-container')}>
                        {remainTime >= 0 && (
                            <div
                                ref={rangeRef}
                                className={cx('remain-time-range', {
                                    'range-time-up': remainTime < time / 3,
                                })}
                            ></div>
                        )}
                    </div>
                    <div className={cx('container')}>
                        <QuizQuestion
                            isInp={false}
                            data={listQuestion[questionShowIndex]}
                            setAnswer={setAnswer}
                            isPlaying
                            answerChoosen={answer}
                            currCorrectAnswer={currCorrectAnswer}
                            isCheck={stop}
                        />
                    </div>
                </>
            )}
            {appearLogger && <ShowResult setAppearLogger={setAppearLogger} />}
        </div>
    );
}

export default QuizPlaying;
