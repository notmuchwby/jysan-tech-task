import styles from './Navbar.module.css'
import { BiArrowBack } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navTitleContainer}>
                <div className={styles.arrow}>
                    <BiArrowBack size={20}/>
                </div>  

                <div className={styles.navTitle}>
                    ИПИФ "Ликвидный"
                </div>
            </div>
        </div>
    )
}

export default Navbar