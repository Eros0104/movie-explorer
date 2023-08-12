import { styled } from "styled-components";

const DescriptionContainer = styled.div`
  display: none;
  font-size: 0.75rem;
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.pallete.background.card};
`;

const Description = styled.p``;

const DescriptionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Info = styled.span`
  font-size: 0.6rem;
  font-weight: 600;
`;

const Container = styled.div`
  width: 230px;
  height: 129px;
  cursor: pointer;
  position: relative;
  transition: 0.3s;

  &:hover {
    z-index: 2;
    transform: scale(1.2);
    ${DescriptionContainer} {
      display: block;
    }
  }
`;

const Title = styled.h3`
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  text-align: right;
`;

const CoverContainer = styled.div`
  height: 100%;
  position: relative;
`;

const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export {
  Container,
  Cover,
  CoverContainer,
  Description,
  DescriptionContainer,
  DescriptionFooter,
  Info,
  Title,
};
