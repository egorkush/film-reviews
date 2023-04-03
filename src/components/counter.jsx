import React from 'react'
import { Badge, Button, Space } from 'antd'

const Counter = props => {
    const { value } = props
    const formatValue = () => value === 0 ? 'empty' : value
    const btnColor = () => value === 0 ? '#faad14' : '#1677ff'
    const handleIncrement = () => props.onIncrement(props.id)
    const handleDecrement = () => props.onDecrement(props.id)

    return (
        <div className='counter'>
            <span style={{color: 'goldenrod', fontFamily: 'Anton, sans-serif'}}>{props.name}</span>
            <Space style={{margin: '8px'}}>
            <Badge
                count={formatValue()}
                color={btnColor()}
                style={{borderRadius: '4px',
                    height: '24px',
                    width: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center'}}
            />
            <Button
                type='primary'
                size='small'
                style={{ height: '24px',
                    width: '24px' ,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'}}
                onClick={handleIncrement}
            >
                +
            </Button>
                <Button
                    type='primary'
                    size='small'
                    style={{ height: '24px',
                        width: '24px' ,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                }}
                    onClick={handleDecrement}
                >
                    -
                </Button>
                <Button
                    type='primary'
                    size='small'
                    style={{ height: '24px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'red',

                }}
                    onClick={() => props.onDelete(props.id)}
                >
                    <span style={{ fontFamily: 'Anton, sans-serif' }}>Delete</span>
                </Button>
            </Space>
        </div>
    )
}

export default Counter