


const actionIncremented = () => {
    return {
        type: 'INCREMENT',
        payload: 1
    }
}

const actionDecremented = () => {
    return {
        type: 'DECREMENT',
        payload: -1 
    }
}

export { actionIncremented, actionDecremented } 