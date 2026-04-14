# Etch-a-Sketch Test Plan

## 1. Objective

The objective of this test plan is to verify that the Etch-a-Sketch web application functions like grid rendering, drawing behavior, resizing functionality, and input validation are behaving as intended.

## 2. Scope

### In Scope
- Grid creation and rendering
- Hover (drawing) behavior
- Grid resizing via user input
- Grid reset behavior
- Input validation and edge cases

## 3. Features to Test

### 3.1 Grid Rendering
- Default grid is displayed on page load
- Correct number of grid squares is generated
- Grid layout is consistent and evenly spaced

### 3.2 Drawing Behavior (Hover)
- Hovering over a square changes its color
- Multiple squares can be colored
- Fast mouse movement still triggers coloring

### 3.3 Resize Functionality
- User can input a new grid size
- Grid updates correctly after input
- Previous grid is removed before rendering a new one

### 3.4 Input Validation
- Values greater than 100 are rejected or handled
- Zero and negative numbers are handled correctly
- Non-numeric input does not break the app
- User can press "ENTER" to resize the grid

## 4. Test Strategy

### Manual Testing
- Perform exploratory testing of UI behavior
- Validate user interactions and edge cases

### Automated Testing
- Use Playwright for automation
- Automate core functionalities:
  - Grid rendering
  - Hover effects
  - Resize behavior
  - Input validation

---

## 5. Test Environment

- Application URL: https://brunomilosevic.github.io/Etch-a-Sketch-Odin/
- Browser: Google Chrome 147.0.7727.56
- Operating System: Windows 11 



## 6. Entry and Exit Criteria

### Entry Criteria
- Application is accessible via URL
- Page loads without critical errors

### Exit Criteria
- All critical test cases pass
- No major functional or UI issues remain


## 7. Test Data

| Scenario            | Input Values        |
|--------------------|--------------------|
| Valid resize       | 16, 32, 64         |
| Maximum boundary   | 100                |
| Above maximum      | 101                |
| Invalid input      | 0, -5, "abc"       |


## 8. Test Scenarios

### Scenario 1: Page Load
- Verify that the grid is displayed
- Verify default grid size

### Scenario 2: Drawing Behavior
- Hover over a square → color changes
- Hover over multiple squares → all change color

### Scenario 3: Resize Grid
- Enter valid input → grid updates correctly
- Enter new value → old grid is removed

### Scenario 4: Invalid Input Handling
- Enter value > 100 → handled properly
- Enter non-numeric input → no crash

## 09. Success Criteria

The application is considered successful if:
- Users can draw on the grid without issues
- Grid resizing works correctly
- Invalid inputs do not break functionality
- No critical UI or functional bugs are present

---

## 10. Automation Plan

Automation will be implemented using Playwright.

Automated tests will cover:
- Grid visibility on page load
- Hover color change behavior
- Grid resizing functionality
- Input validation scenarios

