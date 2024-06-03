import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [text, setText] = useState("posts")
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${text}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [text])
    return (
        <>
            <button onClick={() => setText('posts')}>Post</button>
            <button onClick={() => setText('users')}>User</button>
            <button onClick={() => setText('comments')}>Comments</button>
            {data?.map((item, i) => (
                <pre key={i}>
                    {JSON.stringify(item)}
                </pre>
            ))
            }
        </>
    )
}

export default FetchAPI