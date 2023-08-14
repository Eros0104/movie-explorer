import { useState } from "react";
import { StyledSearchBar } from "./styles";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onChange }: Props) => {
  const [isCooldown, setIsCooldown] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isCooldown) {
      onChange(event);

      setIsCooldown(true);
      setTimeout(() => {
        setIsCooldown(false);
      }, 1000);
    }
  };

  return (
    <StyledSearchBar
      onChange={handleInputChange}
      type="text"
      placeholder="Pesquisar filme..."
    />
  );
};

export default SearchBar;
