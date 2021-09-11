import React, { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/articles`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <section>
      <div className="w-full p-12 bg-white">
        <div className="flex items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-gray-800">
              Lastest articles
            </p>
            <p className="text-2xl font-light text-gray-400">
              All article are verified by our experts and valdiated by the CTO
            </p>
          </div>
          <div className="text-end">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
              <div className="relative ">
                <input
                  type="text"
                  id='"form-subscribe-Search'
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  placeholder="Enter a title"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-200"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard article={article} key={articles.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
