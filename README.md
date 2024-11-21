# Time to Words

## Instructions to Run

1. **Clone the repository:** `git clone git@github.com:gianfelipe93/time-to-words.git`
2. **Install dependencies:** `npm install`
3. **Run tests:** `npm test`

## Description

This project tackles the challenge of converting time into words. Here are some examples:

- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two' 
- '2:30' > 'half past two' 
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three' 
- '2:55' > 'five to three' 1 
- '12:55' > 'five to one'

## Approach

My approach to solving this challenge was as follows:

1. **Test-Driven Development:** I started by adding several test scenarios to ensure comprehensive coverage. I ran these tests initially to confirm they failed, providing a clear starting point for development.
2. **Mapping Numbers to Text:** I created a `Map()` to efficiently map numerical values to their corresponding text representations.
3. **Handling Exceptions:** I handled the special cases of 'midnight' and 'midday' first, as these are exceptions to the general rules and I prefer to return early whenever possible.
4. **Checking for Whole Hours:** I then checked if the minutes were '00', indicating a whole hour. If so, I returned the current hour followed by `o'clock`.
5. **Handling Minutes Before and After 30:** I implemented logic to differentiate between minutes before 30 (past the hour) and minutes after 30 (to the next hour), handling each case accordingly.

## Areas for Improvement

Given more time, I would have addressed the following:

- **Handling the Half Hour:** I didn't implement the logic for when the minute is 30 (e.g., 'half past two'). This would be a straightforward addition.
- **Optimizing Quarter Hour Checks:** I created an `isQuarter` function to check for 15 and 45 minutes past the hour, aiming to eliminate the need to use the map for these cases. However, I didn't have time to integrate this function into the main logic.
- **Code Refinement:** With additional time, I would have focused on refactoring and optimizing the code for improved readability and efficiency.

## Conclusion

This was an enjoyable challenge. If I was less nervous though, the right logic would have come to me a lot easier.
