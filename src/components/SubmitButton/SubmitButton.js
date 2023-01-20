import styles from './SubmitButton.module.css'

const SubmitButton = () => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.button}>Купить пай</button>
        </div>
    )
}

export default SubmitButton