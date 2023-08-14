import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const SkeletonLoadingContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.13);
  animation: 1.5s ease-in-out 0.5s infinite normal none running ${skeletonAnimation};
`;

export { SkeletonLoadingContainer };
