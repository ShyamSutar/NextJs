import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <main className="text-center">
        <div className="blogs">
          <div className="blogItem ">
            <h3 className="text-xl font-bold">
              <Link href={"/blogpost/learn-javascript"}>How to learn JavaScript in 2022</Link>
            </h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <h3 className="text-xl font-bold">
              How to learn JavaScript in 2022
            </h3>
            <p>JavaScript is the language used to design logic for the web</p>
            <h3 className="text-xl font-bold">
              How to learn JavaScript in 2022
            </h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
