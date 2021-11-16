import React from "react";
import Select from "react-select";
import InputTags from "src/components/InputTag/InputTag";

const Chat = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <InputTags />
    </div>
  );
};

export default Chat;
