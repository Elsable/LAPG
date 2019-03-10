import React, { Component } from 'react'
import {Card,Button, Modal as Modal1 } from 'antd';
import certificado from './Img/UC-BMGQ4JSD.jpg'

export class Modal extends Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    render() {
        return (
            <div>
                <a onClick={this.showModal}>
                    {this.props.children}
                </a>

                <Modal1
                
                    title="Complete Modern Amazon clone: Angular 5 and Node.js"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                ><center>
                   <Card
                    hoverable
                    style={{ width: 460 }}
                    cover={<img src={certificado} className="img-thumbnail" />}
                ></Card>
                <br/>
                <Button type="primary"href="https://www.udemy.com/certificate/UC-BMGQ4JSD/">
                ver certificado
                </Button></center>
                  
        </Modal1>
            </div>
        )
    }
}

export default Modal
