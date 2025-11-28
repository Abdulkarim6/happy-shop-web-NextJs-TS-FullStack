import { Skeleton } from '@/components/ui/skeleton';

export default function ProductsManageSkeleton () {
    return (
      <div className='w-full h-[550px]'>
        <div className='p-3 w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 px-3'>
          <div className='flex space-x-3 items-center'>
             <Skeleton className="h-8 w-[150px]  bg-slate-300" />
             <Skeleton className="h-8 w-[200px] rounded  bg-slate-300" />
             <Skeleton className="h-8 w-[200px] rounded  bg-slate-300" />
          </div>

          <div className='w-fit flex items-center space-x-2'>
             <Skeleton className="h-8 w-[32px] rounded  bg-slate-300" />
             <Skeleton className="h-8 w-[32px] rounded  bg-slate-300" />
             <Skeleton className="h-8 w-[32px] rounded  bg-slate-300" />
             <Skeleton className="h-8 w-[32px] rounded  bg-slate-300" />
             {/* <Skeleton className="h-8 mb-5 w-[32px] mt-3 rounded  bg-slate-300" /> */}
          </div>
        </div>

       
        <div className=''>
          {/* {Array.from({length: 8}).map((_, id) => ( */}
          {[...Array(6)].map((_, id) => (
            <div key={id} className='h-16 pt-7 w-full flex justify-evenly items-center'>
              <Skeleton className="h-9 w-[150px] bg-slate-300" />
              <Skeleton className="h-9 w-[200px] bg-slate-300" />
              <Skeleton className="h-9 w-[150px] bg-slate-300" />
              <Skeleton className="h-9 w-[150px] bg-slate-300" />
              <Skeleton className="h-9 w-[150px] bg-slate-300" />
              <Skeleton className="h-9 w-[150px] bg-slate-300" />
              <Skeleton className="h-9 w-[150px] bg-slate-300" />
            </div>
          ))}
        </div>
      </div>
    );
};
