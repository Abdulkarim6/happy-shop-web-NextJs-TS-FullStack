"use client"
import { useRouter } from 'next/navigation';

const FormSwitch = ({ mode }: { mode: string }) => {
    const isRegisterPage = mode === "register";
    const router = useRouter();

    const handleAuthenticate = (switchFormUi: string) => {
      router.push(switchFormUi);
    };  

  return (
    <div className="text-sm">
      {isRegisterPage ? (
        <p className="flex gap-1">
          Allready have an account?
          <button
            onClick={() => handleAuthenticate("/account/auth?mode=login")}
            type="button"
            className="text-sm underline-offset-2 hover:underline"
          >
            Please Login Here
          </button>
        </p>
      ) : (
        <p className="flex gap-1">
          Don&apos;t have an account?
          <button
            onClick={() => handleAuthenticate("/account/auth?mode=register")}
            type="button"
            className="text-sm underline-offset-2 hover:underline"
          >
            Register Here
          </button>
        </p>
      )}
    </div>
  );
};

export default FormSwitch;