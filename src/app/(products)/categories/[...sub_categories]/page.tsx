import React from "react";

const page = async ({ params }: { params: Promise<{ sub_categories: string }> }) => {

  const { sub_categories } = await params;
  console.log("category", sub_categories.includes("women"));
  console.log("sub-category", sub_categories.includes("Tops"));

  return (
    <div>
      <h1>clothes route</h1>
      <h1 className="font-bold text-4xl text-center">{sub_categories.toString()}</h1>
    </div>
  );
};

export default page;
