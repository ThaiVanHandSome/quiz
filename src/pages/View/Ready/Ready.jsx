import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Ready.module.scss';
import useDebounce from '~/hooks/useDebounce';
import QuizPlaying from '../QuizPlaying';

const cx = classNames.bind(styles);

const firstHeading = 'Hi You! You are welcome!';
let idRemainTime;

function Ready({ data }) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const refBtnReady = useRef(null);
    const [ready, setReady] = useState(false);
    const [timeValue, setTimeValue] = useState('');
    const [start, setStart] = useState(false);
    const [remainTime, setRemainTime] = useState(3);
    const [wait, setWait] = useState(false);
    const [playing, setPlaying] = useState(false);

    const debouncedTime = useDebounce(timeValue, 600);

    useEffect(() => {
        const idTimeout1 = setTimeout(() => {
            ref1.current.style.opacity = '1';
            ref1.current.style.transform = 'translateY(0)';
            const listSpans = document.querySelectorAll(`.${cx('heading-1-span')}`);
            for (var i = 0; i < listSpans.length; i++) {
                listSpans[i].style.animationDelay = `${0.1 * i}s`;
            }
        }, 10);
        const idTimeout2 = setTimeout(() => {
            ref2.current.style.opacity = '1';
            ref2.current.style.transform = 'translateY(0)';
        }, 2000);
        const idBtnReady = setTimeout(() => {
            refBtnReady.current.style.opacity = '1';
            refBtnReady.current.style.transform = 'translateY(0)';
        }, 4000);
        const idAllTimeout = setTimeout(() => {
            refBtnReady.current.style.pointerEvents = 'all';
            ref1.current.style.pointerEvents = 'all';
            ref2.current.style.pointerEvents = 'all';
        }, 4010);
        return () => {
            clearTimeout(idTimeout1);
            clearTimeout(idTimeout2);
            clearTimeout(idBtnReady);
            clearTimeout(idAllTimeout);
        };
    }, []);

    useEffect(() => {
        setStart(false);
        if (debouncedTime.length === 0) return;
        if (debouncedTime[0] === '0') return;
        for (var i = 0; i < debouncedTime.length; i++) {
            if (/^[a-zA-Z]+$/.test(debouncedTime[i])) {
                return;
            }
        }
        const num = parseInt(debouncedTime);
        if (num === 0) return;
        setStart(true);
    }, [debouncedTime]);

    const handleSetTime = (e) => {
        setTimeValue(e.target.value);
    };

    const handleWait = () => {
        setWait(true);
        idRemainTime = setInterval(() => {
            setRemainTime((prev) => prev - 1);
        }, 1000);
    };

    useEffect(() => {
        if (remainTime > 0) return;
        clearTimeout(idRemainTime);
        setPlaying(true);
    }, [remainTime]);

    return (
        <div className={cx('wrapper')}>
            {!playing ? (
                <div className={cx('container')}>
                    {wait && (
                        <div className={cx('overlay')}>
                            <span>{remainTime}</span>
                        </div>
                    )}
                    <div ref={ref1} className={cx('heading-1')}>
                        {Array.from(firstHeading).map((content, index) => (
                            <span key={index} className={cx('heading-1-span')}>
                                {content}
                            </span>
                        ))}
                    </div>
                    <div ref={ref2} className={cx('heading-2')}>
                        Bạn Đã Sẵn Sàng Để Làm Bài Rồi Chứ
                    </div>
                    <button
                        ref={refBtnReady}
                        className={cx('btn-ready', {
                            disable: ready,
                        })}
                        onClick={() => setReady(true)}
                    >
                        Ready
                    </button>
                    {ready && (
                        <div className={cx('time-per-question')}>
                            <label>Bạn hãy nhập thời gian cho mỗi câu hỏi</label>
                            <input value={timeValue} type="text" onChange={(e) => handleSetTime(e)} />
                        </div>
                    )}
                    {start && (
                        <button className={cx('btn-play')} onClick={handleWait}>
                            Start
                        </button>
                    )}
                </div>
            ) : (
                <QuizPlaying listQuestion={data} time={parseInt(timeValue)} />
            )}
        </div>
    );
}

export default Ready;
