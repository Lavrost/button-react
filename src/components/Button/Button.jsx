import classnames from 'classnames';

export const Button = (props) => {
    const {
        color,
        text,
        size
    } = props;
    return (
        <button
            className={classnames(color, size)}
        >
            { text }
        </button>
    )
}