Project Overview: College Table with Infinite Scroll and Search
Description:
This project is a React application that displays a table of colleges with features including infinite scrolling, sorting, and searching. The data is loaded from a JSON file and rendered in a table format, with the ability to sort and filter the information based on user input.

Key Features:
Infinite Scroll:

As the user scrolls down the page, more college data is loaded automatically. This is achieved by incrementing the page number and appending new data to the existing list when the user reaches the bottom of the page.
Search Functionality:

The search bar allows users to filter colleges by name. The filtering checks if the search query is present in any field of the college data, making the search versatile.
Sorting:

Users can sort the colleges by different criteria such as CD Rank, Course Fees, and User Reviews. Sorting can be done in ascending or descending order based on user selection.
Responsive Table:

The table displays key information about each college, including:
CD Rank: The ranking of the college.
College Name: The name of the college.
Course Fees: The fees for courses at the college.
Placement: Average and highest placement packages.
User Reviews: Average user review score.
Ranking: Overall ranking of the college.
Featured: Indicates if the college is featured.
Component-Based Structure:

The project uses a modular component-based structure with separate components for displaying college names, course fees, placement details, user reviews, and rankings.
Styling:

The project includes custom CSS for styling the table and input elements, ensuring a professional and clean appearance.
