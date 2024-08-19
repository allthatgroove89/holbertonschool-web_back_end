# Pagination in Python

This project focuses on learning how to implement pagination in Python. By the end of the project, you should be able to:
Learning Objectives

    Explain how to paginate a dataset with simple page and page_size parameters.
    Understand how to paginate a dataset with hypermedia metadata.
    Learn how to paginate in a deletion-resilient manner.

## Requirements

    All your files will be interpreted/compiled on Ubuntu 18.04 LTS using Python 3 (version 3.7).
    All your files should end with a new line.
    The first line of all your files should be exactly #!/usr/bin/env python3.
    You must have a README.md file at the root of your project folder.
    Your code should follow the pycodestyle style guide (version 2.5.*).
    The length of your files will be tested using wc.
    All your modules should have documentation (e.g., python3 -c 'print(__import__("my_module").__doc__)').
    All your functions should have documentation (e.g., python3 -c 'print(__import__("my_module").my_function.__doc__)').
    Documentation should be a real sentence explaining the purpose of the module, class, or method (the length will be verified).
    All your functions and coroutines must be type-annotated.

## Project Tasks
### Task 0: Simple Helper Function

File: 0-simple_helper_function.py

Write a function named index_range that takes two integer arguments: page and page_size. The function should return a tuple of size two containing the start index and end index corresponding to the range of indexes to return in a list for those particular pagination parameters.

Example Usage:

python

res = index_range(1, 7)
print(res)  # Output: (0, 7)

res = index_range(page=3, page_size=15)
print(res)  # Output: (30, 45)

Task 1: Simple Pagination

File: 1-simple_pagination.py

Copy the index_range function from the previous task and implement a class with a method named get_page. This method should take two integer arguments page (default is 1) and page_size (default is 10). The method should paginate a CSV dataset and return the appropriate page of the dataset.

Requirements:

    Use the provided CSV file.
    Use assert to ensure page and page_size are integers greater than 0.
    Use index_range to determine the correct indexes for pagination.

### Task 2: Hypermedia Pagination

File: 2-hypermedia_pagination.py

Replicate the code from the previous task and implement a get_hyper method that takes the same arguments as get_page. This method should return a dictionary containing hypermedia metadata, including:

    page_size: The length of the returned dataset page.
    page: The current page number.
    data: The dataset page (equivalent to the return from get_page).
    next_page: The number of the next page (or None if there is no next page).
    prev_page: The number of the previous page (or None if there is no previous page).
    total_pages: The total number of pages in the dataset.

### Task 3: Deletion-Resilient Hypermedia Pagination

File: 3-hypermedia_del_pagination.py

The goal here is to implement pagination that is resilient to data deletions. If rows are removed between queries, the user should not miss any items when navigating pages.

Start with the provided code and implement a get_hyper_index method with two integer arguments: index (default is None) and page_size (default is 10). This method should return a dictionary containing:

    index: The current start index of the returned page.
    next_index: The index to query for the next page.
    page_size: The current page size.
    data: The actual page of the dataset.

Requirements:

    Use assert to verify that the index is within a valid range.

Repository

    GitHub Repository: holbertonschool-web_back_end
    Directory: pagination