import Image from "next/image";

async function getData() {
  const res = await fetch("https://dummyjson.com/products/1", {
    cache: "force-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  //   const t = await res.blob();

  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className=" bg-gray-50 text-black">
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
