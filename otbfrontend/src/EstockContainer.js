import React, { Component } from 'react'
import CreateStock from './CreateStockForm'
// import StockList from './stockList'
// import EditStockModal from './EditStockModal'
import { Grid, Button } from 'semantic-ui-react'


class EstockContainer extends Component {
// data to be sent to api
    state = {
        stocks: [],
        createModalOpen: false,
        editModalOpen: false,
        stockToEdit: {
            name: '',
            loggedUser: '',
            category:"",
            brend:"",
            description:"",
            size:"",
            price:"",
            fee:"",
            split:"",
            coder: '',
            venderID:""
                
        }
    }
// handle form and checks 
    createStock = () => {
        this.setState({
            createModalOpen: true
        })
    }

    addStock = async (e, StockFromTheForm) => {
        e.preventDefault();

        try {
            
            const createdStockResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Stocks/`, {
                method: 'POST',
                body: JSON.stringify(StockFromTheForm),
              
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                credentials: 'include'
            })

            const parsedResponse = await createdStockResponse.json()
            console.log(parsedResponse)
            this.setState({
                stocks: [...this.state.Stocks, parsedResponse.data]
            })

            this.closeCreateModal()
        } catch (err) {
            console.log('error: ', err)
            
            
        }
    }

    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        }, 
    )}

    componentDidMount() {
        this.getStocks()
    }

    getStocks = async () => {
        try {
            const Stocks = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Stocks/`,
            {
                method: "GET", 
                credentials: "include"
            })
            const parsedStocks = await Stocks.json()
            console.log(parsedStocks)
            this.setState({
                stocks: parsedStocks.data
            })
        } catch (err) {
            console.log(err);
        }
    } 
    
    editLegal = (idOfStocksEdit) => {
        
        const stockToEdit = this.state.Stocks.find(Stocks => Stocks.id === idOfStocksEdit)
        
        this.setState({
            editModalOpen: true,
            stockToEdit: {
                ...stockToEdit
            }
        })
    }

    handleEditChange = (e) => {
        this.setState({
            stockToEdit: {
                ...this.state.stockToEdit,
                [e.target.name]: e.target.value
            }
        })
    }

    updateStock = async (e) => {
        e.preventDefault()

        try {
            const updateResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Stocks/${this.state.stockToEdit.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.stockToEdit),
                
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const updateResponseParsed = await updateResponse.json()

            const newStocksArrayWithUpdate = this.state.Stocks.map((Stocks) => {
                if (Stocks.id === updateResponseParsed.data.id) {
                    Stocks = updateResponseParsed.data
                }
                return Stocks 
            })

            this.setState({
                stocks: newStocksArrayWithUpdate
            })

            this.closeEditModal()

        } catch (err) {
            console.error(err)
        }
    } 

    closeEditModal = () => {
        this.setState({
            editModalOpen: false
        })
    }

    deleteStock = async (id) => {
        const deleteStockResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Stocks/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })

        const deleteStockParsed = await deleteStockResponse.json()

        this.setState({
            stocks: this.state.Stocks.filter((Stocks) => Stocks.id !== id)
        })
    }
// form

    render() {
        

        return (
            <div>
                
                    <Grid 
                        textAlign='center'
                        style={{ marginTop: '7em', height: '100%' }}
                    >
                        <Grid.Row>
                            <Button negative onClick={this.createStock}>Vender Tool</Button>
                        </Grid.Row>
                           
                            <Grid.Row>
                                <stockList
                                    Stocks={this.state.Stocks}
                                    deleteStock={this.deleteStock}
                                    editLegal={this.editLegal}
                                />
                            </Grid.Row>
                            <CreateStock 
                                open={this.state.createModalOpen}
                                closeModal={this.closeCreateModal}
                                addStock={this.addStock}
                            />
                            {/* <EditStockModal 
                                open={this.state.editModalOpen}
                                updateStock={this.updateStock}
                                stockToEdit={this.state.stockToEdit}
                                closeModal={this.closeEditModal}
                                handleEditChange={this.handleEditChange}
                            /> */}
                    </Grid>
                
                <Grid 
                    textAlign='center'
                    style={{ marginTop: '7em', height: '100%' }}
                    verticalAlign='top'
                    
                >
                    Oh No You Don't.
                </Grid>
                
            </div>
        )
    }
}
// sending to switch in app.js
export default EstockContainer;