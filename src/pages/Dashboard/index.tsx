import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import RepositoryItem, { Repository } from '../../components/RepositoryItem';

import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoGithubExplorer from '../../assets/images/logo_github_explore.svg';
import { Title, Form, ErrorRepositorio, CardUser, Error } from './styles';

interface UserInteface {
  name: string;
  bio: string;
  login: string;
  avatar_url: string;
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositoryError, setRepositoryError] = useState('');
  const [user, setUser] = useState<UserInteface>();
  const [repositories, setRepositories] = useState([]);


  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newUser) {
      setInputError('Digite um usuário valido do GitHub');
      return;
    }

    try {
      const response = await api.get<UserInteface>(`${newUser}`);
      setUser(response.data);

      setNewUser('');
      setInputError('');
      setRepositories([]);
    } catch (err) {
      setInputError('Erro na busca por esse usuário');
    }
  }

  async function handleListRepository(search: string): Promise<void> {

    if(user && user.login){
      try {

        setRepositories([]);
        setRepositoryError('');
        if(search === 'starred'){
          const response = await api.get(`${user.login}/starred`);
          setRepositories(response.data);
        }else {
          const response = await api.get(`${user.login}/repos`);
          setRepositories(response.data);
        }

      } catch (err) {
        setInputError('Não foi possível encontrar os repositorios deste usuário!');
      }
    }
  }

  return (
    <>
      <img src={logoGithubExplorer} alt="GitHub Explorer" />
      <Title>Explore usuários no GitHub</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Digite o login do usuário no GitHub"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}

        { user &&
         <CardUser>
            <img src={user.avatar_url} alt={user.login}/>
            <div>
            <Link
              key={user.name}
              to={`/user/${user.login}`}
            >
              <strong>{user.name}</strong>
              </Link>
              <p>{user.login}</p>

              <div className="btn-lista">
                <button type="button" onClick={() => handleListRepository("repo")}>Repositorios</button>
                <button type="button" onClick={() => handleListRepository("starred")}>Mais visitados</button>
              </div>
            </div>
          </CardUser>
        }


        {repositoryError && <ErrorRepositorio>{repositoryError}</ErrorRepositorio>}

        <ul className="list-repo">
          {repositories.map((repository: Repository) => {
            return (
              <RepositoryItem key={repository.id} repository={repository}/>
              )
            })}
        </ul>

    </>
  );
};

export default Dashboard;
