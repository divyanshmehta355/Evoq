"use client";
import React from "react";
import Herosection from "@/components/home/Herosection";
import Who from "@/components/home/Who"
import MockUp from "@/components/home/MockUp"
import SetsUs from "@/components/home/SetsUs";
import UnderHS from "@/components/home/UnderHS";
import Carousel from "@/components/home/Carousel";
import Work from "@/components/home/Work";

export default function Home() {
  return (
    <main>
      <Herosection />
      <UnderHS />
      <Who />
      <MockUp />
      <SetsUs />
      <Carousel />
      <Work />
    </main>
  );
}
