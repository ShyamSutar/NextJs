import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <>
    <div className="container mx-auto">
    <h1 className="text-3xl font-bold text-center mb-4">Title of the page {slug}</h1>
    <hr />
    <div className="mt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, perspiciatis sint nulla, omnis quis doloremque nobis corporis eveniet iure sit vel voluptate. Ad.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ipsum neque delectus. Similique maiores eos quia pariatur laborum libero, ipsum doloribus autem, amet ad distinctio numquam perspiciatis eveniet eum corrupti id cumque aspernatur blanditiis. Excepturi sunt dolore eum natus, modi ab eius provident quas voluptas?
    </div>
    </div>
  </>;
};

export default slug;
