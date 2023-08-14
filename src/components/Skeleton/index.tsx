import { SkeletonLoadingContainer } from "./styles";

interface Props {
  width: string | number;
  height: string | number;
}

const SkeletonLoading = ({ width, height }: Props) => {
  return <SkeletonLoadingContainer style={{ width, height }} />;
};

export default SkeletonLoading;
