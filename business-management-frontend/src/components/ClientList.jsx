// src/components/ClientList.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../redux/clientsSlice';

const ClientList = () => {
    const dispatch = useDispatch();
    const { clients, status, error } = useSelector((state) => state.clients);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchClients());
        }
    }, [status, dispatch]);

    let content;

    if (status === 'loading') {
        content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
        content = (
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>{client.name}</li>
                ))}
            </ul>
        );
    } else if (status === 'failed') {
        content = <div>{error}</div>;
    }

    return (
        <div>
            <h2>Clients</h2>
            {content}
        </div>
    );
};

export default ClientList;
