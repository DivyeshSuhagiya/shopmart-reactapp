import React from 'react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchSearchProduct } from '../redux/actions/productaction';
import { useParams } from 'react-router-dom';
import ProductComponent from '../components/productComponent/ProductComponent';
import { useMemo } from 'react';


function Search() {
    const [cookies, setCookie] = useCookies(["userId"]);

    const product = useSelector(state => state.product.product)
    const dispatch = useDispatch()

    useEffect(() => {
        debugger
        // dispatch(fetchSearchProduct())
    }, [])
    // useEffect(()=> {
    //     dispatch(fetchProduct())
    // } , [])
    
    // useMemo(() => dispatch(fetchProduct()) , [])
    // console.log(product);
    return (
        <>
        
            <div className='row'>
                {product.map(x => {
                    return (
                        <div className='col-6 col-md-4 col-lg-3'>
                            <ProductComponent images={x.productImage} shopName={x.shopName} price={x.price} yourPrice={x.offerPrice} discount={x.discount} productName={x.productName} id={x._id}/>
                        </div> 
                    )
                })}
                
            </div>

        </>
    )
}

export default Search