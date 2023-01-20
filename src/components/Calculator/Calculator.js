import { Slider } from '@mui/material'
import { useState } from "react";
import { AiOutlineInfoCircle } from 'react-icons/ai'
import styles from './Calculator.module.css'

const Calculator = () => {
  const [sliderValue, setSliderValue] = useState(750000)
  const [buttonSelected, setButtonSelected] = useState(0)
  const [valueToMultiply, setValueToMultiply] = useState(1.05)
  console.log(sliderValue.toLocaleString().replace(/\D/g, " "))

  const handleButtonPress = (index, value) => {
    setButtonSelected(index)
    setValueToMultiply(value)
  }
  console.log(valueToMultiply)

  return (
    <div className={styles.calculatorContainer}>
        <div className={styles.titleContainer}>
            <div className={styles.title}>
                Посчитать возможный доход 
                <div className={styles.infoIcon}>
                    <AiOutlineInfoCircle />
                </div>
            </div>

            <div className={styles.investSumContainer}>
                <span className={styles.investSumTitle}>
                    Сумма инвестирования
                </span>
                <span className={styles.investSumValue}>
                    ${sliderValue.toLocaleString().replace(/\D/g, " ")}
                </span>
            </div>
        </div>
       <div className={styles.sliderContainer}>
        <Slider
             value={sliderValue}
             onChange={(event, newValue) => setSliderValue(newValue)}
             min={10000}
             max={2000000}
             defaultValue={750000}
             style={{ width: "300px", color:'black' }}
             className={styles.slider}
        />
       </div>
       <div className={styles.rangeNumsContainer}>
        <span className={styles.firstRangeNum}>$10 000</span>
        <span className={styles.secondRangeNum}>2 000 000$</span>
       </div>

       <div className={styles.investDueContainer}>
        <span className={styles.investDue}>Срок Инвестирования</span>
        <div className={styles.buttons}>
            <div className={styles.firstRowButtons}>
                <button className={buttonSelected === 0 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress(0, 1.05)}>1 год</button>
                <button className={buttonSelected === 1 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress(1, 1.07)}>2 года</button>
                <button className={buttonSelected === 2 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress(2, 1.08)}>3 года</button>
            </div>
            <div className={styles.secondRowButtons}>
                <button className={buttonSelected === 3 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress(3, 1.12)}>4 года</button>
                <button className={buttonSelected === 4 ? styles.buttonSelected : styles.button} onClick={() => handleButtonPress(4, 1.14)}>5 лет</button>
            </div>
        </div>
       </div>

       <div className={styles.incomeContainer}>
            <span className={styles.incomeTitle}>Предпологаемый доход</span>
            <span className={styles.incomeValue}>${Math.round(sliderValue * valueToMultiply).toLocaleString().replace(/\D/g, " ")}</span>
       </div>
    </div>
  );
}

export default Calculator