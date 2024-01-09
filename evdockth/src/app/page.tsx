import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='container'>
      <div className='content'>content
        <Link href="landingpage">
          <h1>button</h1>
        </Link>
      </div>
    </div>
  );
}
