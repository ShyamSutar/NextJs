import React,{useEffect, useState} from "react";
import Link from "next/link";

const Blog = (props) => {

  const [blogs, setblogs] = useState(props.allBlogs)

  // useEffect(() => {
   
  // },[])
  

  return (
    <div>
      <main className="text-center">

      {blogs.map((blogItem)=>{
        return <div key={blogItem.slug}>
        <h3 className="text-xl font-bold">
        <Link href={`/blogpost/${blogItem.slug}`}>{blogItem.title}</Link>
            </h3>
            <p>{blogItem.content.substr(0,400)}</p>
        </div>
      })}

        {/* <div className="blogs">
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
        </div> */}
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs")
  let allBlogs = await data.json()
  
  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}

export default Blog;
