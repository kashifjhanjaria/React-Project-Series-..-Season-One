import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

const PinterestSearch = () => {
    const [icons, setIcons] = useState(false);
    const [container, setContainer] = useState(false);
    const [searchContainer, setSearchContainer] = useState(false);
    const [inputvalue, setInputValue] = useState('')
    const [filterList, setFilterList] = useState([]);
    const list = [
        { id: 1, search: "javascript" },
        { id: 2, search: "php" },
        { id: 3, search: "react" },
        { id: 4, search: "laravel" },
        { id: 5, search: "redux" },
    ]
    const handleSearchFocus = () => {
        setIcons(true)
        setContainer(true)
        setSearchContainer(true)
    }
    const handleCloseSearchBlure = () => {
        setIcons(false)
        setContainer(false)
        setSearchContainer(false)
    }
    const handleSearchItems = (e) => {
        const filterArray = list.filter((item) => {
            return item.search.startsWith(e.target.value);
        })
        // console.log(filterArray , 'filterArray');
        setInputValue(e.target.value)
        // console.log(inputvalue , "Id");
        setFilterList(filterArray)
        // console.log(filterList , "Filtered List");
        console.log(filterList.length);
    }
    const handleContainerHide = ()=>{
        setContainer(false)
        setSearchContainer(false)
        setInputValue('')
    }
    return (

        <div className='flex flex-col w-full relative bg-white'>

            <div className='flex items-center  w-full h-[40px] mt-3'>
                <div className='leftSide  h-[40px] flex items-center gap-3 px-4' style={{ flex: "1" }}>
                    <div>
                        <svg className="g_1 gUZ U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M0 12a12 12 0 0 0 7.73 11.22 12 12 0 0 1 .03-3.57l1.4-5.94S8.8 13 8.8 11.94c0-1.66.96-2.9 2.16-2.9 1.02 0 1.51.77 1.51 1.68 0 1.03-.65 2.56-.99 3.98-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86a5.17 5.17 0 0 0-5.39 5.18c0 1.03.4 2.13.9 2.73q.12.17.08.34l-.34 1.36q-.06.31-.4.16c-1.49-.7-2.42-2.88-2.42-4.63 0-3.77 2.74-7.23 7.9-7.23 4.14 0 7.36 2.95 7.36 6.9 0 4.12-2.6 7.43-6.2 7.43-1.21 0-2.35-.63-2.74-1.37l-.74 2.84a14 14 0 0 1-1.55 3.23A12 12 0 1 0 0 12"></path></svg></div>
                    <div className='py-1 px-2 bg-black rounded-full text-white cursor-pointer'>Home</div>
                    <div className='py-1 px-2 bg-black rounded-full text-white cursor-pointer'>Create</div>
                </div>
                <div className='search ' style={{ flex: "3" }}>
                    <div className='w-full bg-gray-300  flex items-center gap-3 px-4 h-[40px] rounded-full' >
                        {icons ? null : <CiSearch size={30} />}

                        <input value={inputvalue} onChange={(e) => handleSearchItems(e)} className='w-full bg-gray-300 h-full  outline-none px-3' type="text" onClick={handleSearchFocus} />

                        {icons ? <IoMdCloseCircle size={30} className='bg-gray-200 rounded-full cursor-pointer' onClick={handleCloseSearchBlure} /> : null}

                    </div>
                </div>
                <div className='rightSide  h-[40px] flex justify-end px-3 items-center gap-5' style={{ flex: "1" }}>
                    <div className='w-[40px] h-[40px] hover:bg-gray-300 flex justify-center items-center rounded-full'><svg class="BNH gUZ U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M19 7v6.17A10 10 0 0 1 22 19H2a10 10 0 0 1 3-5.83V7a7 7 0 1 1 14 0m-4 14a3 3 0 1 1-6 0z"></path></svg></div>
                    <div className='w-[40px] h-[40px] hover:bg-gray-300 flex justify-center items-center rounded-full'><svg class="Hn_ BNH gUZ U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M18 12.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-6-3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 0a11 11 0 0 0-8.52 17.95l-1.46 5.43a.5.5 0 0 0 .73.55l5.08-2.75A10.98 10.98 0 0 0 23 11 11 11 0 0 0 12 0"></path></svg></div>
                </div>
            </div>
            {searchContainer &&
                <div className=' w-full flex justify-center bg-white relative'>
                    <div className={` w-[60%] absolute bg-white mt-1 rounded-lg px-3 py-2 ${filterList.length === 0 ? "hidden" : "didldl"} `} style={{ zIndex: "999" }}>

                        {filterList ? filterList.map((item) => {
                            return (
                                <ul key={item.id}>
                                    <li className='flex items-center  gap-2  py-1 hover:bg-gray-500'>
                                        <span><CiSearch size={20} /></span> <span>{item.search}</span>
                                    </li>
                                </ul>
                            )
                        }) : null}


                    </div>
                </div>
            }

            <div className='px-5 py-2 grid grid-cols-5 '>
                <div> <img className='w-[200px] h-[250px]' src="https://i.pinimg.com/236x/f9/e1/2f/f9e12f67885985aedc45c09e717b0b72.jpg" alt="" /></div>
                <div> <img className='w-[200px] h-[250px]' src="https://i.pinimg.com/236x/f9/e1/2f/f9e12f67885985aedc45c09e717b0b72.jpg" alt="" /></div>
                <div> <img className='w-[200px] h-[250px]' src="https://i.pinimg.com/236x/f9/e1/2f/f9e12f67885985aedc45c09e717b0b72.jpg" alt="" /></div>
                <div> <img className='w-[200px] h-[250px]' src="https://i.pinimg.com/236x/f9/e1/2f/f9e12f67885985aedc45c09e717b0b72.jpg" alt="" /></div>
                <div> <img className='w-[200px] h-[250px]' src="https://i.pinimg.com/236x/f9/e1/2f/f9e12f67885985aedc45c09e717b0b72.jpg" alt="" /></div>
            </div>

            {container && <div onClick={handleContainerHide}  className='   w-full  bg-gray-500/50 absolute top-[55px]' style={{ height: "calc(100vh - 150px)" }}></div>}
        </div>
    )
}

export default PinterestSearch