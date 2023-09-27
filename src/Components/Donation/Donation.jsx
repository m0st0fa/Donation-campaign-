import { useLoaderData, useParams } from "react-router-dom";

const Donation = () => {
  const donations = useLoaderData()
  const { id } = useParams();
  const idInt = parseInt(id)
  const dontation = donations.find(dontation => dontation.id === idInt)
  console.log(dontation, idInt)
  return (
    <div className="max-w-7xl m-auto">
      <img className="w-full" src={dontation.Img} alt="" />
      <div>
      </div>
      <div  className="">
        <button className="btn mt-4"> Donate {dontation.price}</button>
        <div className="  relative">
        <h1 className="text-3xl mt-4 mb-4 ">{dontation.category}</h1>
        <p className="text-2xl"><small> {dontation.donation_description}</small></p>
        </div>

      </div>
    </div>

  );
};

export default Donation;