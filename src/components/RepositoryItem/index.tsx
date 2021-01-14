import React from 'react';

import { FiStar } from 'react-icons/fi';
import { BiGitRepoForked } from "react-icons/bi";

import './styles.css';

export interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
  forks: number;
  stargazers_count: number
}

interface RepositoryItemsProps {
  repository: Repository;
}

const RepositoryItem: React.FC<RepositoryItemsProps> = ({ repository }) => {
  return (
    <li className="list-repo__item">
      <div className="list-repo__title">
        <a href={ repository.html_url } target="_blank">{repository.name}</a>
      </div>
      <p className="list-repo__description">{repository.description}</p>
      <div className="list-repo-footer">

        {repository.language &&
          <p className="list-repo-footer__language">{repository.language}</p>
        }
        <div className="list-repo-footer__qtd">{repository.stargazers_count}&nbsp;<FiStar size={16} /></div>
        <div className="list-repo-footer__qtd">{repository.forks}&nbsp;<BiGitRepoForked size={16} /></div>
      </div>
    </li>
  );
}

export default RepositoryItem;
