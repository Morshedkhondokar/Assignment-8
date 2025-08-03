import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
    ResponsiveContainer,} from "recharts";
import useTitle from "../../Title/useTitle";

const Statistics = () => {
    useTitle("Statistics")
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch("/data/data.json")
        .then(res => res.json())
        .then(data =>{
        const updatedData = data.map((item) => ({...item,total: item.price * (item.quantity || 1)}));
        setProducts(updatedData);
    });
    },[])


    return (
    <div className=" ">
        <div className='h-[340px] md:h-[220px] bg-[#9538e2] pt-8'>
              <div className=' flex flex-col justify-center items-center h-36 gap-4 pt-6 px-3 max-w-[800px] mx-auto'>
                <h1 className='font-bold text-3xl text-white'>Statistics</h1>
                <p className='text-white text-center'>Explore the latest gadgets that will take your experience to 
                  the next level. From smart devices to the coolest accessories, we have it all!</p>
              </div>
            </div>
        <div className="px-3 mt-6">
            <h1 className='text-2xl font-bold'>Statistics</h1>
       <div className="w-full h-[400px] mb-20 mt-6 bg-white rounded-2xl p-2 shadow-lg">
            <ResponsiveContainer width="100%" height='100%'>
            <BarChart data={products}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Multiple Bars */}
            <Bar dataKey="price" fill="#9538e2" name="Price" />
            <Bar dataKey="total" fill="#bf87ee" name="Total" />
            <Bar dataKey="rating" fill="#ff0000" name="Rating" />
            </BarChart>
      </ResponsiveContainer>
       </div>
        </div>
    </div>
    );
};

export default Statistics;