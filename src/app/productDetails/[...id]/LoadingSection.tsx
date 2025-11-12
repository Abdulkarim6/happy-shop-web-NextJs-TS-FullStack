export default function LoadingSection() {
  return (
    <div>
      <div className="items-center h-[500px] px-2 md:px-24 animate-pulse pt-3 md:pt-6 flex flex-col md:flex-row justify-around gap-3 w-full">
        <div className="h-[500px] w-1/2 bg-slate-300 rounded-md mb-4"></div>

        <div className="h-[500px] w-1/2">
          <h2 className="h-5 my-3 bg-slate-300 w-2/3"></h2>
          <h4 className="h-4 bg-slate-300 my-3 w-2/5"></h4>
          <div className="h-6 my-3 bg-slate-300 w-full"></div>
          <div className="h-6 bg-slate-300 w-2/3"></div>
          <div className="my-3 h-6 bg-slate-300 w-2/3 "></div>
          <div className="my-3 h-6 bg-slate-300 w-2/3 "></div>
          <div className="my-3 h-6 bg-slate-300 w-2/3 "></div>
          <div className="my-3 h-6 bg-slate-300 w-2/3"></div>
          <div className="my-3 h-6 bg-slate-300"></div>
          <div className="w-full h-7 bg-slate-300 mt-2"></div>
        </div>
      </div>
    </div>
  );
}