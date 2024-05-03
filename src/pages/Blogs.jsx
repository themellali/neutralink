import { AppContext } from "./Layout";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogsList = useContext(AppContext);

  return (
    <>
      <h1 className="text-[50px] font-extrabold text-center">Blogs</h1>
      <div className="container grid grid-cols-1 p-3 mt-5 gap-x-5 gap-y-8 md:gap-y-14 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogsList.map((blog) => {
          return (
            <div key={blog.id}>
              
              {/* Post Image */}
              <Link to={`/blogs/${blog.id}`}>
                <div className="border border-[#212121]/15 flex justify-center h-[300px] cursor-pointer group">
                  <img
                    className="w-full object-cover transition-all"
                    src={blog.image}
                    alt=""
                  />
                </div>
              </Link>

              {/* Post Informations */}
              <div className="infos flex flex-col justify-between gap-3">
                <div className="product-info mt-2">
                  <h1 className="text-[12px] text-[#ffdfdf] bg-[#ff5454] inline-block px-3 rounded-full">
                    {blog.category}
                  </h1>
                  <h1 className="text-[16px] font-bold">{blog.title}</h1>
                </div>
                <Link to={`/blogs/${blog.id}`}>
                  <div className="">
                    <button className="font-bold border border-slate-950/50 px-5 py-3 text-sm mt-[5px] hover:bg-blue-700 hover:text-white transition-all ease-in-out">
                      Read More
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
