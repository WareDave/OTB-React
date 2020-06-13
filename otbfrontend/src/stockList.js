import React from 'react'
import { Button, Image, Card } from 'semantic-ui-react'

function StockList(props) {

    const { stocks } = props

    const StockList = stocks.map((stock) => {

        return (

            <Card key={stock.id}>
                <Card.Content>
                    <Image src= 'https://i.imgur.com/jLZM0wws.jpg' wrapped ui={false} />
                    <br/>
                    
                    <Card.Header><i className="material-icons">face</i> {legal.name}</Card.Header><br/>
                    <Card.Description><i className="material-icons">school</i>category: {stock.category}</Card.Description><br/>
                    <Card.Description><i className="material-icons">hot_tub</i>brend: {stock.brend}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i>description: {stock.description}</Card.Description><br/>
                    <Card.Description><i className="material-icons">whatshot</i>size: {stock.size}</Card.Description><br/>
                    <Card.Description><i className="material-icons">casino</i>price: {stock.price}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i>fee: {stock.fee}</Card.Description><br/>
                    <Card.Description><i className="material-icons">message</i>split: {stock.split}</Card.Description><br/>
                    <Card.Content extra>
                    <Button negative onClick={() => props.deleteStock(stock.id)}>Kill
                    </Button>
                    <Button positive onClick={() => props.editStock(stock.id)}>Edit 
                    </Button>
                </Card.Content>
                </Card.Content>
            </Card>
        )
    })

    return (
        <Card.Group centered>
            { StockList }
        </Card.Group>
    )
}

export default StockList