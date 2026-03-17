import { useEffect, useState } from "react";
import table from "../table.json";
import ListObject from "../components/ListObject";
import type { Article } from "../schema/schema";
function Home() {
    const [timer, useTimer] = useState(false);
    useEffect(() => {
        setInterval(() => useTimer(true), 2000);
    }, []);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col min-h-screen justify-center items-center w-full overflow-x-hidden px-5">
                <div className="bg-red-700  py-3 w-full">
                    <p className="text-5xl sm:text-3xl md:text-8xl lg:text-9xl font-alfa text-center leading-tight">
                        I have Something to say
                    </p>
                </div>
                <p className="ml-auto font-alfa">
                    {timer ? "I'm Tryna Yap" : "..."}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3">
                {table.items.map((item: Article) => {
                    return <ListObject {...item} />;
                })}
            </div>
        </div>
    );
}

export default Home;
