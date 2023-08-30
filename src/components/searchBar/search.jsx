import "./search.css";
import React, { useState } from "react";
const Search = ({ handleQuery }) => {
  const [change, setChange] = useState("");

  const handleChange = (event) => {
    setChange(event.target.value);
  };

  const handleClick = () => {
    handleQuery(change);
  };
  return (
    <div>
      <div className="searchbar">
        <div>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <button className="searchbtn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
