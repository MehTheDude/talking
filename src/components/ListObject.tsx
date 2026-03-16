import type { Article } from "../schema/schema.ts";
const ListObject = (item: Article) => {
    return (
        <div className="m-2 p-4 border-2 border-red-600 w-full">
            {item.Name}
        </div>
    );
};

export default ListObject;
