export async function coordsToCity(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    data.address.city ||
    data.address.town ||
    data.address.village ||
    data.address.county
  );
}
