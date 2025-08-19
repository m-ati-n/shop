export const splited = (name) => {
    const newname = name.split(" ");
    const newn = `${newname[0]} ${newname[1]}`;
    return newn;
}

export const check = (state , id) =>{
    const result = !!state.selectedItems.find(item => item.id === id)
    return result
}