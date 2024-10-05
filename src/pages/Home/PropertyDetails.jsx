import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const PropertyDetails = () => {
    const { id } = useParams()
    const [estate, setEstate] = useState(null)
    const [error, setError] = useState(null);


    useEffect(() => {
        // Fetch properties from the properties.json file
        const fetchEstateDetails = async () => {
            try {
                const response = await fetch('/properties.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch property details');
                }
                const data = await response.json();
                const selectedEstate = data.find(property => property.id === parseInt(id));
                if (!selectedEstate) {
                    throw new Error('Property not found');
                }
                setEstate(selectedEstate); // Set the fetched estate details

            } catch (error) {
                setError(error.message); // Set the error message

            }
        };

        fetchEstateDetails();
    }, [id]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="min-h-screen ">
            {estate && (
                <div>
                    <div className="flex gap-6 my-8">
                        <img src={estate.image} alt={estate.estate_title} className="w-1/2  object-cover rounded-lg" />
                        <div className="space-y-3">
                            <h1 className="text-4xl font-bold">{estate.estate_title}</h1>
                            <p>Price: {estate.price}</p>
                            <p>Area: {estate.area}</p>
                            <p>Status: {estate.status}</p>
                            <p>Location: {estate.location}</p>
                            <p>Description: {estate.description}</p>
                            <p>Facilities: {estate.facilities.join(', ')}</p>
                        </div>
                    </div>
                    <Link to='/'><button className="btn btn-outline text-[#ebcfa7] shadow-[#ebcfa7] shadow-sm hover:bg-[#c49452] hover:text-white">Go to home</button></Link>
                </div>
            )}
        </div>
    );
};

export default PropertyDetails;