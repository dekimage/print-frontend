import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Badge from "@mui/material/Badge";
import styles from "../../styles/FilterContainer.module.scss";

function FilterComponent({
  filterConfig = {},
  selectedFilters,
  setSelectedFilters,
  setIsPrint,
}) {
  const [showFilter, setShowFilter] = useState(false);

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [category]: prevState[category]
        ? prevState[category].includes(value)
          ? prevState[category].filter((item) => item !== value)
          : [...prevState[category], value]
        : [value],
    }));
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.searchContainer}>
        <div>
          <Button
            variant="contained"
            onClick={() => setShowFilter(!showFilter)}
            style={
              showFilter
                ? { backgroundColor: "#FF6347", color: "white", width: "10rem" }
                : { width: "10rem" }
            }
          >
            {showFilter ? "Close Filters" : "Filters"}
          </Button>
          {showFilter && (
            <Button
              variant="contained"
              style={{ margin: "0 1rem", backgroundColor: "#FF6347" }}
              onClick={() => setSelectedFilters({})}
            >
              Reset Filters
            </Button>
          )}

          <Button variant="contained" style={{ marginLeft: "1rem" }}>
            Sort
          </Button>
        </div>

        <TextField
          sx={{ width: "50%", backgroundColor: "#d3d3d3" }}
          label="Search"
          variant="outlined"
          value={selectedFilters.contains}
          onChange={(e) =>
            setSelectedFilters({ ...selectedFilters, contains: e.target.value })
          }
        />
        <Button
          variant="contained"
          style={{ marginLeft: "1rem" }}
          onClick={() => setIsPrint(true)}
        >
          Print
        </Button>
      </div>

      {showFilter && (
        <div className={styles.accordionContainer}>
          {Object.keys(filterConfig).map((category) => (
            <Accordion key={category}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div className={styles.filterName}>{category}</div>
                <Badge
                  badgeContent={selectedFilters[category]?.length || 0}
                  color="primary"
                  max={999}
                  overlap="circular"
                  invisible={selectedFilters[category]?.length === 0}
                ></Badge>
              </AccordionSummary>

              <AccordionDetails sx={{ backgroundColor: "#f7f7f7" }}>
                <div className={styles.checkboxContainer}>
                  {filterConfig[category].map((value) => (
                    <FormControlLabel
                      key={value}
                      sx={{ padding: "0 1rem" }}
                      control={
                        <Checkbox
                          checked={
                            selectedFilters[category]?.includes(value) || false
                          }
                          onChange={() => handleCheckboxChange(category, value)}
                        />
                      }
                      label={value}
                    />
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterComponent;
