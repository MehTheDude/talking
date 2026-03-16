import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const ArticlePage = () => {
    const { filepath } = useParams();
    const [rawContent, setRawContent] = useState("");
    useEffect(() => {
        const importContent = async () => {
            const response = await fetch(`/articles/${filepath}`);
            const content = await response.text();
            setRawContent(content);
        };
        importContent();
    }, []);

    const lines = rawContent.split("\n");
    const Heading = lines[0];
    const content = lines.slice(1).join("\n");

    return (
        <div className="flex flex-col justify-center items-center ">
            <BackButton />
            <div className="w-2/3 p-10">
                <h1 className="font-alfa bg-red-700 mb-10">{Heading}</h1>
                <p className="text-left text-2xl whitespace-pre-wrap font-mono">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default ArticlePage;
