import Image from "next/image";

export default function Hobbies() {
  return (
    <div className="max-w-4xl mx-auto bg-blue-100">
      <h1 className="text-3xl font-bold mb-8">My Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center">
          <Image
            src="/sleeping.jpg"
            alt="Sleeping"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Sleeping</h2>
          <p className="text-gray-600">
          
          </p>
        </div>
        <div className="text-center">
          <Image
            src="/nature trip2.jpg"
            alt="Nature Trip"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Nature Trip</h2>
          <p className="text-gray-600">

          </p>
        </div>
        <div className="text-center">
          <Image
            src="/cooking.jpg"
            alt="Cooking"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Cooking</h2>
          <p className="text-gray-600">
           
          </p>
        </div>
        <div className="text-center">
          <Image
            src="/watching.jpg"
            alt="Watching"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Watching</h2>
          <p className="text-gray-600">
          
          </p>
        </div>
        <div className="text-center">
          <Image
            src="/online gaming.jpg"
            alt="Online Gaming"
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Online Gaming</h2>
          <p className="text-gray-600">
         
          </p>
        </div>
      </div>
    </div>
  );
}