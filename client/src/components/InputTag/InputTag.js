import React from "react";
import Select from "react-select";

import makeAnimated from "react-select/animated";
function InputTags(props) {
  const animatedComponents = makeAnimated();

  const customStyles = {
    control: (_, { selectProps: { width } }) => ({
      width: "100%",
      display: "flex",
    }),
  };
  return (
    <>
      <Select
        styles={customStyles}
        components={animatedComponents}
        isMulti
        placeholder="Select Team"
        onChange={(arr) => console.log(arr)}
        options={props.options}
      />
    </>
  );
}

export default InputTags;
