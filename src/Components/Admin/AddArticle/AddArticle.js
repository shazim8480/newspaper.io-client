import React, { useState } from "react";
import axios from "axios";

const AddArticle = () => {
  // saving form information
  const [articleInfo, setArticleInfo] = useState({});

  //SET image URL //
  const [imageURL, setImageURL] = useState(null);

  // on blur update new info and set it to serviceInfo//
  const handleBlur = (e) => {
    const newArticleInfo = { ...articleInfo };
    newArticleInfo[e.target.name] = e.target.value;
    setArticleInfo(newArticleInfo);
  };

  // for image handling //////////////////////////////////
  const handleImageUpload = (event) => {
    // console.log(event);
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "3bf9f984fce2aa49a2b88d789bf4a6ec");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //form submit data//
  const handleSubmit = () => {
    const articleData = {
      title: articleInfo.title,
      author: articleInfo.author,
      description: articleInfo.description,
      category: articleInfo.category,
      imageURL: imageURL,
    };
    console.log(articleData);

    fetch("https://fast-spire-76079.herokuapp.com/addArticle", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(articleData),
    })
      .then((res) => {
        console.log("server side response", res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex-1 p-16">
      <h2 className="pt-4 pb-8 text-2xl font-bold tracking-wider text-center text-blue-900 uppercase md:pt-0 md:text-left">
        Add an Article
      </h2>

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="p-8 space-y-6 rounded-lg shadow-sm bg-blue-50"
      >
        <div className="grid justify-start grid-cols-2 gap-10">
          <div>
            <label
              htmlFor="News Title"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Title"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Author"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Author
            </label>
            <div className="mt-1">
              <input
                id="Author"
                name="Author"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Author"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Description"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter Description"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="category"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Enter Category
            </label>
            <div className="mt-1">
              <input
                id="category"
                name="category"
                type="text"
                required
                className="relative block w-full text-gray-900 placeholder-gray-500 border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter category"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="file"
              className="block mb-4 text-lg font-medium text-gray-700"
            >
              Upload Cover
            </label>
            <div className="mt-1">
              <input
                type="file"
                onChange={handleImageUpload}
                required
                className="relative block w-full"
                placeholder="Upload Cover"
              />
            </div>
          </div>

          <div>
            <button className="px-5 py-2 text-base text-white capitalize transition duration-200 ease-in-out transform bg-blue-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-800 hover:border-blue-900">
              Save Data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
