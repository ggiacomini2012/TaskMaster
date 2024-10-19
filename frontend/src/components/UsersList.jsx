import React, { useEffect, useState } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://task-master-delta-eosin.vercel.app/users'
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      {loading ? (
        <p>Carregando usuários...</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Password:</strong> {user.password}
              </p>{' '}
              {/* Remova essa linha se não quiser mostrar a senha */}
              <p>
                <strong>Criado em:</strong>{' '}
                {new Date(user.createdAt).toLocaleString()}
              </p>
              <p>
                <strong>Atualizado em:</strong>{' '}
                {new Date(user.updatedAt).toLocaleString()}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
};

export default UsersList;
