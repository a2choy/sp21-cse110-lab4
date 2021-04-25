## Part 1a  
1) 20
2) 20
3) 20
4) error since result is not defined outside of that block
5) error since we cannot assign a new value to const
6) error since const has same scope as let
## Part 1b  
1) it will return 3 which is the value of i after the forloop (starts at 0, then there are 3 elements)
2) 150, since its the last iteration of discounted price in the forloop that gets saved and that value is 300*0.5
3) 150 for the same reason
4) it will return the array of the now discounted prices
5) it will return 3 which is the value of i after the forloop (starts at 0, then there are 3 elements)
6) error since the variable discountedprice only lives inside the forloop
7) 150, same as above since the scope is still within the block
8) it will return the same since the return function is within the same scope as the let variable
9) it will return 3 which is the value of i after the forloop (starts at 0, then there are 3 elements)
10) 3 which is the length of prices.length
11) it will return the array of the now discounted prices since we are not reassigning just manipulating the same array
12a)student.name;
12b)student["Grad Year"];
12c)student.greeting();
12d)student["Favorite Teacher"].name;
12e)student.courseLoad[0];
13a)32 since we start with a string '3' we concat the value to the string
13b)1 since we cannot subtract from string to string we subtract using numbers
13c)3 since numeric conversion rules null = 0
13d)3null since we are converting to string
13e)4 since numeric conversion rules true = 1
13f)0 since numeric conversion rule false = null = 0
13g)3undefined since we are converting to string
13h)NaN since numeric conversion undefined becomes NaN
14a)true, string '2' becomes a number 2
14b)false, string '2' becomes a number 2 and string '12' becomes a number 12
14c)true, string '2' becomes a number 2
14d)false different types
14e)false true becomes 1
14f)true same type and boolean conversion becomes true
15) == checks for true while converting, === does not convert
17) the array returned will be [2,4,6] which is the double of the initial array. The function to modify will be called with the function to double inside of it. That will lead to the numbers being doubled when the dosomething is called
19) 1
    4
    3
    2
