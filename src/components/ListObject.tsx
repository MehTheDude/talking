import { useNavigate } from "react-router-dom";
import type { Article } from "../schema/schema.ts";
const ListObject = (item: Article) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/article/${item.FileName}`);
    };
    return (
        <div
            className="m-2 p-4 border-2 border-red-600 w-full"
            onClick={handleClick}
        >
            {item.Name}
        </div>
    );
};

export default ListObject;
