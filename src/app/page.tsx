import { Footer } from "@/Components/Footer";
import { Grid } from "@/Components/Grid";
import { PlaylistMusics } from "@/Components/PlaylistMusics";
import { Sidebar } from "@/Components/Sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3 ">
            <button className=" rounded-full bg-black/40 p-1 hover:text-green-500 transition-colors">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1 hover:text-green-500 transition-colors">
              <ChevronRight />
            </button>
          </div>
          <PlaylistMusics />
          <Grid />
        </main>
      </div>
      <Footer />
    </div>
  );
}
