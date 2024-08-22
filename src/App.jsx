
// import React, { useState, useEffect } from 'react';
// import collegesData from './colleges.json'; 
// import './App.css'; 
// import College from './components/CollegeName';
// import CourseFees from './components/CourseFees';
// import Placement from './components/Placement';
// import UserReviews from './components/UserReviews';
// import Ranking from './components/Ranking';

// const CollegeTable = () => {
//     const [colleges, setColleges] = useState([]);
//     const [page, setPage] = useState(1);
//     const [query, setQuery] = useState('');
//     const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

//     useEffect(() => {
//         loadMoreColleges();
//     }, [page]);

//     const loadMoreColleges = () => {
//         const itemsPerPage = 10;
//         const startIndex = (page - 1) * itemsPerPage;
//         const nextColleges = collegesData.slice(startIndex, startIndex + itemsPerPage);
//         setColleges((prevColleges) => [...prevColleges, ...nextColleges]);
//     };

//     const handleScroll = () => {
//         if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//             setPage((prevPage) => prevPage + 1);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const handleSearch = (e) => {
//         setQuery(e.target.value);
//         setPage(1);
//         setColleges([]);
//     };

//     const handleSort = (e) => {
//         const [key, direction] = e.target.value.split('|');
//         setSortConfig({ key, direction });
//     };

//     const sortedColleges = () => {
//         let sortedArray = [...colleges];
//         if (sortConfig.key) {
//             sortedArray.sort((a, b) => {
//                 if (a[sortConfig.key] < b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? -1 : 1;
//                 }
//                 if (a[sortConfig.key] > b[sortConfig.key]) {
//                     return sortConfig.direction === 'ascending' ? 1 : -1;
//                 }
//                 return 0;
//             });
//         }
//         return sortedArray;
//     };

//     const filteredColleges = sortedColleges().filter(college =>
//         college.name.toLowerCase().includes(query.toLowerCase())
//     );

//     return (
//         <div>
//             <div className="search-sort-container">
//                 <input 
//                     type="text" 
//                     placeholder="Search by college name" 
//                     value={query} 
//                     onChange={handleSearch} 
//                     className="search-input"
//                 />
//                 <select onChange={handleSort} className="sort-select">
//                     <option value="">Sort By</option>
//                     <option value="cdRank|ascending">CD Rank (Ascending)</option>
//                     <option value="cdRank|descending">CD Rank (Descending)</option>
//                     <option value="fees|ascending">Course Fees (Ascending)</option>
//                     <option value="fees|descending">Course Fees (Descending)</option>
//                     <option value="userReviews|ascending">User Reviews (Ascending)</option>
//                     <option value="userReviews|descending">User Reviews (Descending)</option>
//                 </select>
//             </div>
//             <div className="table-container">
//                 <table className="college-table">
//                     <thead>
//                         <tr>
//                             <th>CD Rank</th>
//                             <th>College Name</th>
//                             <th>Course Fees</th>
//                             <th>Placement</th>
//                             <th>User Reviews</th>
//                             <th>Ranking</th>
//                             <th>Featured</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredColleges.map((college, idx) => (
//                             <tr key={idx}>
//                                 <td>{college.cdRank}</td>
//                                 <td><College name={college.name} city={college.city} state={college.state}  /></td>
//                                 <td><CourseFees Fees={college.fees} /></td>
//                                 <td><Placement Placement={college.placement} /></td>
//                                 <td><UserReviews Review={college.userReviews} /></td>
//                                 <td><Ranking rank={college.ranking} /></td>
//                                 <td>{college.featured ? 'Featured' : ''}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default CollegeTable;


import React, { useState, useEffect } from 'react';
import collegesData from './colleges.json'; 
import './App.css'; 
import College from './components/CollegeName';
import CourseFees from './components/CourseFees';
import Placement from './components/Placement';
import UserReviews from './components/UserReviews';
import Ranking from './components/Ranking';

const CollegeTable = () => {
    const [colleges, setColleges] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

    useEffect(() => {
        loadMoreColleges();
    }, [page]);

    const loadMoreColleges = () => {
        const itemsPerPage = 10;
        const startIndex = (page - 1) * itemsPerPage;
        const nextColleges = collegesData.slice(startIndex, startIndex + itemsPerPage);
        setColleges((prevColleges) => [...prevColleges, ...nextColleges]);
    };

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = (e) => {
        setQuery(e.target.value);
        setPage(1);
        
    };

    const handleSort = (e) => {
        const [key, direction] = e.target.value.split('|');
        setSortConfig({ key, direction });
    };

    const sortedColleges = () => {
        let sortedArray = [...colleges];
        if (sortConfig.key) {
            sortedArray.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedArray;
    };
  

    const filteredColleges = sortedColleges().filter(college =>
        college.name.toLowerCase().includes(query.toLowerCase())
    );
   

    return (
        <div>
            <div className="search-sort-container">
                <input 
                    type="text" 
                    placeholder="Search by college name" 
                    value={query} 
                    onChange={(e)=>handleSearch(e)} 
                    className="search-input"
                />
                <select onChange={handleSort} className="sort-select">
                    <option value="">Sort By</option>
                    <option value="cdRank|ascending">CD Rank (Ascending)</option>
                    <option value="cdRank|descending">CD Rank (Descending)</option>
                    <option value="fees|ascending">Course Fees (Ascending)</option>
                    <option value="fees|descending">Course Fees (Descending)</option>
                    <option value="userReviews|ascending">User Reviews (Ascending)</option>
                    <option value="userReviews|descending">User Reviews (Descending)</option>
                </select>
            </div>
            <div className="table-container">
                <table className="college-table">
                    <thead>
                        <tr>
                            <th>CD Rank</th>
                            <th>College Name</th>
                            <th>Course Fees</th>
                            <th>Placement</th>
                            <th>User Reviews</th>
                            <th>Ranking</th>
                            <th>Featured</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredColleges.length > 0 ? (
                            filteredColleges.map((college, idx) => (
                                <tr key={idx}>
                                    <td>{college.cdRank}</td>
                                    <td><College name={college.name} city={college.city} state={college.state} /></td>
                                    <td><CourseFees Fees={college.fees} /></td>
                                    <td><Placement Placement={college.placement} /></td>
                                    <td><UserReviews Review={college.userReviews} /></td>
                                    <td><Ranking rank={college.ranking} /></td>
                                    <td>{college.featured ? 'Featured' : ''}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No colleges found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CollegeTable;
