import { Calender } from "@/components/Cards/Calendar";
import { General } from "@/components/Cards/General";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
      <General />

      <div className="grid gap-[32px]">
        <Calender/>
        <Calender/>
      </div>
     </div>

      <div className="grid grid-cols-3 gap-[32px]">
        <Card className="h-[300px]"></Card>
        <Card className="h-[300px]"></Card>
        <Card className="h-[300px]"></Card>
      </div>

    </div>
  );
}
