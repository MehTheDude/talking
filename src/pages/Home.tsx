import { useEffect, useState } from "react";
import table from "../table.json";
import ListObject from "../components/ListObject";
import type { Article } from "../schema/schema";
function Home() {
    const [timer, useTimer] = useState(false);
    useEffect(() => {
        setInterval(() => useTimer(true), 5000);
    }, []);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-col min-h-screen justify-center items-center">
                <div className="bg-red-700 px-10 py-3">
                    <p className="text-9xl font-alfa">
                        I have something to say
                    </p>
                </div>
                <p className="ml-auto font-alfa">{timer ? "scroll" : ""}</p>
            </div>
            <div className=" flex flex-col justify-center items-center w-1/2">
                {table.items.map((item: Article) => {
                    return <ListObject {...item} />;
                })}
            </div>
        </div>
    );
}

export default Home;
