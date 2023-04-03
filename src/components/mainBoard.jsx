import React from 'react'
import FilmCardsBoard from './filmCardsBoard'
import { Tag } from 'antd'
import { Navigation } from './Navigation'
import { GalleryPage } from './GalleryPage'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
// const { Search } = Input
const MainBoard = () => {

    // const handleSearch = value => {
    //     console.log(value)
    // }

    return (
        <>
            <div className='mainBoard'>
                <div className='wrap'>
                    {/*<div className='wrap2'>*/}
                <Tag color={'#E1B517'} style={{
                    height: "40px",
                    marginTop: "20px",
                    marginLeft: "60px",
                    borderRadius: "6px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "black" }}>
                    <h1>Movie Library</h1>
                </Tag>


                {/*<Search*/}
                {/*    placeholder="Enter the movie title..."*/}
                {/*    allowClear*/}
                {/*    size="large"*/}
                {/*    style={{*/}
                {/*        width: 500,*/}
                {/*        marginTop: 20*/}
                {/*    }}*/}
                {/*    // enterButton='Search'*/}
                {/*    onSearch={handleSearch}*/}
                {/*/>*/}


                    {/*</div>*/}
                    <Navigation />
                </div>

                <Routes>
                    <Route path='/' element={<FilmCardsBoard />}/>
                    <Route path='/gallery' element={<GalleryPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </div>
        </>
    )
}

export default MainBoard