import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center gap-3">
        <h2 className="text-2xl">Amin</h2>
        <Image
        // layout="responsive" 
        width={30}
        height={30}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76ZD9dvYqp7hWMjE8YsBKPN81ZuKEN89NkA&s"
        alt="next"  />
        <h2 className="text-2xl ">Armita</h2>
      </div>
      <Image
        className="block"
        width={100}
        height={100}
        src="./next.svg"
        alt="next"
      />
    </>
  );
}
