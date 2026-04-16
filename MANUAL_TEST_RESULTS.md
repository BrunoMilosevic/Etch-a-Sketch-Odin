# Manual Test Results - Etch-a-Sketch

## Test-001 : Grid renders on page load

Steps:
1. Open https://brunomilosevic.github.io/Etch-a-Sketch-Odin/
2. Observe the site

Expected Result:
 - A board with grid is displayed

 Actual Result:
 - Etch A Sketch board with evenly distributed grid is displayed
 
 Status:
 PASS

 ## Test-002: Square changes a color when user hovers the mouse over it

 Steps:
 1. Open the application
 2. Hover the mouse over a square in the board

 Expected Result:
- Square changes the color when user hovers the mouse over it

Actual Result:
- Square changes the color when user hovers the mouse over it

Status:
PASS

## Test-003: "Gray" button changes a color of hover effect to gray

Steps:
1. Open the application
2. Click on the "Gray" button in the bottom of the board
3. Hover over the grid

Expected Result:
- Square changes the color to gray after pressing "Gray" button and hovering over the grid

Actual Result:
- Square changes the color to gray after pressing "Gray" button and hovering over the grid

Status:
PASS

## Test-004: "Random" button changes a color of hover effect to a random color

Steps:
1. Open the application
2. Click on the "Random" button in the bottom of the board
3. Hover over the grid

Expected Result:
- Square changes the color to random after pressing "Random" button and hovering over the grid

Actual Result:
- Square changes the color to random after pressing "Random" button and hovering over the grid

Status:
PASS

## Test-005: "Erase" button changes the color of the square back to default gray

Steps:
1. Open the application
2. Click on the "Erase" button in the bottom of the board
3. Hover over the colored squares in the grid

Expected Result:
- Square changes the color back to default after pressing "Erase" button and hovering over the colored squares of the grid

Actual Result:
- Square changes the color back to defualt after pressing "Erase" button and hovering over the colored squares of the grid

Status:
PASS

## Test-006: "Reset" button resets the square grid back to initial state

Steps:
1. Open the application
2. Make sure to have some of the squares colored
3. Click on the "Reset" button

Expected Result:
- Grid is reseted to the initial state after clicking on the "Reset" button

Actual Result:
- Grid is reseted to the initial state after clicking on the "Reset" button

Status:
PASS

## Test-007: Verify grid input with valid input

Steps:
1. Open the application
2. Navigate to "resize" input field
3. Enter a valid input(3)
4. Click "Resize" button

Expected Result:
- Grid is resized to 3x3 grid after entering 3 as input value

Actual Result:
- Grid is resized to 3x3 grid after entering 3 as input value and clickin "Resize" button

Status:
PASS

## Test-008: Verify grid input with invalid value

Steps:
1. Open the application
2. Navigate to "resize" input field
3. Enter an invalid input(1)
4. Click "Resize" button

Expected Result:
- Alert is displayed after entering invalid input(1) and grid stays the same size as previously entered value or default value

Actual Result:
- Alert is displayed after entering invalid input(1) but grid dissapears

STATUS: 
FAIL

## Test-009: Verify grid input with non-numeric value

Steps:
1. Open the application
2. Navigate to "resize" input field
3. Enter a non-numeric value("abc")
4. Click "Resize" button

Expected Result:
- Alert is displayed after entering non-numeric input("abc") and grid stays the same size as previously entered value or default value

Actual Result:
- Alert is not displayed after entering non-numeric input("abc") and grid dissapears

Status:
FAIL

## Test-010: User can input a value and press "Enter" button to resize the grid

Steps:
1. Open the application
2. Navigate to "resize" input field
3. Enter a valid value(6)
4. Press "Enter" button on the keyboard

Expected Result:
- Grid is resized to 6x6 grid after entering 6 as input value and pressing "Enter" button

Actual Result:
- Grid stays the same (is not resized) after entering 6 as input value and pressing "Enter" button on the keyboard

Status:
FAIL






