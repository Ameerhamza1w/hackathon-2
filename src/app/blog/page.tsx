import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

interface BlogItemProps {
  img: string;
  title: string;
  description: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ img, title, description }) => (
  <article className="mt-8">
    <Image
      src={img}
      width={1440}
      height={800}
      className="rounded-xl w-full object-cover"
      alt={title}
    />
    <h3 className="text-[22px] lg:text-[28px] font-bold text-[#333] mt-3">
      {title}
    </h3>
    <p className="text-gray-600 text-[14px] sm:text-[16px] mt-2 text-justify">
      {description}
    </p>
    <a
      href="#"
      className="inline-block mt-4 text-[#B88E2F] hover:text-[#8A6A24] underline"
    >
      Read More
    </a>
  </article>
);

const BlogPage: React.FC = () => {
  const blogs = [
    {
      id: "1",
      img: "/images/b2 (1).jpg",
      title: "Latest Trends in Design",
      description:
        "Explore the hottest trends in modern design and how they are shaping the world of interiors and aesthetics.",
    },
    {
      id: "2",
      img: "/images/b2 (2).jpg",
      title: "Decorating Made Simple",
      description:
        "Discover how to decorate your spaces effortlessly with tips and tricks that blend functionality and style.",
    },
    {
      id: "3",
      img: "/images/b2 (3).jpg",
      title: "Tips for a Modern Home",
      description:
        "Transform your home into a modern masterpiece with expert advice on interior styling and design.",
    },
  ];

  return (
    <div>
      <Header />
      <section className="relative h-[220px] sm:h-[320px]">
        <Image
          src="/shopbanner.png"
          layout="fill"
          className="object-cover"
          alt="Banner"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-30">
          <h1 className="text-white text-[26px] sm:text-[40px] font-bold">
            Blog
          </h1>
          <div className="flex items-center text-white mt-2">
            <span className="text-sm sm:text-base">Home</span>
            <IoChevronForwardSharp />
            <span className="text-sm sm:text-base">Blog</span>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-8 lg:px-20 mt-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogItem
              key={blog.id}
              img={blog.img}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </section>
      <div className="flex justify-center mt-10 mb-8">
        <ul className="flex space-x-4">
          {["1", "2", "3"].map((page, index) => (
            <li
              key={index}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-md ${
                page === "1"
                  ? "bg-[#B88E2F] text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {page}
            </li>
          ))}
          <li className="px-6 py-2 bg-gray-200 text-gray-600 rounded-md">
            Next
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
