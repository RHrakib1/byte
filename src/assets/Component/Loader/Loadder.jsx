import { ScaleLoader } from "react-spinners";

const Loadder = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <ScaleLoader size={100} color="blue"></ScaleLoader>
        </div>
    );
};

export default Loadder;