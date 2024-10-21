import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

// Definición de PropTypes para FiltersProvider
FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
