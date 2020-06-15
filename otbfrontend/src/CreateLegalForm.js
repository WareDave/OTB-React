import React, { Component } from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'
import SignatureCanvas from 'react-signature-canvas'

class CreateLegal extends Component {
    ia3ructor(){
        super();

        this.state = {
            realm: '',
            name: '',
            loggedUser: '',
            par1: '',
            par2: '',
            par3: '',
            ia1: '',
            ia2: '',
            ia3: '',
            venderID: '',
           
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            par1: '',
            par2: '',
            par3: '',
            ia1: '',
            ia2: '',
            ia3: '',
            venderID: ''
            
        })
    }

    render() {
        return(
            <Modal open={this.props.open} closeIcon onClose={this.props.closeModal}>
                <Header>Create Legal</Header>
                <Modal.Content>
                    <Form 
                        size='large'
                        onSubmit={(e) => this.props.addLegal(e, this.state)}
                    >
                        <Form.Field>
                            <label>Name</label>
                            <Form.Input
                                type="text"
                                name="name"
                                fluid icon="font"
                                iconPosition="left"
                                value={this.state.name}
                                onChange={this.handleChange}
                                />
                        </Form.Field>
                        <Form.Field>
                            <label>Class and Level</label>
                            <Form.Input 
                                type="text"
                                name="par1"
                                value={this.state.body}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                      
                        <Form.Field>
                            <label>par2</label>
                            <Form.Input 
                                type="text"
                                name="par2"
                                value={this.state.par2}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Race</label>
                            <Form.Input 
                                type="text"
                                name="par3"
                                fluid icon="globe"
                                iconPosition="left"
                                value={this.state.par3}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                       
                        <Form.Field>
                            <label>ia1:</label>
                            <Form.Input 
                                type="text"
                                name="ia1"
                                value={this.state.ia1}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>ia2:</label>
                            <Form.Input 
                                type="text"
                                name="ia2"
                                value={this.state.ia2}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>ia3:</label>
                            <Form.Input 
                                type="text"
                                name="ia3"
                                value={this.state.ia3}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <SignatureCanvas penColor='red'
                         canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
                       
                        <Button type='submit'>Make It So</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
} 

export default CreateLegal;