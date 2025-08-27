import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Not Found This Page</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
