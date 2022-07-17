export async function GET(){
  const res = await fetch(
    'http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US'
  );
  const {images} = await res.json();

  const imageUrl = `https://bing.com${images && images.length > 0 && images[0].url}`;

  if (imageUrl) {
    return {
      status: 200,
      headers: {},
      body: { imageUrl }
    };
  }

  return {
    status: 404
  };
}