import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24  items-center">
      <div>
        <h1 className="text-4xl  tracking-tight max-w-2xl font-bold sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 leading-8 text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eius
          numquam doloremque nam non cum quo placeat mollitia suscipit nisi!
        </p>
        <Button size='lg'  className="mt-10" asChild>
          <Link href={'/prodcuts'}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
