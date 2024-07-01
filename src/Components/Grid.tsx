import Image from "next/image";

export function Grid() {
  return (
    <div>
      <h2 className="font-semibold text-xl mt-10">
        Made for Diego Schell Fernandes
      </h2>
      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={10}
            alt="album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, Coins, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={10}
            alt="album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, Coins, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={10}
            alt="album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, Coins, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={10}
            alt="album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, Coins, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10 transition-colors"
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={120}
            height={10}
            alt="album"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, Coins, girl in red and more
          </span>
        </a>
      </div>
    </div>
  );
}
