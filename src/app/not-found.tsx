"use client"

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Not found", 
  };
}

const NotFound = () => {
  return <h1>Not Found</h1>;
}

export default NotFound;