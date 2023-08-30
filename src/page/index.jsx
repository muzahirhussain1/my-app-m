import "./styles.css";
import Head from "../components/header/header";
import Cards from "../components/card/card";
import { Data } from "../components/card/data";
import { useState } from "react";
import Search from "../components/searchBar/search";

const Home = () => {
  const [filterList, setFilterList] = useState(Data); // Removed 'new' keyword

  const handleChange = (value) => {
    const query = value;

    const updatedList = Data.filter(({ title }) => {
      // Use Data instead of updatedList
      return (
        //  Adjust property name based on your search criteria
        title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    });

    setFilterList(updatedList);
  };

  return (
    <>
      <Head />
      <Search handleQuery={handleChange} />
      <div className="root">
        {filterList.map(({ image, head, title, subtitle }) => (
          <Cards image={image} head={head} title={title} subtitle={subtitle} />
        ))}
      </div>
    </>
  );
};
export default Home;
