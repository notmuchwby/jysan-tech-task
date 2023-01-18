import { useState } from 'react'
import styles from './Navlist.module.css'

const Navlist = () => {
    const [listSelected, setListSelected] = useState(null)

    const handleClick = (index) => {
        setListSelected(index)
    }

    return (
        <div className={styles.navlistContainer}>
            <ul className={styles.navlist}>
                <li className={listSelected === 0 ? styles.listSelected : null} onClick={() => handleClick(0)}>ОБЗОР</li>
                <li className={listSelected === 1 ? styles.listSelected : null} onClick={() => handleClick(1)}>ИНФОРМАЦИЯ</li>
                <li className={listSelected === 2 ? styles.listSelected : null} onClick={() => handleClick(2)}>СТРУКТУРА</li>
                <li className={listSelected === 3 ? styles.listSelected : null} onClick={() => handleClick(3)}>ДОКУМЕНТ</li>
            </ul>
        </div>
    )
}

export default Navlist