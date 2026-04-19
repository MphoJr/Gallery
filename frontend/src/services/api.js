const API_URL = "http://localhost:5000/api/images";

export const fetchImages = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const uploadImage = async (image) => {
  const res = await fetch(`${API_URL}/upload`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(image),
  });
  return res.json();
};
