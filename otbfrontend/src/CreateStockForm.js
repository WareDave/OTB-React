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
            qty:'',
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
                <Header>Input Stock</Header>
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
                        {/* <Form.Field>
                            <label>category</label>
                            <Form.Input 
                                type="text"
                                name="category"
                                fluid icon="bookmark"
                                iconPosition="left"
                                value={this.state.body}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field> */}
                      
                        <Form.Field>
                            <label>brend</label>
                            <Form.Input 
                                type="text"
                                name="brend"
                                fluid icon="bookmark"
                                iconPosition="left"
                                value={this.state.brend}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>description</label>
                            <Form.Input 
                                type="text"
                                name="description"
                                fluid icon="bookmark"
                                iconPosition="left"
                                value={this.state.description}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                       
                        {/* <Form.Field>
                            <label>size:</label>
                            <Form.Input 
                                type="text"
                                name="size"
                                fluid icon="bookmark"
                                iconPosition="left"
                                value={this.state.size}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field> */}
                        <Form.Field>
                            <label>price:</label>
                            <Form.Input 
                                type="text"
                                name="price"
                                fluid icon="bookmark"
                                iconPosition="left"
                                value={this.state.price}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Qty:</label>
                            <Form.Input 
                                type="text"
                                name="qty"
                                fluid icon="bookmark"
                                iconPosition="left"
                                value={this.state.qty}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        {/* <Form.Field>
                            <label>fee:</label>
                            <Form.Input 
                                type="text"
                                name="fee"
                                fluid icon="bookmark"
                                iconPosition="left"
                                value={this.state.fee}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field> */}
                       
                        <Button type='submit'>Make It So</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        )
    }
} 

export default CreateStock;