import { Link } from "react-router-dom";


const Estate = ({ estate }) => {
    const { id, estate_title, location, image, area, status, price } = estate
    return (
        <div>
            <div className="card p-6  border border-[#ebcfa7]">
                <figure className="w-full">
                <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl  " />
                </figure>
                <div className="space-y-3 mt-6">
                    <h2 className="card-title">{estate_title}</h2>
                    <p>Price: {price}</p>
                    <p>Area: {area}</p>
                    <p>For {status}</p>
                    <div className="card-actions">
                       <Link to={`/property-details/${id}`}>
                        <button className="btn btn-outline text-[#ebcfa7] shadow-[#ebcfa7] shadow-sm hover:bg-[#c49452] hover:text-white">VIew Property</button>
                       </Link>
                    </div>

                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Estate;