import React, { useState, useEffect } from 'react'
import FilmCard from './filmCard'
import api from '../api'
import Pagination from './pagination'
import GroupList from './groupList'
import { Button } from 'antd'
import Search from 'antd/es/input/Search'
// import { Pagination } from 'antd'
const FilmCardsBoard = () => {
  const films = api.syncFilms.syncFetchAll()
  const pageSize = 8
  const [currentPage, setCurrentPage] = useState(1)

  const [genres, setGenres] = useState()

  const [filmCards, setFilmCards] = useState()

  const [selectedGenre, setSelectedGenre] = useState()

  useEffect(() => {
    // api.genres.fetchAll().then(data => setGenres(data))
    setGenres(api.syncGenres.syncFetchAll())
  }, [])

  useEffect(() => {
    api.films.fetchAll().then(data => setFilmCards(data))
    // setFilmCards(api.syncFilms.syncFetchAll())
  }, [])

  useEffect(() => {
    setCurrentPage(1)
    // console.log(filteredFilmCards)
    // console.log(filmCards)
  }, [selectedGenre])


  const handleGenreSelect = item => {
    setSelectedGenre(item)
  }

  const handlePageChange = pageIndex => {
      setCurrentPage(pageIndex)
    }

  const handleFilmRemove = id => setFilmCards(filmCards.filter(filmCard => filmCard.id !== id))

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    return [...items].splice(startIndex, pageSize)
  }

  let filteredFilmCards
  let filmCardsCrop

  // if (filmCards) {
  //   filteredFilmCards = selectedGenre ? filmCards.filter(film => film.genres.includes(selectedGenre)) : filmCards
  //   filmCardsCrop = paginate(filteredFilmCards, currentPage, pageSize)
  // }

  if (filmCards) {
    // console.log('selectedGenre', selectedGenre)
    // console.log('filmCards', filmCards)
    filteredFilmCards = selectedGenre
      // ? filmCards.filter(film => JSON.stringify(film.genres[0]) === JSON.stringify(selectedGenre))
      ? filmCards.filter(film => film.genres.map(genre => JSON.stringify(genre)).includes(JSON.stringify(selectedGenre)))
      : filmCards
    filmCardsCrop = paginate(filteredFilmCards, currentPage, pageSize)
  }

  // const filteredFilmCards = selectedGenre ? filmCards.filter(film => film.genres.includes(selectedGenre)) : filmCards
  // const filmCardsCrop = paginate(filteredFilmCards, currentPage, pageSize)

  const clearFilter = () => {
    setSelectedGenre()
    setFilmCards(films)
  }

  const handleSearch = str => {
    setFilmCards(films.filter(filmCard => {
      // filmCard.title.toLowerCase().includes(str.toLowerCase()))
     return filmCard.directors.join('').toLowerCase().includes(str.toLowerCase()) ||
       filmCard.title.toLowerCase().includes(str.toLowerCase())
  }))
    setCurrentPage(1)
  }

  let count

  if (filmCards){
    count = filteredFilmCards.length
  }

  if (Math.ceil(count / pageSize) < currentPage) {
    setCurrentPage(prevState => prevState - 1)
  }

    return (
        <div className='filmCardBoard'>
          <div className='sideBarAndfilmsArea'>
            <div className='tmp'>

              {genres && (
                <div className='sideBar'>
                  <Search
                    placeholder="Enter the movie title..."
                    allowClear
                    size="large"
                    style={{
                      width: 200,
                      marginTop: 20
                    }}
                    // enterButton='Search'
                    onSearch={handleSearch}

                  />
                  <GroupList
                    items={genres}
                    onItemSelect={handleGenreSelect}
                    valueProperty='id'
                    contentProperty='name'
                    selectedItem={selectedGenre}
                  />
                  <Button
                    onClick={clearFilter}
                    style={{margin: '20px 0',fontFamily: 'Anton, sans-serif', width: '100%', height: '40px'}}
                  >
                    Clear
                  </Button>
                </div>
              )}


              {filmCards
              ? filmCards.length > 0
                  ? <div className='filmsArea'>
                    {/*{filmCardsCrop.map(filmCard =>*/}
                    {filmCardsCrop.map(filmCard =>
                      (<FilmCard
                        key={filmCard.id}
                        {...filmCard}
                        onDelete={() => handleFilmRemove(filmCard.id)}
                      />))}
                  </div>
                  : <div className='divh1'>
                    <div style={{color: '#E1B517', fontSize: 'xxx-large', fontFamily: 'Anton, sans-serif'}}>
                      You deleted all movies
                    </div>
                  </div>
                : <div className='loading' ><div style={{color: '#E1B517', fontSize: 'xxx-large', fontFamily: 'Anton, sans-serif'}}>
                  {/*Loading...*/}
                  <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                </div>
              }
            </div>

            <div className='paginationWrap'>
              {filmCards && filmCards.length > 0
                  ? <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                  />
                  : null}
            </div>

         </div>
        </div>
    )
}

export default FilmCardsBoard




// <Pagination
//       defaultCurrent={2}
//       pageSize={4}
//       total={16}
//       style={{backgroundColor: '#E1B517'}}
//       onChange={handleChange}
//   />


