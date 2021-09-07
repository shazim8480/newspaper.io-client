import React from "react";
import { useHistory } from "react-router";

const ArticleCard = ({ article }) => {
  const { _id } = article;
  // read more btn onClick //
  let history = useHistory();
  const handleClickToReadMore = () => {
    history.push("/articleDetails/" + _id);
  };

  return (
    <div>
      <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
        <img
          alt="article"
          src={article.imageURL}
          className="object-cover w-full max-h-40"
        />
        <div className="w-full p-4 bg-white dark:bg-gray-800">
          <p className="font-medium text-purple-500 text-md">
            {article.category}
          </p>
          <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            {article.title}
          </p>
          <p className="font-light text-gray-400 line-clamp-2 dark:text-gray-300 text-md">
            {article.description}
          </p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <button
                onClick={handleClickToReadMore}
                className="font-semibold text-red-800"
              >
                Read More...
              </button>
              <p className="text-gray-400">
                {new Date().getFullYear()} - 3 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
