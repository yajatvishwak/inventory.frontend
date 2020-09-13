import React from "react";
import Input from "./Input";

export default function Forminput() {
  return (
    <div className="w-64">
      <Input value="Product Name" />
      <Input value="Price" />
      <Input value="Description" />
    </div>
  );
}
