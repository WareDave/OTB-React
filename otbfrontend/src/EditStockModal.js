import React from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'

function EditModal(props) {
    console.log("props: ", props)
// edit form ernesto only
    return (
        <Modal open={props.open} 
        closeIcon onClose={props.closeModal}
        >
            <Header>Editing Sheet</Header>
            <Modal.Content>
                <Form
                    size='large'
                    onSubmit={props.updateCharacter}
                >
                    <Form.Field>
                        <label>category</label>
                        <Form.Input
                            type="text"
                            name="category"
                            value={props.StockToEdit.category}
                            onChange={props.handleEditChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>brend</label>
                        <Form.Input
                            type="text"
                            name="brend"
                            value={props.StockToEdit.brend}
                            onChange={props.handleEditChange}
                        />
                    </Form.Field>
                    
                   
                    <Form.Field>
                            <label>description</label>
                            <Form.Input 
                                type="text"
                                name="description"
                                value={props.StockToEdit.description}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>size</label>
                            <Form.Input 
                                type="text"
                                name="size"
                                value={props.StockToEdit.size}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>description</label>
                            <Form.Input 
                                type="text"
                                name="description"
                                value={props.StockToEdit.description}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>fee</label>
                            <Form.Input 
                                type="text"
                                name="fee"
                                value={props.StockToEdit.fee}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>split</label>
                            <Form.Input 
                                type="text"
                                name="split"
                                value={props.StockToEdit.split}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>coder</label>
                            <Form.Input 
                                type="text"
                                name="coder"
                                value={props.StockToEdit.coder}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>venderID</label>
                            <Form.Input 
                                type="text"
                                name="venderID"
                                value={props.StockToEdit.venderID}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                   
                    
                    <Button negative
                    type="submit"
                    >Make It So</Button>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

export default EditModal