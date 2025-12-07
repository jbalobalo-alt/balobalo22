import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PROFILE_IMAGE_SRC = "/profile.jpg";

export default function Home() {
  return (
    <div className="bg-blue-100 min-h-screen">
      <header className="flex justify-start p-4">
        <nav className="flex gap-4">
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">About</Button>
          </Link>
          <Link href="/education">
            <Button variant="outline">Education</Button>
          </Link>
          <Link href="/hobbies">
            <Button variant="outline">Hobbies</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact</Button>
          </Link>
        </nav>
      </header>
      <div className="text-center">
        <Image
        src={PROFILE_IMAGE_SRC}
        alt="James' profile picture"
        width={200}
        height={200}
        className="rounded-full mx-auto mb-8"
        priority
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to James' Personal Website</h1>
      <p className="text-lg text-gray-600 mb-8">
       Hi, I’m James, a second-year student at Naga College Foundation with a strong passion for technology and continuous learning. Feel free to explore my website to learn more about my background, education, hobbies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/about">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">About Me</h2>
            <p></p>
          </div>
        </Link>
        <Link href="/education">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Education</h2>
           
          </div>
        </Link>
        <Link href="/hobbies">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Hobbies</h2>
           
          </div>
        </Link>
        <Link href="/contact">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
         
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
}

