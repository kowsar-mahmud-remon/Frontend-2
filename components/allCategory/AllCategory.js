import React, { useState, useEffect } from 'react';
import { useGetAllCategoryCountQuery, useGetAllCategoryForHomePage, useGetAllCategoryForHomePageQuery, useGetCategoryQuery } from '../../features/category/categoryApi';
import AllCategoryCard from './AllCategoryCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { increasePage } from '../../features/category/categorySlice';

const AllCategory = () => {

    const limit = 3
    const [call, setCall] = useState(false)
    const [category, setCategory] = useState([])
    const { category: { page } } = useSelector(state => state)
    const dispatch = useDispatch()
    
    const { data: categoryData, isLoading: categoryLoading, error: categoryError, refetch } = useGetAllCategoryForHomePageQuery({ page, limit }, {
        skip: false,
    })

    const { data: categoryCountData, isLoading: categoryCountLoading, error: categoryCountError } = useGetAllCategoryCountQuery()

    useEffect(() => {
        if (categoryData?.result && (category.length < (+categoryCountData?.result))) {
            console.log('cats', categoryData)
            setCategory([...category, ...categoryData?.result])
            setCall(!call)
        }
    }, [categoryData])

    const fetchMoreData = () => {
        dispatch(increasePage({ page: 1 }))
        setCall(!call)
    }

    

    return (
        <>
            <InfiniteScroll
                dataLength={category.length}
                next={fetchMoreData}
                hasMore={category.length < (+categoryCountData?.result)}
                loader={<h4 className='text-center py-7'>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center', marginTop: '10px' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {
                    category?.map((category, index) => <AllCategoryCard
                        key={index}
                        products={category.products}
                        result={category}
                    />)
                }
            </InfiniteScroll>
        </>
    );
};

export default AllCategory;