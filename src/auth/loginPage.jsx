import React, { useState } from 'react';
import axios from 'axios';
// "react-hot-toast"

export const loginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://tu-api.com/login', {
                username,
                password,
            });

            // Verifica si la respuesta es exitosa (código de estado 200 o algún otro código que indique éxito)
            if (response.status === 200) {
                // Autenticación exitosa, puedes redirigir al usuario o realizar otras acciones
                console.log('Inicio de sesión exitoso');
            } else {
                // Autenticación fallida, muestra un mensaje de error
                setError('Credenciales inválidas');
            }
        } catch (error) {
            // Error en la solicitud, muestra un mensaje de error
            setError('Hubo un problema al iniciar sesión. Inténtalo de nuevo más tarde.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de usuario:</label>
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit">Iniciar sesión</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}
