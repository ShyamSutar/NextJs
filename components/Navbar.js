import React from "react";
import { Navbar } from "flowbite-react";

const Navbar2 = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Hunting Coder
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;

{
  /* <nav className={styles.mainnav}>
        <ul>

          <Link href={'/'}><a><li>Home</li></a></Link>
          <Link href={'/about'}><a><li>About</li></a></Link>
          <Link href={'/blog'}><a><li>Blog</li></a></Link>
          <Link href={'/contact'}><a><li>Contact</li></a></Link>
        </ul>
      </nav> */
}
