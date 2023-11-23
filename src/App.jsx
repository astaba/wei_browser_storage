import { useState, useEffect } from "react";
import axios from "axios";

import useLocalStorage from "./hooks/useLocalStorage";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";
const INITIAL_QUERY = "react";

const App = () => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useLocalStorage("cached-query", INITIAL_QUERY);
  const [url, setUrl] = useState(`${API_ENDPOINT}${query}`);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`${API_ENDPOINT}${query}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      // console.log(result);

      setData({ hits: result.data.hits });
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleQueryChange} />
        <button>Search</button>
      </form>
      {data.hits.length > 0 && (
        <ul>
          {data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
