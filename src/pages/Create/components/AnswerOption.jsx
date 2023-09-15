import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './QuizQuestion.module.scss';

const cx = classNames.bind(styles);

function AnswerOption({ bgColor = 'transparent', setOption, value }) {
    return (
        <div className={cx('answer-item')} style={{ backgroundColor: bgColor }}>
            <textarea
                value={value}
                className={cx('answer-item-inp')}
                placeholder="Your value option..."
                rows="3"
                cols="50"
                onChange={(e) => setOption(e.target.value)}
            />
        </div>
    );
}

AnswerOption.propTypes = {
    bgColor: PropTypes.string.isRequired,
    charac: PropTypes.string.isRequired,
};

export default AnswerOption;
