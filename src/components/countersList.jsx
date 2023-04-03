import React, { useState } from 'react'
import Counter from './counter'
import { Button, Space } from 'antd'
const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Unnecessary item ' },
        { id: 1, value: 0, name: 'Spoon' },
        { id: 2, value: 0, name: 'Fork' },
        { id: 3, value: 0, name: 'Plate' },
        { id: 4, value: 0, name: 'Minimalist kit' }
    ]
    const [counters, setCounters] = useState(initialState)
    const handleDelete = id => setCounters(counters.filter(counter => counter.id !== id))
    const handleReset = () => setCounters(initialState)

    const handleDecrement = id => {
        const elementIndex = counters.findIndex(count => count.id === id)
        const newCounters = [...counters]
        newCounters[elementIndex].value--
        setCounters(newCounters)
    }
    const handleIncrement = id => {
        const elementIndex = counters.findIndex(count => count.id === id)
        const newCounters = [...counters]
        newCounters[elementIndex].value++
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map(counter =>
                <Counter
                    key={counter.id}
                    // id={counter.id}
                    // value={counter.value}
                    // name={counter.name}
                    {...counter}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                    onDelete={handleDelete}
                />
            )}
            <Space>
            <Button
                type='primary'
                size='small'
                style={{ height: '24px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'greenyellow',
                }}
                onClick={handleReset}
            >
                <span style={{ fontFamily: 'Anton, sans-serif', color: 'black'}}>Reset</span>
            </Button>
            </Space>
        </>
    )
}

export default CountersList