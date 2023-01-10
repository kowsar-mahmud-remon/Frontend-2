import React, { useState, useEffect } from 'react';
import { useGetAllCategoryCountQuery, useGetAllCategoryForHomePage, useGetAllCategoryForHomePageQuery, useGetCategoryQuery } from '../../features/category/categoryApi';
import AllCategoryCard from './AllCategoryCard';
import InfiniteScroll from 'react-infinite-scroll-component';

const AllCategory = () => {

    const limit = 3
    const [page, setPage] = useState(0)
    const [category, setCategory] = useState([])

    const { data: categoryData, isLoading: categoryLoading, error: categoryError } = useGetAllCategoryForHomePageQuery({ page, limit }, {
        skip: category.length > 0 ? true : false
    })
    const { data: categoryCountData, isLoading: categoryCountLoading, error: categoryCountError } = useGetAllCategoryCountQuery()
    // console.log('cs',categoryCountData)
    console.log('cat', categoryData)
    useEffect(() => {
        if (categoryData?.result) {
            console.log('cats', categoryData)
            setCategory([...category, ...categoryData?.result])
        }
    }, [page, category, categoryData])

    const fetchMoreData = () => {
        setPage(page + 1)
        console.log('page', page)
        console.log('cat', category)
    }

    return (
        <>
            <InfiniteScroll
                dataLength={category.length}
                next={fetchMoreData}
                hasMore={category.length < (categoryCountData?.total)}
                loader={<h4>Loading...</h4>}
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