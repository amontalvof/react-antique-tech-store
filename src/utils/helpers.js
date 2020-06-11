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
