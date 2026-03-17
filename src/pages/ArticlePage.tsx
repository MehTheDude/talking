import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const ArticlePage = () => {
    const { filepath } = useParams();
    const [rawContent, setRawContent] = useState("");
    useEffect(() => {
        const importContent = async () => {
            const basePath = "/talking";
            const response = await fetch(
                `${basePath}/articles/${filepath}.txt`,
            );
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
            <div className="w-full md:w-2/3 p-10">
                <p className="font-alfa bg-red-700 mb-3 md:mb-10 text-2xl md:text-6xl">
                    {Heading}
                </p>
                <p className="text-left md:text-2xl whitespace-pre-wrap font-mono">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default ArticlePage;
