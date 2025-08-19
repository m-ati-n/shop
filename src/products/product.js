import React , {useContext}from 'react'
import { check } from '../components/functions'
import { useParams } from 'react-router-dom'
import styles from './product.module.css'

import { cardcontext } from './buttons'
import { productsContext } from './productsContext'

import icon from '../icons/trash.svg'

function Product() {
    const { state, dispath } = useContext(cardcontext);
    const products = useContext(productsContext);
    const { id } = useParams();
    const numericId = Number(id);

    if (!products || products.length === 0) {
        return <div className={styles.load}>Loading ...</div>;
    }

    const product = products[numericId - 1];

    return (
        <div className={styles.container}>
            <div className={styles.card}>
            <div className={styles.img}>
            <img src={product.image} alt="product" style={{ width: "150px", height: "200px" }} />
            </div>
            <div className={styles.details}>
                <p><span>Title:</span> {product.title}</p>
                <p><span>Price:</span> {product.price} $</p>
                <p><span>Category:</span> {product.category}</p>
                <p><span>Description:</span> {product.description}</p>
            </div>
            </div>
            <div className={styles.buttons}>
                <p><span>rate:</span>{product.rating.rate} </p>
                <div className={styles.butt}>
                {check(state, numericId) && state.selectedItems.find(item => item.id === numericId)?.quantity === 1 &&
                    <button onClick={() => dispath({ type: "REMOVE", payload: product })}><img src={icon} alt='remove' className={styles.trash}></img></button>}
                {check(state, numericId) && state.selectedItems.find(item => item.id === numericId)?.quantity > 1 &&
                    <button onClick={() => dispath({ type: "DOWN", payload: product })} className={styles.button}><p>-</p></button>}
                <span>
                    {check(state, numericId)
                        ? state.selectedItems.find(item => item.id === numericId)?.quantity ??0
                        : ''}
                </span>
                {check(state, numericId)
                    ? <button onClick={() => dispath({ type: "PLUS", payload: product })} className={styles.button}><p>+</p></button>
                    : <button onClick={() => dispath({ type: "ADD", payload: product })} className={styles.ADD}>ADD</button>}
                </div>
            </div>
        </div>
    );
}


export default Product
