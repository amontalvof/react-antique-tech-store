//import url from "./URL";

//flatten
export function flattenProducts(data) {
  return data.map((item) => {
    //claudinary
    let image = item.image.url;
    //local setup
    //let image = item.image.url;
    //image = `${url}${item.image.url}`;
    return { ...item, image };
  });
}

// helper functions
export function featuredProducts(data) {
  let newFeatured = data.filter((item) => {
    return item.featured === true;
  });
  newFeatured = flattenProducts(newFeatured);
  return newFeatured;
}

//paginate
export function paginate(products) {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);

  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;

    return products.slice(start, start + itemsPerPage);
  });

  //otra forma pero modifico el array original
  /*const newProducts = Array.from({ length: numberOfPages }, () => {
    return products.splice(0, itemsPerPage);
  });*/
  //console.log("products:", newProducts);
  //return products;

  return newProducts;
}
