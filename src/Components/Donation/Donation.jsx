import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Donation.css'; 

const Donation = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);

  const handleClickToDonate = () => {
    toast('Donation successful');
  };

  return (
    <div className="max-w-7xl m-auto relative">
      <div className="image-container relative">
        <img className="w-full" src={donation.Img} alt="" />
        <div className="overlay" />
        <div className="button-container">
          <button onClick={handleClickToDonate} className="btn bg-red-600">
            Donate {donation.price}
          </button>
        </div>
      </div>
      <div className="relative">
        <h1 className="text-3xl mt-4 mb-4">{donation.category}</h1>
        <p className="text-2xl">
          <small>{donation.donation_description}</small>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Donation;
