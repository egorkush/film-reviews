import React, { useState } from 'react'
import ModalPreview from './modalPreview'
import { Card } from 'antd'
const { Meta } = Card
const FilmCard = ({
                      title,
                      cover,
                      alt,
                      directors,
                      link,
                      writers,
                      stars,
                      rate,
                      description,
                      onDelete,
                      id
                                        }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => setIsModalOpen(true)
    const handleOk = () => setIsModalOpen(false)
    const handleCancel = () => setIsModalOpen(false)
    const handleClick = id => showModal(id)

    return (<>
            <ModalPreview
                title={title}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
                link={link}
                cover={cover}
                directors={directors}
                writers={writers}
                stars={stars}
                rate={rate}
                description={description}
            />
            <div className='preview'>
                <div className='preview-remove' onClick={onDelete}>&ndash;</div>
                <Card
                    headStyle={{
                        backgroundSize: cover,
                        backgroundPosition: "center",
                        backgroundRepeat: "repeat"
                    }}
                    hoverable
                    style={{
                        margin: 20,
                        maxWidth:180,
                        maxHeight: 370,
                        minWidth: 180,
                        minHeight: 370
                    }}
                    cover={<img src={cover} alt={alt} />}
                    onClick={() => handleClick(id)}
                >
                    <Meta
                        title={title}
                        description={directors.join(', ')}
                    />
                </Card>
            </div>
        </>
    )
}

export default FilmCard