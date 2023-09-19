import { useState } from 'react';
import axios from 'axios';

export const SignupPage = () => {

    const [formData, setFormData] = useState({
        password: '',
        email: '',
        username: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://tu-api.com/registro', formData);

            // Verifica si la respuesta es exitosa (código de estado 201 u otro código que indique éxito)
            if (response.status === 201) {
                // Registro exitoso, puedes redirigir al usuario o realizar otras acciones
                console.log('Registro exitoso');
            } else {
                // Registro fallido, muestra un mensaje de error
                setError('No se pudo completar el registro. Inténtalo de nuevo más tarde.');
            }
        } catch (error) {
            // Error en la solicitud, muestra un mensaje de error
            setError('Hubo un problema al registrarse. Inténtalo de nuevo más tarde.');
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo electrónico:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Nombre de usuario:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};