import styles from './Stats.module.css';
import { AiOutlineInfoCircle } from 'react-icons/ai'

const Stats = () => {
    return (
        <div className="statsContainer">
            <div className={styles.firstStatContainer}>
                <div className={styles.firstTitle}>Уровень риска</div>
                <div className={styles.barAndTextContainer}>
                    <div className={styles.bars}>
                        <div className={styles.coloredBar}/>
                        <div className={styles.singleBar}/>
                        <div className={styles.singleBar}/>
                        <div className={styles.singleBar}/>
                        <div className={styles.singleBar}/>
                    </div>
                    <div className={styles.exp}>
                        <span>Низкий риск;</span>
                        <span>Консервативная доходность</span>
                    </div>
                </div>
            </div>

            <div className={styles.secondStatContainer}>
                <div className={styles.secondTitle}>
                    Доходность фонда 
                    <div className={styles.infoIcon}>
                        <AiOutlineInfoCircle />
                    </div>
                </div>
                <div className={styles.description}>
                    В годовых
                </div>
                <div className={styles.infoContainer}>
                        <div className={styles.singleInfo}>
                            <span className={styles.topValue}>YTD</span>
                            <span className={styles.bottomValue}>1.41%</span>
                        </div>
                        <div className={styles.singleInfo}>
                            <span className={styles.topValue}>6 мес.</span>
                            <span className={styles.bottomValue}>4.69%</span>
                        </div>
                        <div className={styles.singleInfo}>
                            <span className={styles.topValue}>1 год</span>
                            <span className={styles.bottomValue}>1.45%</span>
                        </div>
                        <div className={styles.singleInfo}>
                            <span className={styles.topValue}>Весь период</span>
                            <span className={styles.bottomValue}>1.89%</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Stats