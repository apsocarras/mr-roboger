# _Mr. Roboger's Neighborhood_

#### By _Alejandro Socarras_

#### _Turn a number into a "Mr. Roboger's" count-a-long._

## Technologies Used

* HTML
* CSS 
* Bootstrap
* JS

## Description

_This webpage takes a number input from the user and displays a list counting up to that number from 0, replacing certain numbers according to the following rules:_

* For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"

* For numbers that contain a 2, all digits are replaced with "Boop!"

* For numbers that contain a 1, all digits are replaced with "Beep!"

_For numbers meeting more than one of these conditions, the rules are applied in the order they were given above._

## Setup/Installation Requirements

_To run the project from your local system:_

1. Make a directory on your disk where you would like to clone the repo.

2. Copy the repo link: https://github.com/apsocarras/language-suggest.git (available if you click the green "Code" dropdown button on this page).

3. Open your terminal and change into the directory you made (`cd /path/to/new/directory`).

4. Type `git clone ` and paste the URL.

5. Copy and paste the path to `index.html` into your browser's URL bar to open the page.

## Known Bugs

_No known Bugs._

## Tests

```
Describe: robogerify()

Test: "It will return an array of numbers beginning at zero and ending (inclusive) with the number given by the user."
Code: robogerify("12")
Expected Output: [0,1,2,3,4,5,6,7,8,9,10,11,12]

Test: "It will return such an array with numbers that contain 3 replaced by 'Won't you be my neighbor?'"
Code: robogerify("12")
Expected Output: [0,1,2,"Won't you be my neighbor?",4,5,6,7,8,9,10,11,12]

Test: "It will return such an array with numbers that contain 2 but not 3 replaced by 'Boop!'"
Code: robogerify("23")
Expected Output: [0,1,"Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,11,"Boop!","Won't you be my neighbor?",14,15,16,17,18,19,"Boop!","Boop!","Boop!","Won't you be my neighbor?"]

Test: "It will return such an array with numbers that contain 1 but not 2 replaced by 'Beep!'"
Code: robogerify("23")
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!","Boop!","Won't you be my neighbor?"]

Test: "It will return such an array as a comma-separated string." 
Code: robogerify("3")
Expected Output: 0,"Beep!","Boop!","Won't you be my neighbor?"

Test: "It will return an error message if anything but a natural (i.e., counting) number has been entered." 
Code: robogerify("$23")
Expected Output: Error: '$23' is not a natural number.

Test: "It will change elements equaling 'Won't you be my neighbor?' to 'Won't you you be my neighbor, ____?' where '____' is a non-empty string provided by the user." 
Code: robogerify("3","Ralph")
Expected Output: 0,"Beep!", "Boop!", "Won't you be my neighbor, Ralph?"

```

## License

_[MIT License](https://opensource.org/licenses/MIT)_

Copyright (c) _10.28.22_ Alejandro Socarras

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.