import React , {useContext} from 'react'
import Card from './card';
import styles from './store.module.css'

import { productsContext } from '../products/productsContext'

function Store() {

    const products = useContext(productsContext)

    if (!products || products.length === 0) {
        return <div className={styles.load}>Loading ...</div>;
    }

    return (
        <div className={styles.products}>
        <div className={styles.cards}>
            {products.map(item => {return(<Card key={item.id} data={item}/>)})}
        </div>
        </div>
    )
}

export default Store
