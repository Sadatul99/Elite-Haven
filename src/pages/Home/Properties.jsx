import { useState, useEffect } from "react";
import Estate from "./Estate";

const Properties = () => {
    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch('properties.json')
            .then(res => res.json())
            .then(data => setEstates(data))
            .catch(err => console.error("Failed to fetch properties", err));
    }, []); 

    return (
        <div className="my-10">
            <h2 className="text-5xl text-center my-10 text-[#ebcfa7] font-semibold">Estates</h2>
            <div className="grid grid-cols-3 gap-4">
                {estates.map(estate => (
                    <Estate key={estate.id} estate={estate} />
                ))}
            </div>
        </div>
    );
};

export default Properties;
