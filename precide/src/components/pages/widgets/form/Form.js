import React from "react";
export const Form = ({ userInput, onFormChange, onformSubmit }) => {
  const handleChange = (event) => {
    onFormChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onformSubmit()
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='formheading'>
        <input
          type="text"
          required
          value={userInput}
          onChange={handleChange} className='formheading'
        ></input>
        <input type="submit" className="formheading"></input>
        <input type="submit" className="formheading"></input>
      </form>
    </>
  );
};
