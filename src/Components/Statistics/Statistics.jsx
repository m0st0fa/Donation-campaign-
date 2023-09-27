import { useLoaderData} from "react-router-dom";

 
 const Statistics = () => {
   const data = useLoaderData()
   console.log(data)
    return (
        <div className="max-w-7xl m-auto">
           <h3 className="text-4xl font-bold">Statistics</h3> 
        </div>
    );
 };
 
 export default Statistics;