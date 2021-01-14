import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiLink } from 'react-icons/fi';
import { BiBuildings } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import api from '../../services/api';

import RepositoryItem, { Repository } from '../../components/RepositoryItem';

import { Header, RepositoryInfo } from './styles';

import logoGithubExplorer from '../../assets/images/logo_github_explore.svg';

interface User {
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  avatar_url: string;
  blog: string;
  company: string;
  location: string;
  twitter_username: string;
}

interface RepositoryParams {
  user_github: string;
}

const User: React.FC = () => {
  const [repository, setRepository] = useState<User | null>(null);
  const [repositories, setRepositories] = useState([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`${params.user_github}`).then((response) => {
      console.log(response);
      setRepository(response.data);
    });


    api.get(`${params.user_github}/repos`).then((response) => {
      setRepositories(response.data);
    });

  }, [params.user_github]);

  return (
    <>
      <Header>
        <img src={logoGithubExplorer} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.avatar_url}
              alt={repository.login}
            />
            <div className="info-user">
              <strong>{repository.name}</strong>
              {repository.bio && <p className="info-user__bio">{repository.bio}</p>}
              {repository.company && <p><BiBuildings size={22} color="#999999"/>{repository.company}</p>}
              {repository.location && <p><GrLocation size={18} color="#999999"/>{repository.location}</p>}
              {repository.blog && <p><FiLink size={18} color="#999999"/>{repository.blog}</p>}
              {repository.twitter_username && <p><FaTwitter size={18} />{repository.twitter_username}</p>}
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.followers}</strong>
              <span>Seguidores</span>
            </li>
            <li>
              <strong>{repository.following}</strong>
              <span>Seguindo </span>
            </li>
            <li>
              <strong>{repository.public_repos}</strong>
              <span>Repositorios públicos</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

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

export default User;
