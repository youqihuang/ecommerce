import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs';

import {useStateContext} from '../context/StateContext';
import { runFireworks } from '../lib/utils';


const Success = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();
    useEffect(() => {
       localStorage.clear();
       setCartItems([]);
       setTotalPrice(0);
       setTotalQuantities(0); 
       runFireworks();
    }, []);
  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill/>
            </p>
            <h2>感謝貴方的訂單!</h2>
            <p className="email-msg">收據已送到您的電子郵箱</p>
            <p className="description">
            如果有任何問題，請聯繫
            <a className="email" href="mailto:order@example.com">
                order@example.com
            </a>
            </p>
            <Link href = "/">
                <button type ="button" width="300px" className="btn"> 
                    繼續購物
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success