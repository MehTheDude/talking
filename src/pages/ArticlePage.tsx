import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const { filepath } = useParams();
    const [content, setContent] = useState("");
    useEffect(() => {
        const importContent = async () => {
            const response = await fetch(`/articles/${filepath}`);
            const content = await response.text();
            setContent(content);
        };
        importContent();
    }, []);
    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="w-2/3">
                <p className="text-left text-xl">{content}</p>
            </div>
        </div>
    );
};

export default ArticlePage;
