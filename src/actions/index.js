export const increment = () =>{
    return{
        type : 'INCREMENT'
    }
}

export const decrement = () =>{
    return {
        type : 'DECREMENT'
    }
}

export const  incrementByAmount = payload =>{
    return {
        type : 'INCREMENRTBYAMOUNT',
        payload 
    }
}