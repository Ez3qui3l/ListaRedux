import { combineReducers } from 'redux'


const booksReducer = () =>{
    return[
        {
        name: "El amor en los tiempos del cólera",
        author: "Gabriel García Márquez",
        Imagen:"https://imagessl1.casadellibro.com/a/l/t5/51/9788497592451.jpg",
        pdf: "https://static.telesurtv.net/filesOnRFS/multimedia/2015/04/15/garciamarquez-elamorenlostiemposdelcolera.pdf"
        },
        {
        name: "Así habló Zaratustra",
        author: "Friedrich Nietzche",
        Imagen: "https://www.elsotano.com/imagenes/9789706/978970666553.JPG",
        pdf: "http://livros01.livrosgratis.com.br/bk000286.pdf"

        },
        {
        name: "El principito",
        author: "Antoine de Saint-Exupéry",
        Imagen: "https://imagessl4.casadellibro.com/a/l/t5/94/9788478887194.jpg",
        pdf: "http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/ElPrincipito.pdf"
        }
    ]
}
    const selectedBookReducer = (selectedBook = null, action)=>{
        if(action.type == 'BOOK_SELECTED'){
            return action.payload
        }
        else{
            return selectedBook
        }
    }
    export default combineReducers({
        list: booksReducer,
        bookSelected: selectedBookReducer
    })
    