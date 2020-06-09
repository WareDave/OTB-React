import React, { Component } from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'

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
            // alighment: '',
            // : '',
            ia1: '',
            ia2: '',
            ia3: '',
            category: '',
            brend: '',
            description: '',
            size: '',
            price: '',
            fee: '',
            split: '',
            coder: '',
           
            venderID: '',
            currenthp: '',
            temphp: '',
            hdice: '',
            dsaves: '',
            atks_spells: '',
            equipment: '',
            fandt: ''   
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
            category: '',
            brend: '',
            description: '',
            size: '',
            price: '',
            fee: '',
            split: '',
            coder: '',
            venderID: '',
            
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
                        <Form.Field>
                            <label>category:</label>
                            <Form.Input 
                                type="text"
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>brend:</label>
                            <Form.Input 
                                type="text"
                                name="brend"
                                value={this.state.brend}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>description:</label>
                            <Form.Input 
                                type="text"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>size</label>
                            <Form.Input 
                                type="text"
                                name="size"
                                value={this.state.size}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>price</label>
                            <Form.Input 
                                type="text"
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>fee</label>
                            <Form.Input 
                                type="text"
                                name="fee"
                                value={this.state.fee}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>split</label>
                            <Form.Input 
                                type="text"
                                name="split"
                                value={this.state.split}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                        <Form.Field>
                            <label>Armor Class</label>
                            <Form.Input 
                                type="text"
                                name="coder"
                                value={this.state.coder}
                                onChange={this.handleChange}
                                />                   
                        </Form.Field>
                       
                        <Form.Field>
                            <label>venderID</label>
                            <Form.Input 
                                type="text"
                                name="venderID"
                                value={this.state.venderID}
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

export default CreateLegal;