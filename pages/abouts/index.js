import Link from "next/link";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
export default () => {
  const liList = details.map((item) => {
    const id = item.id;
    return (
      <li key={item.id}>
        <Link href={`/abouts/${id}`}>{item.name}</Link>
      </li>
    );
  });
  return (
    <>
      <h1>This is all about the web page</h1>
      <ul>{liList}</ul>
    </>
  );
};
