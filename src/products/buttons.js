import React ,{useReducer,createContext,useEffect} from 'react'

const initialstate = {
    selectedItems: [],
    total: 0,
    counter: 0,
    checkedout: false
}
const sum = items => {
    const counter = items.reduce((state , product) => state + product.quantity ,0)
    const total = items.reduce((state , product) => state + product.quantity * product.price ,0)
    return {counter,total}
}
const Reducer = (state , action) => {
    switch(action.type){
    case "ADD":
        if(!state.selectedItems.find(item => item.id === action.payload.id)){
            state.selectedItems.push({
                ...action.payload,
                quantity: 1,
            })
        }
        return {...state,selectedItems: [...state.selectedItems],...sum(state.selectedItems)}
    case "REMOVE":
        const newselected = state.selectedItems.filter(item => item.id !== action.payload.id)
        return{...state,selectedItems: [...newselected],...sum(newselected)}
    case "PLUS":
        const index = state.selectedItems.findIndex(item => item.id === action.payload.id)
        state.selectedItems[index].quantity++;
        return{...state,selectedItems:[...state.selectedItems],...sum(state.selectedItems)}
    case "DOWN":   
        const index2 = state.selectedItems.findIndex(item => item.id === action.payload.id)
        state.selectedItems[index2].quantity--;
        return{...state,selectedItems:[...state.selectedItems],...sum(state.selectedItems)}
    case "CLEAR":
        return{
            selectedItems: [],
            total: 0,
            counter: 0,
            checkedout: false
        }
    case "CHECKOUT":
        return{
            selectedItems: [],
            total: 0,
            counter: 0,
            checkedout: true
        }
    default:return{...state}
    }
}

export const cardcontext = createContext();

function Buttons({children}) {

    const savedItems = localStorage.getItem("cartItems");
    const initialData = savedItems
        ? { ...initialstate, selectedItems: JSON.parse(savedItems), ...sum(JSON.parse(savedItems)) }
        : initialstate;

    const [state , dispath] = useReducer(Reducer , initialData)

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.selectedItems));
    }, [state.selectedItems]);

    return (
        <cardcontext.Provider value={{state,dispath}}>
            {children}
        </cardcontext.Provider>
    )
}

export default Buttons
