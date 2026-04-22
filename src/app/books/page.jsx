import BookCard from "@/components/BookCard/BookCard";

//? 1. cache: "no-store"-> it will fetch the data on every request and it will not cache data.(SSR:server site rendering)

//? 2. cache: "force-cache"-> it will cache the data and it will not fetch data on every request.(SSG: Static site generation)

//? 3. Revalidate: in second -> it will cache the data for given time(in second) and it will not fetch data after the given revalidate time.(ISR: Incremental static regenerate)

const BooksPage = async () => {
  //! No caching (SSR:server site rendering)

  const res = await fetch("http://localhost:5000/books", { cache: "no-store" });
  const books = await res.json();

  // ! revalidation with time(ISR: Incremental static regenerate)
  //   const res = await fetch("http://localhost:5000/books", {
  //     next: { revalidate: 20 },
  //   });
  //   const books = await res.json();

  //   !forced caching (SSG: Static site generation)
  //   const res = await fetch("http://localhost:5000/books", {
  //     cache: "force-cache",
  //   });
  //   const books = await res.json();

  return (
    <div>
      <h2>Books:({books.length})</h2>
      <div className="container max-w-3/4 mx-auto grid md:grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
