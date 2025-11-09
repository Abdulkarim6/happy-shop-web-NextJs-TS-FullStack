import { Spinner } from '@/components/ui/spinner';

const Loader = () => {
    return (
      <div className="w-full h-svh flex justify-center items-center gap-4">
        <Spinner className="size-7 md:size-10" />
      </div>
    );
};

export default Loader;