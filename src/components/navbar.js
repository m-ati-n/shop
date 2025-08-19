import React,{useContext} from 'react'
import { cardcontext } from '../products/buttons'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'
import icon from '../icons/shop.svg'

function Navbar() {
    const {state} = useContext(cardcontext)
    return (
        <div className={styles.container}>
            <Link to={'/products'} className={styles.contpr}>Products</Link>
            <div className={styles.pay}>
                <Link to={'/pay'}><img src={icon} alt=''></img></Link>
                <div className={styles.count}>{state.counter}</div>
            </div>
        </div>
    )
}

export default Navbar
