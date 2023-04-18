import Button from './components/Button/Button';
import React, {useEffect, useState} from "react";
import FormattedTime from './components/FormattedTime/FormattedTime';
import styles from './components/Button/Button.module.scss';


const App = () => {

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);


  useEffect(() => {
    let interval = null;

    if(start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 50)
      }, 50)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [start]);
  

  return(
    <div>
      <FormattedTime time={time} />
        <div className={styles.box}>
          <Button action={() => setStart(true)}>START</Button>
          <Button action={() => setStart(false)}>STOP</Button>
          <Button action={() => setTime(0)}>RESET</Button>
        </div>
    </div>
  )

};

export default App;
