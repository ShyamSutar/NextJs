// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import * as fs from 'node:fs';

// export default function handler(req, res) {
//   fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8', (err,data)=>{
//     if(err){
//       res.status(500).json({error: "No such blog found"})
//     }
//     console.log(req.query.slug);
//     res.status(200).json(JSON.parse(data))
//   })
// }
// export default function handler(req, res) {
//   fs.readdir("blogdata",(err,data)=>{
//     let allBlogs=[];
//     data.forEach((item)=>{
//       console.log(item);
//       fs.readFile(("blogdata/"+item),(d)=>{
//           allBlogs.push(d)
//       })
//     })
//     res.status(200).json(allBlogs)
//   })
// }


export default async function handler(req, res) {

  let data = await fs.promises.readdir("blogdata")
  let allBlogs=[""];
  let myFile;
  // data.forEach(async(item)=>{
  //   console.log(item);
  //   myFile = await fs.promises.readFile(("blogdata/"+item), "utf-8")
  //   // console.log(myFile);
  //   allBlogs.push(JSON.parse(myFile))
  // })

  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(("blogdata/"+item), "utf-8")
    allBlogs.push(JSON.parse(myFile))
  }

  res.status(200).json(allBlogs)
}
