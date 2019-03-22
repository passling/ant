import React from 'react'
import {Card, Row, Col, Modal} from 'antd'
export default class Gallery extends React.Component{
    state = {
        showModal: false,
        currentImg: ''
    }
    openGallery (path) {
        this.setState({
            currentImg: require(`../../images/gallery/${path}`),
            showModal: true
        })
    }
    render () {
        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png', '25.png']
        ]
        const imgList = imgs.map((list) => list.map(item => (
            <Card
                key={item}
                style={{marginBottom: 10}}
                cover={<img src={require(`../../images/gallery/${item}`)}
                onClick={() => this.openGallery(item)}/>}>
                <Card.Meta
                    title="React.admin"
                    description="I love React"/>
            </Card>
        )))
        return (
            <div className="card-warp">
                <Row gutter={10}>
                    {imgList.map((item,idx) => (
                    <Col key={idx} md={idx === 4 ? 4 : 5}>{item}</Col>
                    ))}
                </Row>
                <Modal
                width={300}
                height={500}
                visible={this.state.showModal}
                title="图片画廊"
                onCancel={() => {
                    this.setState({
                        showModal: false
                    })
                }}
                footer={null}>
                    {<img src={this.state.currentImg} style={{width:'100%'}}/>}
                </Modal>
            </div>
        )
    }
}