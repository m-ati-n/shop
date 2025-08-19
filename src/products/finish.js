import React ,{useContext} from 'react'
import { cardcontext } from './buttons'
import { Link } from 'react-router-dom';
import styles from './finish.module.css'

import Items from './items';

function Finish() {

    const { state, dispath } = useContext(cardcontext);
     if(state.total !== 0){
    return (
        <div className={styles.details}>
        <div>
            {state.selectedItems.map(item => {return(<Items key={item.id} data={item}/>)})}
        </div>
        <div className={styles.finish}>
            <p><span>Itemscount:</span> {state.counter}</p>
            <p><span>Total:</span> {state.total.toFixed(2)} $</p>
            <div>
                <button onClick={() => dispath({ type: "CHECKOUT"})}>Check</button>
                <button onClick={() => dispath({ type: "CLEAR"})}>Clear</button>
            </div>
        </div>
        </div>
    )
}else if( state.checkedout ){
    state.checkedout = false
        return(
            <div className={styles.container}>
            <div className={styles.pay}>
                <p>The operation was successsful</p>
                <div>
                <Link to={'/products'}>Go to shop</Link>
                </div>
            </div>
            </div>
        )
    }
    else{
        return(
            <div className={styles.container}>
            <div className={styles.emty}>
                <p>You don't chose anything</p>
                <div>
                <Link to={'/products'}>Go to shop</Link>
                </div>
            </div>
            </div>
        )
    }
}

export default Finish
