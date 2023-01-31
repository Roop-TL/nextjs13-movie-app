import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, poster_path, release_date }) {
  const img_path = `https://image.tmdb.org/t/p/original`;
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={img_path + poster_path}
          alt={title}
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
}
