import Form from "@/app/components/Form/Form";

const page = async({ searchParams, }: { searchParams: Promise<{ mode: "login" | "register" }> }) => {
    const {mode} = await searchParams; // login | register
    
    return (
        <div>
          <Form mode={mode}/> 
        </div>
    );
};

export default page;