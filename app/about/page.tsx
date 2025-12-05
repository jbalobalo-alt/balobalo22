import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/profile.jpg"
            alt="James working"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-600 mb-4">
           Hi, I'm James, a student at Naga College Foundation.
          </p>
          <p className="text-gray-600 mb-4">
            When I'm not coding, I enjoy exploring new technologies and working on personal projects.
          </p>
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Adaptability</li>
            <li>Time Management</li>
            <li>Organizational skills</li>
            <li>Team Player</li>
            <li>Problem-solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}