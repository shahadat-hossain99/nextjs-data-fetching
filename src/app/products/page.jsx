import ProductsCard from "@/components/ProductsCard/ProductsCard";

// ! forced caching
// const getProducts = async () => {
//   const res = await fetch("http://localhost:5000/products", {
//     cache: "force-cache",
//   });
//   return await res.json();
// };

// const getProducts = async () => {
//   const res = await fetch("http://localhost:5000/products", {
//     cache: "no-cache",
//   });
//   return await res.json();
// };

// const getProducts = async () => {
//   const res = await fetch("http://localhost:5000/products", {
//     next: {
//       revalidate: 30,
//     },
//   });
//   return await res.json();
// };

// !special one
// const getProducts = unstable_cache(
//   async () => {
//     const res = await fetch("http://localhost:5000/products");
//     return await res.json();
//   },
//   ["products-cache"], // cache key
//   {
//     revalidate: 30, // 30 seconds
//   },
// );

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  return await res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <div>
      <h2>Products({products.length}) are here</h2>
      <div className="container max-w-3/4 mx-auto grid grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
