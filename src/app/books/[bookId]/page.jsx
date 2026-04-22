// import DetailsCard from "@/components/BookCard/DetailsCard";

import DetailsCard from "@/components/BookCard/DetailsCard";

export const generateStaticParams = async () => {
  //! Check next.js Documentation for generatesStaticParams()
  const res = await fetch("http://localhost:5000/books");
  const books = await res.json();

  return books.slice(0, 4).map((book) => ({ bookId: book.id }));
};

const BookDetailPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();
  const { title, author, price, description, rating } = book;

  return (
    <div>
      <h2>Book Details : {bookId}</h2>
      <DetailsCard book={book} />
    </div>
  );
};

export default BookDetailPage;
