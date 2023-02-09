import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdArrowBackIos } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCategoryQuery } from "../../features/category/categoryApi";
import { addCategoryName } from '../../features/category/categorySlice';
import styles from "../../styles/componentsStyles/SideNav.module.css";
const MobileCategory = () => {
     const router = useRouter();
     const { data, isLoading, isError, error } = useGetCategoryQuery();
     const { asPath } = router;
     const {
       category: { activeBtn, categoryName, isActiveCategory },
     } = useSelector((state) => state);
     const dispatch = useDispatch();
    
    return (
      <div>
        <section
          className={`shawdow-black shadow-2xl delay-700 sideNavTransition mb-12`}
          id="sidNav"
        >
          <h1 className="text-lg font-bold my-5 ml-4">Categories</h1>
          <ul className="grid grid-cols-2 gap-4 p-2 bg-[#f1ecec]">
            {data?.categories?.map((c, index) => {
              let path = `/categories/${c.slug}/${c._id}`;

              return (
                <li
                  onClick={() => {
                    dispatch(addCategoryName({ name: c.name }));
                    router.push(path);
                  }}
                  as={"li"}
                  href={`/hi`}
                  key={index}
                  className="px-4 py-3 bg-white shadow-md rounded"
                >
                  <Link
                    href={path}
                    className="flex justify-start items-center text-[12px] font-semibold"
                  >
                    <Image
                      loader={() => c.categoryImage.img}
                      src={c.categoryImage.img}
                      alt={c.categoryImage.key}
                      width={30}
                      height={30}
                    />
                    <p className="ml-2">{c.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
};

export default MobileCategory;