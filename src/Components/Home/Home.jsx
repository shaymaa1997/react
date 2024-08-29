import React from "react";
import CategorySlider from "./../CategorySlider/CategorySlider";
import MainSlider from "../MainSlider/MainSlider";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>FreshCart</title>
        <meta name="description" content="User FreshCart Website" />
      </Helmet>
      <MainSlider />
      <CategorySlider />

      <input  type="text" placeholder="search...." className="w-75 mx-auto form-control my-5 ng-pristine ng-valid ng-touched"></input>
      <FeaturedProducts />;
    </>
  );
}
