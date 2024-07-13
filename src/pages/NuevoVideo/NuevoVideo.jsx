import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import BotonNV from "../../componentes/Botones/botonNV"
import BotonHome from '../../componentes/Botones/botonHome';
import logo from "../../assets/logoAlura.png";
import home from "../../assets/homeNV.png";
import nuevoVideo from "../../assets/plusNV.png";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Nav = styled.nav `
    width: 100%;
    min-height: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.9);
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7),
                inset 0px 200px  rgba(34, 113, 209, 0.05);
    position: relative;
    z-index: 2;
    img{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 430px) {
        display: none;
    }
`
const BotonesNav = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    
    
    
    @media (max-width: 768px) {
        gap: 15px;
        width: 50%;
        
    }
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #191919;
    margin: 0 auto;
    padding: 5%;
    width: 90%;
    min-height: 1024px;
`
const FormTitulo = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 60px;
    color: #FFFF;
    
    p{
        font-size: 20px;
        font-weight: 200;
        text-align: center;

        @media (max-width: 768px) {
        font-size: 15px;
        
        }
    }
    @media (max-width: 768px) {
        font-size: 40px;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1024px;
    

    input,
    select,
    textarea{
        
        background-color: transparent;
        border: 3px solid #262626;
        border-radius: 10px;
        padding: 10px;
        color: #A5A5A5;
        text-align: justify;
        height: 100%;
    }
    

    h2{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        color: #FFFFFF;
        font-size: 36px;
        border-bottom: 3px solid #262626;
        border-top: 3px solid #262626;
        padding: 3%;
        
        
        
        
    }
    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width:430px){
        margin: auto;
    }

    
`
const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
    width: 100%;    
`
const Grupo1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    width: 95%;
    font-size: 16px;
    

    .titulo{
        width: 40%;

        @media (max-width: 768px) {
        width: 49%;
        }
        
        @media (max-width:430px){
            width: 100%;
        }
    }
    .categoria{
        
        width: 55%;

        @media (max-width: 768px) {
        width: 49%;
        }
        
        @media (max-width:430px){
            width: 100%;
        }
        
    }
    @media (max-width: 768px) {
        width: 100%;
        
        
    }
    @media (max-width: 430px) {
        flex-direction: column;
        
        
    }
`
const Grupo2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    font-size: 16px;

    .imagen{
        width: 45%;

        @media (max-width: 768px) {
        width: 49%;
        }
        
        @media (max-width:430px){
            width: 100%;
        }
    }
    .video{
        width: 45%;
        
        @media (max-width: 768px) {
        width: 49%;
        }

        @media (max-width:430px){
            width: 100%;
        }
    }

    @media (max-width: 768px) {
            width: 100%;
            gap: 10px;
        }
        
    @media (max-width: 430px) {
        flex-direction: column;
        width: 100%;
    }
`
const Grupo3 = styled.div`
    display: flex;
    flex-direction: row;
    width: 45%;
    height: auto;

    @media (max-width: 768px) {
            width: 49%;
        }

    @media (max-width: 430px) {
        flex-direction: column;
        width: 100%;
    }
    
`
const Label = styled.label`
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    color: #FFFF;
    margin: 5px 0;

    @media (min-width: 768px) {
        flex: 1;
        margin-right: 20px;
    }
`
const Botones = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    
    .guardar{
        border: 3px solid #2271D1;
    }

    
    @media (max-width: 430px) {
        flex-direction: column;
        align-items:center;
        gap: 15px;
        
    }
`
const Foot = styled.nav `
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.9);
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7),
                inset 0px 100px  rgba(34, 113, 209, 0.05);
    
    img{
        width: 100%;
        height: 100%;
    }

    @media ( max-width:430px){
        
        .logo{
            display: none;
        }
    }
`
const Butons = styled.div`
    display: none;
    

    @media (max-width: 430px) {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;

        .home{
            width: 58px;
            height: 58px;
            cursor: pointer;
        }

        .botonNV{
            min-width: 207px;
            cursor: pointer; 

            
        }
        .nuevoVideo{
            width: 30px;
            height: 30px;
            
            }
    }
`
const LinkStyle = {
    textDecoration: 'none',
    color: 'inherit'
};

const NuevoVideo = ()=>{
    const { dispatch } = useContext(GlobalContext);
    const [newVideo, setNewVideo] = useState({
        
        title: '',
        category: '',
        photo: '',
        link: '',
        description: '',
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigateTo = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewVideo({ ...newVideo, [name]: value });
    };

    const handleAddVideo = async () => {
        try {
            setShowSuccessMessage(false);
            setShowErrorMessage(false);
            if (newVideo.title && newVideo.category && newVideo.photo && newVideo.link && newVideo.description) {
                const response = await fetch('http://localhost:3001/videos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newVideo),
                });

                if (!response.ok) {
                    throw new Error('Failed to add video');
                }
                const data = await response.json();

                dispatch({ type: 'ADD_VIDEO', payload: data });
                dispatch({ type: 'SET_MOSTRAR_FORMULARIO', payload: false });
                dispatch({ type: 'SET_SELECTED_VIDEO', payload: null });

                setShowSuccessMessage(true);
                
                setTimeout(() => {
                    setShowSuccessMessage(false),
                    navigateTo('/');
                }, 3000); 
                
                
            } else {
                setShowErrorMessage(true);
            }
        } catch (error) {
            console.error('Error adding video:', error);
            setShowErrorMessage(true);
        }
    };

    const handleClean = () => {
        
        dispatch({ type: 'SET_MOSTRAR_FORMULARIO', payload: false });
        dispatch({ type: 'SET_SELECTED_VIDEO', payload: null });
        setNewVideo({
            title: '',
            category: '',
            photo: '',
            link: '',
            description: ''
        });
        setShowSuccessMessage(false);
        setShowErrorMessage(false);
    };

    return <>
        <Nav>
            <Link to="/" style={LinkStyle}>
                <img src={logo} alt="Logo de Space App" />
            </Link>
            <BotonesNav>
                <Link to="/" style={LinkStyle}>
                <BotonHome>HOME</BotonHome>
                </Link>
                <Link to="/NuevoVideo" style={LinkStyle}> 
                    <BotonNV>NUEVO VIDEO</BotonNV>
                </Link>
            </BotonesNav>
        </Nav>
        <FormContainer>
                <FormTitulo>
                    NUEVO VIDEO
                    <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
                </FormTitulo>
                    <Form>
                        <h2>Crear Tarjeta</h2>
                        <Grupo1>
                            <FormGroup className="titulo">
                                <Label>Título</Label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={newVideo.title}
                                        onChange={handleChange}
                                        placeholder="Ingrese el título"
                                    />
                            </FormGroup>
                            <FormGroup className="categoria">   
                                <Label>Categoría</Label>
                                    <select name="category"
                                        value={newVideo.category}
                                        onChange={handleChange}
                                        >
                                            <option value="">Seleccione una categoría</option>
                                            <option value="FRONT END">FRONT END</option>
                                            <option value="BACK END">BACK END</option>
                                            <option value="INNOVACIÓN Y GESTIÓN">INNOVACIÓN Y GESTIÓN</option>
                                    </select>
                            </FormGroup>
                        </Grupo1>
                        <Grupo2>
                            <FormGroup className="imagen">     
                                <Label>Imagen</Label>
                                    <input
                                        type="text"
                                        name="photo"
                                        value={newVideo.photo}
                                        onChange={handleChange}
                                        placeholder="Ingrese el enlace de la imagen"
                                    />
                            </FormGroup>
                            <FormGroup className="video">
                                <Label>Video</Label>
                                    <input
                                        type="text"
                                        name="link"
                                        value={newVideo.link}
                                        onChange={handleChange}
                                        placeholder="Ingrese el enlace del video"
                                    />
                            </FormGroup>
                        </Grupo2>
                        <Grupo3>
                            <FormGroup className="descripcion">
                            <Label>Description</Label>
                                <textarea
                                    
                                    name="description"
                                    value={newVideo.description}
                                    onChange={handleChange}
                                    placeholder="¿De qué se trata este video?"
                                />
                            </FormGroup>
                        </Grupo3>
                        <Botones>
                            <BotonNV type="button" onClick={handleAddVideo} className="guardar">GUARDAR</BotonNV>
                            <BotonNV type="button" onClick={handleClean}>LIMPIAR</BotonNV>
                        </Botones>
                        {showSuccessMessage && (
                                    <p style={{ color: "green", marginTop: "10px" }}>
                                        ¡Video registrado exitosamente!
                                    </p>  
                        )}
                        {showErrorMessage && (
                            <p style={{ color: "red", marginTop: "10px" }}>
                                ¡Vuelva a intentarlo! Por favor complete todos los campos del formulario.
                            </p>
                        )}
                    </Form>
        </FormContainer>
        <Foot>
            <Link to="/" style={LinkStyle}>
                <img className="logo" src={logo} alt="Logo de Space App" />
            </Link>
            
            <Butons>
                <Link to="/" style={LinkStyle}>
                    <img className="home" src={home} alt="Home"/>
                </Link>
                <Link to="/NuevoVideo" style={LinkStyle}>
                    <BotonHome className="botonNV"><img className="nuevoVideo" src={nuevoVideo} alt="NuevoVideo"/>NUEVO VIDEO</BotonHome>
                </Link>
            </Butons>
        </Foot>
    </>
    
}

export default NuevoVideo