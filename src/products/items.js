import React , {useContext}from 'react'
import  { cardcontext } from './buttons'
import styles from './items.module.css'
import icon from '../icons/trash.svg'


function Items({data}) {

    const { state, dispath } = useContext(cardcontext);

    return (
        <div className={styles.item}>
            <div><img src={data.image} className={styles.img}></img></div>
            <div><span className={styles.span}>Price:</span> {data.price} $</div>
            <div><span className={styles.span}>Total:</span> {(data.quantity * data.price).toFixed(2)} $</div>
            <div className={styles.buttons}>
                {state.selectedItems.find(item => item.id === data.id)?.quantity === 1 &&
                    <button onClick={() => dispath({ type: "REMOVE", payload: data })} style={{height: '30px'}}><img src={icon} alt='remove' className={styles.trash}></img></button>}
                {state.selectedItems.find(item => item.id === data.id)?.quantity > 1 &&
                    <button onClick={() => dispath({ type: "DOWN", payload: data })} className={styles.button}><p>-</p></button>}
                <span>
                    {data.quantity}
                </span>
                {<button onClick={() => dispath({ type: "PLUS", payload: data })} className={styles.button}><p>+</p></button>}
            </div>
        </div>
    )
}

export default Items
