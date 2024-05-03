import { useContext } from "react";
import { AppContext } from "./Layout";
import { useParams } from "react-router-dom";

const BlogsDetails = () => {
  const { id } = useParams();
  const blogsList = useContext(AppContext);

  const blog = blogsList.find((item) => {
    return item.id === parseInt(id);
  });

  return (
    <>
      <div className="container flex flex-col items-center w-full text-center mt-10 h-screen">
        {/* Blog Informations */}
        <div className="flex justify-center flex-col">
          <h2 className="w-[100px] text[28px] self-center font-semibold
           text-blue-200 bg-blue-500 rounded-full">{blog.category}</h2>
          <h1 className="text-[48px] font-bold">{blog.title}</h1>
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
