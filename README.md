<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

You have been given a code challenge to complete.

1. Fork this repository to your own Github.
1. Clone it to your machine.
1. Complete each of the challenges described below.
1. Add and commit your changes, pushing them up to your Github.
1. Submit a link to your updated repository to complete the challenge.

## Challenge 1: Unit Test with a Switch and Iteration

In the test file `calculator.test.ts`, loop through the data sets to run each
through the `calculator` that has been imported. For each item in the data set:
_ Do the math yourself _ Pass the terms into the right `calculator` method \*
Compare your result and the calculator's result You should use a switch
statement on the data set's `method` property to determine which of
`calculator`'s methods to call, and how to do the math yourself.

Your loop can exist in a test, or even better, loop within the describe block,
but create a new test with each iteration.

## Challenge 2: Create data sets to pass each test

The test `truthChecker.test.ts` needs new data sets. You can see how they are
currently commented out. Create data for each test that will pass the test. See
the comments in each test for clarification.

## Challenge 3: Create tests for Employee Manager

This is going to be a stretch for some of you. You don't have to be perfect at
this yet, don't worry. We want to see how far you can get. In the test file
`employeeManager.test.ts` you can see a couple of pre-existing tests.

1. Checking that a new employee can be added and edited.
1. Checking that an existing employee can be edited. Both of these tests are
   actually accomplished using a page object; a key piece of effective
   automation.

### Using the Page Object

Initilaized as `em`, you will find the following methods useful. They should be
the **ONLY** methods you need; no need to learn the Selenium WebDriver bindings
or locator strategies just yet; you can use these methods.

| method               | usage                                                                                                                                                   | example                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| selectEmployeeByName | Takes a string and clicks the employee with the matching name.                                                                                          | `await em.selectEmployeeByName("Phillip Weaver")`  |
| addEmployee          | Clicks the button to add a new employee. Does not select the new employee.                                                                              | `await em.addEmployee()`                           |
| editEmployee         | Takes an object with the name and/or phone and/or title properties, and edits an already selected employee to have the passed in values. Does not save. | `await em.editEmployee({name:"Billy Goat Gruff"})` |
| saveChanges          | Clicks the save button.                                                                                                                                 | `await em.saveChanges()`                           |
| cancelChanges        | Clicks the cancel button.                                                                                                                               | `await em.cancelChanges()`                         |
| getEmployeeInfo      | Returns an object with the currently selected employee's id, name, phone number, and title, as properties.                                              | `let employee = await em.getEmployeeInfo()`        |

It's important to recognize that if you do operations out of order, your test
will break.

- i.e. Select and employee, and THEN edit the employee, or edit before saving,
  etc.

### Challenge 3 Requirements

**Get as far as you can within the recommended time.** If you want to try
further after that, go fot it, but it is not required.

1. Test adding at least one more employee
1. Test cancelling an edit of an employee
1. Test that when editing and then navigating away without saving does not save
   changes.

## Submission

When you are ready to submit your project - and you CAN resubmit - do the
following commands in your project.

1. Save your files. It's amazing how often I forget this step.
1. `git add -A`
   - This will add all saved changes to the git repo's index.
1. `git commit -m 'getting my project ready for submission'`
   - This officially makes your code part of the repo.
   - You can tweak that message if you want.
1. `git push`
   - This will push your code up to your Github account.

Submit a link to your Github repository, where you've pushed your changes.

## Stretch Goals

Automate additional tests in `employeeManager.test.ts` that catch bugs you've
found manually, but _should_ pass once the bugs are fixed.

### Black Diamond Stretch Goal

Add additional properties methods to the `EmployeeHandler` class that will help
to test Employee Manager

- Checking the header
- Checking the footer
- Looking to see if on error the fields are highlighted correctly.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and
create a pull request so we can review your changes and merge them into the
master repo and branch.

## Copyright

© DevMountain LLC, 2020. Unauthorized use and/or duplication of this material
without express and written permission from DevMountain, LLC is strictly
prohibited. Excerpts and links may be used, provided that full and clear credit
is given to DevMountain with appropriate and specific direction to the original
content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
