import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './QuizQuestion.module.scss';
import AnswerOption from './AnswerOption';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add, change } from '~/store/Reducers/quiz';
import Dialog from '~/components/Dialog';

const cx = classNames.bind(styles);

// const bgColor = ['blue', 'green', 'yellow', 'pink'];
function QuizQuestion({ quizName }) {
    const [idxChange, setIdxChange] = useState(0);
    const quiz = useSelector((state) => state.quizReducer);
    const dispatch = useDispatch();
    const [question, setQuestion] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [optionD, setOptionD] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const quizData = {
        quizName,
        question,
        optionA,
        optionB,
        optionC,
        optionD,
    };

    const handleClear = () => {
        setIdxChange(0);
        setQuestion('');
        setOptionA('');
        setOptionB('');
        setOptionC('');
        setOptionD('');
    };

    const handleAdd = () => {
        dispatch(add(quizData));
        handleClear();
    };

    const handleChange = () => {
        quizData.index = idxChange - 1;
        dispatch(change(quizData));
        setOpenDialog(true);
    };

    const handleShowQuestion = (index) => {
        setIdxChange(index);
        setQuestion(quiz[quizName][index - 1].question);
        setOptionA(quiz[quizName][index - 1].options[0]);
        setOptionB(quiz[quizName][index - 1].options[1]);
        setOptionC(quiz[quizName][index - 1].options[2]);
        setOptionD(quiz[quizName][index - 1].options[3]);
    };

    return (
        <div className={cx('wrapper')}>
            {openDialog && <Dialog isOpen={openDialog} setOpen={setOpenDialog} message="Bạn đã thay đổi thành công" />}
            <div className={cx('container-left')}>
                <div className={cx('quiz-question')}>
                    <div className={cx('question')}>
                        <textarea
                            value={question}
                            className={cx('question-inp')}
                            rows="2"
                            cols="50"
                            placeholder="Your Question..."
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>
                    <div className={cx('answer-container')}>
                        {/* {bgColor.map((item, index) => {
                            let charac = 'A' + index;
                            return <AnswerOption bgColor={item} charac={charac} />;
                        })} */}
                        <AnswerOption bgColor="blue" setOption={setOptionA} value={optionA} />
                        <AnswerOption bgColor="green" setOption={setOptionB} value={optionB} />
                        <AnswerOption bgColor="yellow" setOption={setOptionC} value={optionC} />
                        <AnswerOption bgColor="pink" setOption={setOptionD} value={optionD} />
                    </div>
                </div>
            </div>
            <div className={cx('container-right')}>
                <div className={cx('cnt-question')}>
                    <div className={cx('cnt-question-title')}>Questions</div>
                    <div className={cx('cnt-question-container')}>
                        {!!quiz[quizName] &&
                            quiz[quizName].map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('cnt-question-item')}
                                    onClick={() => handleShowQuestion(index + 1)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                    </div>
                </div>
                <div className={cx('list-btn')}>
                    <Button disabled={idxChange} color="primary" onClick={handleAdd} className={cx('btn')}>
                        Add
                    </Button>
                    <Button disabled={!idxChange} color="primary" onClick={handleChange} className={cx('btn')}>
                        Change
                    </Button>
                    <Button color="primary" onClick={handleClear} className={cx('btn')}>
                        New
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default QuizQuestion;
