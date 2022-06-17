import { useEffect } from 'react'
import store from '../../services/store'
import { actionDecremented, actionIncremented } from '../../services/store/actions'


const Contador = () => {
    const [counter, setCounter] = useState()

    useEffect(() => {
        try {
            cont = store.getState().counterReducer
        } catch (error) {
            console.log(error)
        }    
    }, [])

    const increment = () => {
        setCounter(prevCounter => prevCounter ++)
    }

    const decrement = () => {
        setCounter(prevCounter => prevCounter --)
    }

    return (
        <div> 
            <h2>Contador Redux</h2>
            
            <span>{counter}</span>
            <button onClick={()=> actionIncremented}>+</button>
            <button onClick={() => actionDecremented}>-</button>
        </div>
    )
}

export default Contador