import { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, change } from '~/store/Reducers/quiz';
import classNames from 'classnames/bind';
import styles from './QuizQuestion.module.scss';

import QuizOption from './QuizOption';

const cx = classNames.bind(styles);

const bgVal = ['yellow', 'green', 'pink', 'blue'];
function QuizQuestion({
    data = {},
    isInp = true,
    quizName,
    indexQuestion = 0,
    isAdd,
    setAdd,
    isChange,
    setChange,
    isClear,
    setClear,
}) {
    const quiz = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [correctOption, setCorrectOption] = useState(null);

    const quizData = {
        quizName,
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        correctOption: correctOption,
    };

    const handleClear = () => {
        setQuestion('');
        setOptionA('');
        setOptionB('');
        setOptionC('');
        setOptionD('');
        setCorrectOption(null);
    };

    // const handleChange = () => {
    //     dispatch(change(quizData));
    // };

    const handleShowQuestion = (index) => {
        setQuestion(quiz[quizName][index - 1].question);
        setOptionA(quiz[quizName][index - 1].options[0]);
        setOptionB(quiz[quizName][index - 1].options[1]);
        setOptionC(quiz[quizName][index - 1].options[2]);
        setOptionD(quiz[quizName][index - 1].options[3]);
        setCorrectOption(quiz[quizName][index - 1].correctOption);
    };

    useEffect(() => {
        if (isAdd === false) return;
        dispatch(add(quizData));
        setAdd(false);
        handleClear();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAdd]);

    useEffect(() => {
        if (isClear === false) return;
        setClear(false);
        handleClear();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isClear]);

    useEffect(() => {
        if (isChange === false) return;
        quizData.index = indexQuestion - 1;
        dispatch(change(quizData));
        setChange(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isChange]);

    useEffect(() => {
        if (indexQuestion === 0) return;
        handleShowQuestion(indexQuestion);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [indexQuestion]);

    const funcSetOptions = [setOptionA, setOptionB, setOptionC, setOptionD];
    const valueOptions = [optionA, optionB, optionC, optionD];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('question')}>
                {!isInp && <div className={cx('question-label')}>{data.question}</div>}
                {isInp && (
                    <textarea
                        value={question}
                        className={cx('question-inp')}
                        rows="2"
                        cols="50"
                        placeholder="Your Question..."
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                )}
            </div>
            <div className={cx('quiz-option-container')}>
                {bgVal.map((bgColor, index) => {
                    let valOption = valueOptions[index];
                    if (!isInp) valOption = data.options[index];
                    return (
                        <QuizOption
                            bgColor={bgColor}
                            isInp={isInp}
                            value={valOption}
                            setValueOption={funcSetOptions[index]}
                            isCorrectOption={index === correctOption}
                            handleSetCorrectOption={() => setCorrectOption(index)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default QuizQuestion;
