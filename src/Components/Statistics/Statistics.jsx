import { useParams } from "react-router-dom";

 
 const Statistics = () => {
   const {id} = useParams()
   console.log(id)
    return (
        <div>
           <h3 className="text-4xl font-bold">Statistics</h3> 
        </div>
    );
 };
 
 export default Statistics;