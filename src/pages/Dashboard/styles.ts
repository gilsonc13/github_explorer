import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
  }

  input {
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }

    @media (min-width: 500px) {
      flex: 1;
    }
  }

  button {
    width: 100%;
    height: 70px;
    background: #05d361;
    border-radius: 0px 0px 5px 5px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#05d361')};
    }

    @media (min-width: 500px) {
      width: 210px;
      border-radius: 0px 5px 5px 0px;
    }
  }
`;

export const CardUser = styled.div`
  margin-top: 80px;
  max-width: 700px;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: flex;

  a {

    display: block;
    text-decoration: none;
    transition: transform 0.2s;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 16px;
    }
  }

    /* &:hover {
      transform: translateX(10px);
    } */

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;
      strong {
        font-size: 20px;
        color: #3d3d4d;

        &:hover {
          text-decoration: underline;
        }

      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }

      &.btn-lista {
        display: flex;
        flex-direction: column;
        margin: 20px 0 0 0;

        @media (min-width: 700px) {
          justify-content: space-between;
          flex-direction: row;
        }

        button {
          width: auto;
          height: 32px;
          background: #FAFBFC;
          border-radius: 6px;
          border: 1px solid #D9DBDB;
          color: #24292e;
          font-weight: bold;
          transition: background-color 0.2s;
          font-size: 14px;
          margin-bottom: 15px;

          @media (min-width: 700px) {
            margin-bottom: 0px;
            width: 220px;
          }

          &:hover {
            background: ${shade(0.05, '#FAFBFC')};
          }

        }
      }


    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }


`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const ErrorRepositorio = styled.span`
  display: block;
  color: #c53030;
  margin-top: 28px;
`;


