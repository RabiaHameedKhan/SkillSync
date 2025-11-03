
// This file defines a small helper function for fetching data 
// (like JSON files or API responses) safely from the frontend (temporarily)


export async function fetchJSON(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    throw err;
  }
}
