import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.8;
`;

export const Title = styled(motion.h1)`
  font-family: var(--font-primary);
  color: white;
  font-size: 20rem;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  margin-top: auto;
  transition: all 2s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  gap: 1rem;
  margin: 30px 30px 30px auto;
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      color: green;
      transition: 1s;
    }
  }
`;

export const Paragraph = styled.p`
  max-width: 900px;
  font-size: 32px;
  position: relative;
  margin: 17vh;
`;

export const Img = styled.img`
  width: 25rem;
`;

export const Section = styled.div`
  height: 80vh;
  display: flex;
  background: grey;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10rem 0;
  color: white;
`;
