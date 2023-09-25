import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Create.module.scss';
import Dialog from '~/components/Dialog';
import { Button } from 'reactstrap';

import QuizQuestion from '~/components/QuizQuestion';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function CreateQuiz({ quizName }) {
    const quiz = useSelector((state) => state.quizReducer);
    const [openDialog, setOpenDialog] = useState(false);
    const [questionShow, setQuestionShow] = useState(0);
    const [add, setAdd] = useState(false);
    const [change, setChange] = useState(false);
    const [clear, setClear] = useState(false);
    const [currQuestion, setCurrQuestion] = useState(1);
    const [dataSuccessful, setDataSuccessful] = useState(null);
    const [startCheckData, setStartCheckData] = useState(false);

    const handleAdd = () => {
        if (!startCheckData) setStartCheckData(true);
        else if (dataSuccessful) {
            setAdd(true);
            setCurrQuestion(currQuestion + 1);
            setStartCheckData(false);
        }
    };

    const handleShowQuestion = (index) => {
        setQuestionShow(index);
        setCurrQuestion(index);
    };

    const handleClear = () => {
        setClear(true);
        setQuestionShow(0);
        setCurrQuestion(!quiz[quizName] ? 1 : quiz[quizName].length + 1);
    };

    return (
        <div className={cx('create-quiz-container')}>
            {openDialog && <Dialog isOpen={openDialog} setOpen={setOpenDialog} message="Bạn đã thay đổi thành công" />}
            <div className={cx('container-left')}>
                <div className={cx('curr-question')}>
                    Câu hỏi
                    <span> {currQuestion}</span>
                </div>
                <QuizQuestion
                    startCheckData={startCheckData}
                    setDataSuccessful={setDataSuccessful}
                    setStartCheckData={setStartCheckData}
                    isAdd={add}
                    setAdd={setAdd}
                    quizName={quizName}
                    isChange={change}
                    setChange={setChange}
                    isClear={clear}
                    setClear={setClear}
                    indexQuestion={questionShow}
                    dataSuccessful={dataSuccessful}
                    setCurrQuestion={setCurrQuestion}
                />
            </div>
            <div className={cx('container-right')}>
                <div className={cx('cnt-question')}>
                    <div className={cx('cnt-question-title')}>Questions</div>
                    <div className={cx('cnt-question-container')}>
                        {!!quiz[quizName] &&
                            quiz[quizName].map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('cnt-question-item', {
                                        'question-active': questionShow === index + 1,
                                    })}
                                    onClick={() => handleShowQuestion(index + 1)}
                                >
                                    {index + 1}
                                </div>
                            ))}
                    </div>
                </div>
                <div className={cx('list-btn')}>
                    <Button disabled={questionShow} color="primary" onClick={handleAdd} className={cx('btn')}>
                        Add
                    </Button>
                    <Button
                        disabled={!questionShow}
                        color="primary"
                        onClick={() => setChange(true)}
                        className={cx('btn')}
                    >
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

export default CreateQuiz;
