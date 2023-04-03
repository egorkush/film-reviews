
const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {

  const pageCount = Math.ceil(itemsCount / pageSize)


  // if (pageCount < currentPage) {
  //   onPageChange(currentPage - 1)
  // }

  if (pageCount === 1) {
    return null
  }

  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page =>
          <li className={"page-item" + (page === currentPage ? ' active' : '')} key={'page_' + page}>
            <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination