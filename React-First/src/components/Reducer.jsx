import React, { useReducer, useState } from 'react'

const reducer_fun = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state, count:state.count + 1}
        case 'sub':
            return {...state, count:state.count - 1}
        case 'hidden':
            return {...state, hidden:!state.hidden}
        default:
            return state
    }
}
const Reducer = () => {
    // const [count, setCount] = useState(0)
    // const [hidden, setHidden] = useState(false)

    const [state, dispatch] = useReducer(reducer_fun, {
        count: 0,
        hidden: false
    })

    return (
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={() => {
                dispatch({type:'add'})
            }}>Add</button>
            <button onClick={() => {
                dispatch({type:'sub'})
            }}>Sub</button>
            <button onClick={() => {
                dispatch({type:'hidden'})
            }}>Hide</button>


            {/* <h1>Count: {count}</h1> */}
            {/* <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Sub</button>
            <button onClick={() => setHidden(!hidden)}>Hide</button> */}
            {state.hidden ? <h1>Hidden</h1> : <h1>Not Hidden</h1>}
        </>
    )
}

export default Reducer