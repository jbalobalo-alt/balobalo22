import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto bg-blue-100 min-h-screen">
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
      <h1 className="text-3xl font-bold mb-8">Education</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Bachelor of Science in Information Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-2">Naga College Foundation, 2024-2025-Present (Second Year)</p>
            <p>Currently pursuing my degree. Focused on programming, and enjoy my journey for now.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Senior High School</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-2">Calabanga National Science High School, 2021-2023</p>
          </CardContent>
             <CardHeader>
            <CardTitle>Junior High School </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-2">Sabang National High School, 2017-2021</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-gray-600">
              <li>With Honors (2024)</li>
              <li>Achievers (2023)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}