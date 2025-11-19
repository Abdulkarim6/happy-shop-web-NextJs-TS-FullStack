import Link from "next/link";

const layout = ({children}:{children:React.ReactNode}) => {
    const linkClass= "text-lg font-medium hover:bg-slate-200 rounded py-1 px-2";
    return (
      <div className="w-full flex gap-10 px-2 md:px-5">
        <nav className="w-3/10 p-3">
          <ul className="flex flex-col space-y-1">
            <Link href="/dashboard" className={linkClass}>All Users</Link>
            <Link href="/dashboard/manageProducts" className={linkClass}>Manage Products</Link>
          </ul>
        </nav>
        {children}
      </div>
    );
};

export default layout;