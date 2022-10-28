# _{Repo Name}_

#### By _**{Author}**_

#### _{Brief Description}_

## Technologies Used

* {List}

## Description

_{More detailed information about contents}_

## Setup/Installation Requirements

_{"N/A" if setup/install not required}_

## Known Bugs

_{"No known bugs" if none}_

## Tests

```
Describe: robogerify()

Test: "It will return an array of numbers beginning at zero and ending (inclusive) with the number given by the user."
Code: robogerify(12)
Expected Output: [0,1,2,3,4,5,6,7,8,9,10,11,12]

Test: "It will return such an array with numbers that contain 3 replaced by 'Won't you be my neighbor?'"
Code: robogerify(12)
Expected Output: [0,1,2,"Won't you be my neighbor?",4,5,6,7,8,9,10,11,12]

Test: "It will return such an array with numbers that contain 2 but not 3 replaced by 'Boop!'"
Code: robogerify(23)
Expected Output: [0,1,"Boop!","Won't you be my neighbor?",4,5,6,7,8,9,10,11,"Boop!","Won't you be my neighbor?",14,15,16,17,18,19,"Boop!","Boop!","Boop!","Won't you be my neighbor?"]

Test: "It will return such an array with numbers that contain 1 but not 2 replaced by 'Beep!'"
Code: robogerify(23)
Expected Output: [0,"Beep!","Boop!","Won't you be my neighbor?",4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!","Beep!","Beep!","Beep!","Beep!","Boop!","Boop!","Boop!","Won't you be my neighbor?"]

Test: "It will return such an array as a comma-separated string." 
Code: robogerify(3)
Expected Output: 0,"Beep!","Boop!","Won't you be my neighbor?"

```

## License

_[MIT License](https://opensource.org/licenses/MIT)_

Copyright (c) _<DATE>_ {Author}
