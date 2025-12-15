import Form from "@/app/components/Form/Form";

const page = async({ searchParams, }: { searchParams: Promise<{ mode: string }> }) => {
    const {mode} = await searchParams; // login | register
    
    return (
        <div>
          <Form mode={mode}/> 
        </div>
    );
};

export default page;