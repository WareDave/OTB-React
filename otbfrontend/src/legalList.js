import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

function LegalList(props) {

    const { legals } = props

    const legalList = legals.map((legal) => {

        return (

            <Card key={legal.id}>
                <Card.Content>
                    <Image src= 'https://i.imgur.com/jLZM0wws.jpg' wrapped ui={false} />
                    <br/>
                    
                    <Card.Header><i className="material-icons">face</i> {legal.name}</Card.Header><br/>
                    <Card.Description><i className="material-icons">verified_user</i>par1 {legal.par1}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i>par2:  {legal.par2}</Card.Description><br/>
                    <Card.Description><i className="material-icons">info</i>par3: {legal.par3}</Card.Description><br/>                
                    <Card.Description><i className="material-icons">fitness_center</i>ia1: {legal.ia1}</Card.Description><br/>
                    <Card.Description><i className="material-icons">exposure</i>ia2: {legal.ia2}</Card.Description><br/>
                    <Card.Description><i className="material-icons">exposure</i>ia3: {legal.ia3}</Card.Description><br/>
                    <Card.Description><i className="material-icons">school</i>category: {legal.category}</Card.Description><br/>
                    <Card.Description><i className="material-icons">hot_tub</i>brend: {legal.brend}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i>description: {legal.description}</Card.Description><br/>
                    <Card.Description><i className="material-icons">whatshot</i>size: {legal.size}</Card.Description><br/>
                    <Card.Description><i className="material-icons">casino</i>price: {legal.price}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i>fee: {legal.fee}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i>split: {legal.split}</Card.Description><br/>
                <Card.Content extra>
                    <Button negative onClick={() => props.deleteLegal(legal.id)}>Kill
                    </Button>
                    <Button positive onClick={() => props.editLegal(legal.id)}>Edit 
                    </Button>
                </Card.Content>
            </Card>
        )
    })

    return (
        <Card.Group centered>
            { legalList }
        </Card.Group>
    )
}

export default legalList