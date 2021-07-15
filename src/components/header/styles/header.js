import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const WrapBackground = styled.div`
  position: relative;
`;

export const LinearGradient = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
  position: relative;
`;

export const Frame = styled.div``;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 26px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (min-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 45px;
  width: 167px;
  margin-right: 40px;
  @media (max-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursur: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;
