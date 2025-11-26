import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingSection() {
  return (
    <div>
      <div className="items-center h-[500px] px-2 md:px-24 animate-pulse pt-3 md:pt-6 flex flex-col md:flex-row justify-around gap-3 w-full">
        {/* <div className="h-[500px] w-1/2 bg-slate-300 rounded-md mb-4"></div> */}
        <Skeleton className="h-[500px] w-full md:w-1/2 bg-slate-300 rounded-md" />

        <div className="h-[500px] w-full md:w-1/2 space-y-3 pt-3 md:pt-5 px-1 md:px-2">
          <Skeleton className="h-7 w-2/3 bg-slate-300" />
          <Skeleton className="h-7 w-1/3 bg-slate-300 my-5" />
          <div className="flex items-center justify-between w-full">
            <Skeleton className="h-7 w-2/6 bg-slate-300" />
            <Skeleton className="h-7 w-3/6 bg-slate-300" />
          </div>
            <Skeleton className="h-7 mb-5 w-full bg-slate-300" />
            <Skeleton className="h-7 mb-5 w-full bg-slate-300" />
            <Skeleton className="h-7 mb-5 w-full bg-slate-300" />
            <Skeleton className="h-7 mb-5 w-full bg-slate-300" />
            <Skeleton className="h-7 mb-5 w-full bg-slate-300" />
            <Skeleton className="h-7 mb-5 w-full bg-slate-300" />
        </div>
      </div>
    </div>
  );
}