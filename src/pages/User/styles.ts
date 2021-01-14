import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 500px) {
      flex-direction: row;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-bottom: 10px;

      @media (min-width: 500px) {
        margin-bottom: 0;
      }
    }

    div {
      margin-left: 0px;

      @media (min-width: 500px) {
        margin-bottom: 24px;
      }

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
        display:flex;
        align-items: center;
        margin-bottom: 8px;

        svg {
          margin-right: 8px;
        }

      }
    }
  }

  .info-user__bio {
    margin-bottom: 0px;

    @media (min-width: 500px) {
      margin-bottom: 20px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    flex-direction: column;

    @media (min-width: 500px) {
      flex-direction: row;
    }

    li {
      margin-bottom: 8px;
      & + li {
        margin-left: 0px;

        @media (min-width: 500px) {
          margin-left: 80px;
        }
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }

    }
  }
`;

