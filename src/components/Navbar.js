import * as React from "react";
import logo from "../assets/LOGO.png";
import Button from "@mui/material/Button";
export function Navbar (){
    return (
        <header className="bg-[#111729] flex text-[#FFFFFF] justify-evenly h-15">
        <div className="content-center flex-shrink-0 object-cover p-2 align-middle">
          {" "}
          <img src={logo} className="flex h-8" />
        </div>
        <div className="container flex content-center justify-center py-4 ">
          <p className="mx-2">Home</p>
          <p className="mx-2">About</p>
          <p className="mx-2">Product</p>
          <p className="mx-2">Contact</p>
        </div>
        <div className="p-2">
          <Button  variant="outlined">
          <a href="/dashboard"><p className="text-xs" >Get Started</p></a>  
          </Button>
        </div>
      </header>
    )
}