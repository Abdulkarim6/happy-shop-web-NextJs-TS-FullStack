import Navber from "../dashboardComponents/Navber/Navber";

const layout = ({children}:{children:React.ReactNode}) => {

  return (
    <div className="w-full relative flex md:space-r-5  group">
      <Navber/>
      <div className="w-full h-fit p-3 z-10"> 
        {children}
      </div>
    </div>
  );
};

export default layout;