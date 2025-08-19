import React , {useContext}from 'react'
import { splited , check } from './functions'
import { Link } from 'react-router-dom'
import styles from './card.module.css'
import icon from '../icons/trash.svg'

import { cardcontext } from '../products/buttons'

function Card({data}) {

    const {state , dispath} = useContext(cardcontext)
    const itemInCart = state.selectedItems.find(item => item.id === data.id);

return (
    <div className={styles.card}>
        <div className={styles.img}>
        <img src={data.image} alt="product" style={{ width: "190px", height: "200px" }} />
        </div>
        <div className={styles.name}>
            <span>{splited(data.title)}</span>
            <p>{data.price} $</p>
        </div>
        <div className={styles.buttons}>
            <div className={styles.detail}>
            <Link to={`/products/${data.id}`}>Detail</Link>
            </div>
            <div>
            {check(state, data.id) && itemInCart?.quantity === 1 &&
                <button onClick={() => dispath({ type: "REMOVE", payload: data })}><img src={icon} alt='remove' className={styles.trash}></img></button>}
            {check(state, data.id) && itemInCart?.quantity > 1 &&
                <button onClick={() => dispath({ type: "DOWN", payload: data })} className={styles.button}><p>-</p></button>}
            <span>
                {check(state, data.id)
                    ? itemInCart?.quantity ?? 0
                    : ''}
            </span>
            {check(state, data.id)
                ? <button onClick={() => dispath({ type: "PLUS", payload: data })} className={styles.button}><p>+</p></button>
                : <button onClick={() => dispath({ type: "ADD", payload: data })} className={styles.ADD}>ADD</button>}
            </div>
        </div>
    </div>
);
}

export default Card
