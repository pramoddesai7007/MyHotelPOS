'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurants = () => {
    const [data, setData] = useState({ zomato: [], swiggy: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://103.159.85.246:5000/api/zomato/restaurants');
                setData(response.data);
            } catch (error) {
                console.error('Failed to fetch restaurants', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Restaurants</h1>
            <h2>Zomato</h2>
            <ul>
                {data.zomato.restaurants?.map((restaurant) => (
                    <li key={restaurant.restaurant.id}>{restaurant.restaurant.name}</li>
                ))}
            </ul>
            <h2>Swiggy</h2>
            <ul>
                {data.swiggy?.map((restaurant) => (
                    <li key={restaurant.id}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Restaurants;
