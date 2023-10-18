const Book = (props) => {
  const { img, title, author, number, id, getBook } = props;
  const handleClick = (e) => {
    console.log(e.target);
    alert(e);
  };

  const getSingleBook = () => {
    console.log(getBook(id));
  };

  return (
    <article className="book" onClick={() => console.log(getBook(id))}>
      {img ? <img src={img} /> : null}
      <h2>{title}</h2>
      <h4>{author ? author.toUpperCase() : null}</h4>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  );
};

export default Book;
