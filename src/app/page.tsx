import { Calender } from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import { General } from "@/components/Cards/General";
import { Lines } from "@/components/Cards/Lines";
import { Table } from "@/components/Cards/Table";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />

        <div className="grid gap-[32px]">
          <Calender />
          <Calender />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-[32px] h-[300px]
      overflow-hidden">
        <Lines />
        
        <Card className="p-[16px] overflow-y-auto">
          <CardHeader>
            <CardTitle>Table</CardTitle>
            <CardDescription>These are the results of this week</CardDescription>
          </CardHeader>
          <div className="px-4">
            <Table />
          </div>
        </Card>

        <Card className="p-[16px] overflow-y-auto">
          <CardHeader>
            <CardTitle>Data Table</CardTitle>
            <CardDescription>These are the results of this week</CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTableDemo />
          </div>
        </Card>
      </div>

    </div>
  );
}
