import React, { Component } from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'

class CreateStock extends Component {
    constructor(){
        super();

        this.state = {
            realm: '',
            name: '',
            loggedUser: '',
            category: '',
            brend: '',
            description: '',
            size: '',
            price: '',
            fee: '',
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
            category: '',
            brend: '',
            description: '',
            size: '',
            price: '',
            fee: '',
            split: '',
            coder: '',
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
                            <label></label>
                            <Form.Input 
                                type="text"
                                name="category"
                                value={this.state.body}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                      
                        <Form.Field>
                            <label>brend</label>
                            <Form.Input 
                                type="text"
                                name="brend"
                                value={this.state.brend}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label></label>
                            <Form.Input 
                                type="text"
                                name="description"
                                fluid icon="globe"
                                iconPosition="left"
                                value={this.state.description}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                       
                        <Form.Field>
                            <label>size:</label>
                            <Form.Input 
                                type="text"
                                name="size"
                                value={this.state.size}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>price:</label>
                            <Form.Input 
                                type="text"
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>fee:</label>
                            <Form.Input 
                                type="text"
                                name="fee"
                                value={this.state.fee}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                       
                        <Button type='submit'>Make It So</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
} 

export default CreateStock;