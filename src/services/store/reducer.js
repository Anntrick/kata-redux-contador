const initialState = {
    amount: 0
}

const counterReducer = (state = initialState, action) =>   {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                amount: state.amount + 1
            }     
        case 'DECREMENT':
            return {
                ...state,
                amount: state.amount - 1
            }  
        default:
            return state
    }
} 


export default counterReducer