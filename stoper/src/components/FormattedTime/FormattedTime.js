import styles from './FormattedTime.module.scss';
const FormattedTime = props => {

    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;
    const second = 1000;

    let miliseconds = props.time;
    const hours = Math.floor(props.time/hour);
    miliseconds -= hours * hour;

    const minutes = Math.floor(miliseconds/minute);
    miliseconds -= minutes * minute;

    const seconds = Math.floor(miliseconds/second);
    miliseconds -= seconds * second;

    console.log(props.time);
    return(
        <div className={styles.timer}>
            {/*<span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((props.time / 10) % 100)).slice(-2)}:</span>
            <span>{("0" + (props.time / 10) % 100).slice(-2)}</span>*/}
        {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{miliseconds.toString().padStart(4, "0")}
        </div>
    )
};


export default FormattedTime;