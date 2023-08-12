import { styled } from "styled-components";

const Description = styled.div`
  display: none;
  font-size: 0.75rem;
  padding: 0.7rem;
`;

const DirectorName = styled.span`
  text-align: right;
  margin-top: 0.5rem;
  font-size: 0.6rem;
  font-weight: 600;
  display: block;
`;

const Container = styled.div`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.pallete.background.card};
  width: 230px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
    ${Description} {
      display: block;
    }
  }
`;

const Title = styled.h3`
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
`;

const CoverContainer = styled.div`
  height: 130px;
  position: relative;
`;

const Cover = styled.img`
  width: 100%;
`;

export { Container, Title, Cover, CoverContainer, Description, DirectorName };
