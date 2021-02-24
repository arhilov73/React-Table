import React, { useState, useEffect } from 'react';
import TableHead from './components/TableHead';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Filtration from './components/Filtration';
import axios from 'axios';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [filterValue, setFilterValue] = useState('');
  const [directionOfSort, setDirectionOfSort] = useState(false);

  // Getting data
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://www.filltext.com/?rows=100&id=%7Bnumber%7C100%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Filter data
  function getFiltredData() {
    if (!filterValue) {
      return posts;
    } else {
      return (
        posts.filter(
          item => {
            return (item['id'].toString().toLowerCase().includes(filterValue.toLowerCase())
              || item['firstName'].toString().toLowerCase().includes(filterValue.toLowerCase())
              || item['lastName'].toString().toLowerCase().includes(filterValue.toLowerCase())
              || item['email'].toString().toLowerCase().includes(filterValue.toLowerCase())
              || item['phone'].toString().toLowerCase().includes(filterValue.toLowerCase())
            );
          }
        )
      );
    }
  }
  const filtredData = getFiltredData();

  // Clear filtration input
  function clearFiltredData() {
    setFilterValue('');
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filtredData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Sorting data by th-click in 2 directions
  function sortData(field) {
    const copyPosts = posts.concat();
    let sortPosts = [];
    if (!directionOfSort) {
      sortPosts = copyPosts.sort(
        (a, b) => a[field] > b[field] ? 1 : -1
      );
      setDirectionOfSort(true);
    } else {
      sortPosts = copyPosts.sort(
        (a, b) => a[field] > b[field] ? -1 : 1
      );
      setDirectionOfSort(false);
    }
    
    setPosts(sortPosts);
  }

  // App body
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>React Table</h1>

      <Filtration 
        getFiltredData={getFiltredData}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
        clearFiltredData={clearFiltredData} />

      <table>
        <TableHead 
          sortData={sortData} 
        />
        <Posts 
          posts={currentPosts} 
          loading={loading} 
        />  
      </table>
      
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filtredData.length}
        paginate={paginate}
      />
      
    </div>
  );
};

export default App;
