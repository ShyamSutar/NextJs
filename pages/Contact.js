import React, { useState } from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email, phone, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for Contacting us")
        setname("")
        setphone("")
        setemail("")
        setdesc("")
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error")
      });
  };

  const handleChange = () => {};

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="uname" value="Your Name" />
          </div>
          <TextInput
            name="uname"
            id="uname"
            type="text"
            required={true}
            value={name}
            placeholder={"John Cena"}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone" value="Your Phone" />
          </div>
          <TextInput
            name="phone"
            id="phone"
            type="phone"
            required={true}
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            name="email"
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required={true}
          />
        </div>

        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="desc" value="Your message" />
          </div>
          <Textarea
            name="desc"
            id="desc"
            placeholder="Leave a comment..."
            required={true}
            rows={4}
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;
