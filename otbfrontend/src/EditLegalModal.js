import React from 'react'
import { Form, Button, Header, Modal } from 'semantic-ui-react'

function EditLegalModal(props) {
    console.log("props: ", props)

    return (
        <Modal open={props.open} 
        closeIcon onClose={props.closeModal}
        >
            <Header>Editing For Contract</Header>
            <Modal.Content>
                <Form
                    ia1='large'
                    onSubmit={props.updateLegal}
                >
                    <Form.Field>
                        <label>par1</label>
                        <Form.Input
                            type="text"
                            name="par1"
                            value={props.StockToEdit.par1}
                            onChange={props.handleEditChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>par2</label>
                        <Form.Input
                            type="text"
                            name="par2"
                            value={props.StockToEdit.par2}
                            onChange={props.handleEditChange}
                        />
                    </Form.Field>
                    
                   
                    <Form.Field>
                            <label>par3</label>
                            <Form.Input 
                                type="text"
                                name="par3"
                                value={props.StockToEdit.par3}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>ia1</label>
                            <Form.Input 
                                type="text"
                                name="ia1"
                                value={props.StockToEdit.ia1}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                   
                    <Form.Field>
                            <label>ia2</label>
                            <Form.Input 
                                type="text"
                                name="ia2"
                                value={props.StockToEdit.ia2}
                                onChange={props.handleEditChange}
                                />                   
                    </Form.Field>
                    <Form.Field>
                            <label>ia3</label>
                            <Form.Input 
                                type="text"
                                name="ia3"
                                value={props.StockToEdit.ia3}
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

export default EditLegalModal