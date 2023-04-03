export const genresObject = {
  action: {id: 1, name: 'Action'},
  drama: {id: 2, name: 'Drama'},
  comedy: {id: 3, name: 'Comedy'},
  fantasy: {id: 4, name: 'Fantasy'},
  horror: {id: 5, name: 'Horror'},
  mystery: {id: 6, name: 'Mystery'},
  romance: {id: 7, name: 'Romance'},
  thriller: {id: 8, name: 'Thriller'},
  western: {id: 9, name: 'Western'}
}

export const genres = [
  {id: 1, name: 'Action'},
  {id: 2, name: 'Drama'},
  {id: 3, name: 'Comedy'},
  {id: 4, name: 'Fantasy'},
  {id: 5, name: 'Horror'},
  {id: 6, name: 'Mystery'},
  {id: 7, name: 'Romance'},
  {id: 8, name: 'Thriller'},
  {id: 9, name: 'Western'}
]

const fetchAll = () => new Promise(resolve => {
  setTimeout(() => resolve(genresObject), 2000)
})

const x = {
  fetchAll
}
export default x

export function syncFetchAll() {
  return genresObject
}



