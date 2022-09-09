import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const slug = (props) => {
  const [blog, setblog] = useState(props.myBlogs)


  


  return <>
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center mb-4">{blog && blog.title}</h1>
    <hr />
    <div className="mt-4">
      {blog && blog.content}  
    </div>
    </div>
  </>;
};

export async function getServerSideProps(context) {

  // const router = useRouter();
  const { slug } = context.query;

    let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
    let myBlogs = await data.json()

  return {
    props: {myBlogs}, // will be passed to the page component as props
  }
}

export default slug;
