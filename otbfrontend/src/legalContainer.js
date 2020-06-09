import React, { Component } from 'react'
import CreateLegal from './CreateLegalForm'
import LegalList from './LegalList'
import EditLegalModal from './EditLegalModal'
import { Grid, Button } from 'semantic-ui-react'


class LegalContainer extends Component {

    state = {
        legals: [],
        createModalOpen: false,
        editModalOpen: false,
        legalToEdit: {
            name: '',
            loggedUser: '',
            par1:"",
            par2:"",
            par3:"", 
            ia1:'',
            ia2:'',
            ia3:'',
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

    createLegal = () => {
        this.setState({
            createModalOpen: true
        })
    }

    addLegal = async (e, LegalFromTheForm) => {
        e.preventDefault();

        try {
            
            const createdLegalResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Legals/`, {
                method: 'POST',
                body: JSON.stringify(LegalFromTheForm),
              
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                credentials: 'include'
            })

            const parsedResponse = await createdLegalResponse.json()
            console.log(parsedResponse)
            this.setState({
                legals: [...this.state.Legals, parsedResponse.data]
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
        this.getLegals()
    }

    getLegals = async () => {
        try {
            const Legals = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Legals/`,
            {
                method: "GET", 
                credentials: "include"
            })
            const parsedLegals = await Legals.json()
            console.log(parsedLegals)
            this.setState({
                legals: parsedLegals.data
            })
        } catch (err) {
            console.log(err);
        }
    } 
    
    editLegal = (idOfLegalsEdit) => {
        
        const legalToEdit = this.state.Legals.find(Legals => Legals.id === idOfLegalsEdit)
        
        this.setState({
            editModalOpen: true,
            legalToEdit: {
                ...legalToEdit
            }
        })
    }

    handleEditChange = (e) => {
        this.setState({
            legalToEdit: {
                ...this.state.legalToEdit,
                [e.target.name]: e.target.value
            }
        })
    }

    updateLegal = async (e) => {
        e.preventDefault()

        try {
            const updateResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Legals/${this.state.legalToEdit.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.legalToEdit),
                
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const updateResponseParsed = await updateResponse.json()

            const newLegalsArrayWithUpdate = this.state.Legals.map((Legals) => {
                if (Legals.id === updateResponseParsed.data.id) {
                    Legals = updateResponseParsed.data
                }
                return Legals 
            })

            this.setState({
                legals: newLegalsArrayWithUpdate
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

    deleteLegal = async (id) => {
        const deleteLegalResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/Legals/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })

        const deleteLegalParsed = await deleteLegalResponse.json()

        this.setState({
            legals: this.state.Legals.filter((Legals) => Legals.id !== id)
        })
    }


    render() {
        

        return (
            <div>
                
                    <Grid 
                        textAlign='center'
                        style={{ marginTop: '7em', height: '100%' }}
                    >
                        <Grid.Row>
                            <Button negative onClick={this.createLegal}>+</Button>
                        </Grid.Row>
                           
                            <Grid.Row>
                                <LegalList
                                    Legals={this.state.Legals}
                                    deleteLegal={this.deleteLegal}
                                    editLegal={this.editLegal}
                                />
                            </Grid.Row>
                            <CreateLegal 
                                open={this.state.createModalOpen}
                                closeModal={this.closeCreateModal}
                                addLegal={this.addLegal}
                            />
                            <EditLegalModal 
                                open={this.state.editModalOpen}
                                updateLegal={this.updateLegal}
                                legalToEdit={this.state.legalToEdit}
                                closeModal={this.closeEditModal}
                                handleEditChange={this.handleEditChange}
                            />
                    </Grid>
                
                <Grid 
                    textAlign='center'
                    style={{ marginTop: '7em', height: '100%' }}
                    verticalAlign='top'
                    
                >
                    Go Fucking Reg.
                </Grid>
                
            </div>
        )
    }
}

export default LegalContainer;