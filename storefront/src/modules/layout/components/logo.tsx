
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center pt-5">
      <Image
        src="/modacin.svg"
        alt="modacin.com logo"
        width={150}
        height={150}
        priority
      />
    </div>
  );
}
