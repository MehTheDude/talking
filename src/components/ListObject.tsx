import { useNavigate } from "react-router-dom";
import type { Article } from "../schema/schema.ts";
const ListObject = (item: Article) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/article/${item.FileName}`);
    };
    return (
        <div
            className="m-2 p-4 border-2 border-red-600 w-full hover:bg-red-600 active:bg-red-600 hover:cursor-pointer "
            onClick={handleClick}
        >
            <div className="flex justify-between">
                <span className="font-mono text-3xl font-bold text-left">
                    {item.Name}
                </span>
                <span>{item.Date}</span>
            </div>
            <p className="text-left text-s font-light"> {item.Summary} </p>
        </div>
    );
};

export default ListObject;
