"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg tracking-tight fixed-top bg-white z-50">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://i.imgur.com/Tu3FLtC.png" alt="" className="w-20" />
        </a>

        <button
          className=""
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-2xl text-zinc-600">
            <IoMenu />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center ">
            <li className="nav-item hover:font-semibold">
              <Link href={"/about"} className="no-underline text-zinc-700">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/projects"} className="no-underline text-zinc-700">
                projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
