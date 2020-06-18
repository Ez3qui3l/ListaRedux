import React from 'react'
import { Container, Row, Col, Button, FormText } from 'react-bootstrap'
import { connect } from 'react-redux'
import { selectBook } from '../../actions'

const Details=(props)=>{

    
        {
            if(props.bookSelected != null){
                return(
                    <Container>
                        <Row>
                        
                            <Col>Nombre: {props.bookSelected.name}
                            <span class="material-icons">
                            menu_book
                            </span></Col>
                            <Col>Autor: {props.bookSelected.author}
                            <span class="material-icons">
                            create
                            </span></Col>
                            <Col>Imagen: 
                            <img  src= {props.bookSelected.Imagen} alt="imagenes de libros" fluid />
                            </Col>
                            <Col>PDF: 
                             <Button href= {props.bookSelected.pdf} alt="link a pdf" target="_blank">link a pdf </Button>
                            </Col>
                            
                        </Row>
                    </Container>
                )
            }
            else{
                return(
                    <Container>
                        Selecciona un libro
                    </Container>
                )
            }
        }

       
    
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        bookSelected: state.bookSelected
    }
}
export default connect(mapStateToProps, {selectBook})(Details)
