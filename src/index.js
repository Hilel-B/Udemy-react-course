import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books.js";
import Book from "./Book";

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log(e.target.value);
  };
  const handleButtonClick = () => {
    alert("click");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>form</h2>
        <input
          type="text"
          name="product"
          onChange={handleFormInput}
          stye={{ margin: "1rem 0" }}
        />
        <button type="button" onClick={handleFormSubmission}>
          submit
        </button>
        <div>
          <button onClick={handleButtonClick} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

const BookList = () => {
  const getBook = (id) => {
    return books.find((el) => el.id == id);
  };

  // console.log(getBook(2));

  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        <EventExample />
        {books.map((book, index) => {
          return (
            <Book key={book.id} number={index} {...book} getBook={getBook} />
          );
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

// export default Greetings;
