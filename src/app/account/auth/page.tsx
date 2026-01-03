import Form from "@/app/components/Form/Form";
import Image from "next/image";
import authenticateImg from "../../../../public/bannerImages/authenticate.jpg";

const page = async(props: {
  searchParams: Promise<{mode: "login" | "register" , callbackUrl: string | undefined }
>}) => {
    
 // const p = await props?.searchParams; // login | register
      console.log( "log from server auth page", "time:", new Date().toLocaleString() );
    
    return (
        <div className="w-full">
          <div className="fixed h-screen w-screen overflow-hidden -z-1 opacity-80">
            <Image
              alt="Mountains" src={authenticateImg} placeholder="blur"
              quality={100} fill sizes="100vw"
              style={{
                objectFit: "cover",
              }}
             />
          </div>
          <Form props={props}/> 
        </div>
    );
};

export default page;