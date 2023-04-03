import React from 'react'
import { Modal, Button } from 'antd'
import { StarFilled } from '@ant-design/icons'

const ModalPreview = ({
                          isModalOpen,
                          handleOk,
                          handleCancel,
                          title,
                          link,
                          cover,
                          directors,
                          writers,
                          stars,
                          rate,
                          description
                                         }) => {
    return (<>
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            bodyStyle={{
                display: "flex",

            }}
            footer={[
                <Button
                    key="link"
                    href={link}
                    loading={false}
                    onClick={handleOk}
                    style={{
                        background: "#E1B517"
                    }}
                >
                    <strong>Open IMDb page</strong>
                </Button>,
            ]}
        >
        <img
            src={cover}
            alt={''}
            style={{width: 150, border: "1px solid black", borderRadius: "5px", marginRight: "20px"}}
        />
            <div>
                <h1>{title}</h1>
                {description}
                <br/>
                <hr/>
                    <b>Director:</b> {directors.join(', ')}
                <br/>
                    <b>Writers:</b> {writers.join(', ')}
                <br/>
                    <b>Stars:</b> {stars.join(', ')}
                <br/>
                     <StarFilled /> {rate}/10
             </div>
        </Modal>
    </>)
}

export default ModalPreview

