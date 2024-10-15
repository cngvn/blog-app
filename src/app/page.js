"use client";
import { useEffect, useState } from "react";
import La from "./components/la";
import Link from "next/link";

const Page = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const limit = 9;

  const fetchData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?per_page=${limit}&page=${pageNumber}`
    );
    const jsonData = await response.json();
    setData(jsonData);
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  const filteredData = data.filter((article) => {
    const low1 = article.title.toLowerCase();
    const low2 = search.toLowerCase();
    return low1.includes(low2);
  });

  return (
    <div className="container">
      <header>
        <Link href="/">
          <button>Home Page</button>
        </Link>
      </header>
      <input
        className="input"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="container">
        {filteredData.length === 0 ? (
          <p>Result not found.</p>
        ) : (
          filteredData.map((article, index) => (
            <La props={article} key={index} />
          ))
        )}
      </div>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        <div className="butt">
          <button
            className="prev"
            onClick={() => {
              if (pageNumber === 1) return;
              setPageNumber(pageNumber - 1);
            }}
          >
            Previous Page
          </button>
        </div>
        <span className="page-number">Page {pageNumber}</span>
        <div className="nextbutt">
          <button
            className="next"
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
export default Page;
