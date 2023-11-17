import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(usuario === 'usuario' && senha === 'senha') { return navigate("/home")}
        
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario" onChange={(e) => {setUsuario(e.target.value)}} />
        <input type="password" placeholder="Senha" onChange={(e) => {setSenha(e.target.value)}} />
        <input type="submit" />
        </form>
    );
};

export default Login;