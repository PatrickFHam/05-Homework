# Workday Scheduler
Link to the Working Page: https://patrickfham.github.io/WorkdayScheduler/


## Approach
Everything works, and beautifully, on the user-end...
but it does occur to me that there are surely more "slick" ways to build the script.js .
I chose to name the time-blocks with 12-hr-names, which later prevented me from passing slicker parameters, to build one function to apply to all times.
With some more time, I could probably come up with some more efficient ways to solve this.

Moment.js ...
  I displayed a live-ticking date and time in the JumboTron.
  I pulled the current hour, converted it to an integer, and compared it to each of the time blocks for their conditional formatting.

BootStrap was used to ...
  format the JumboTron.
  format the CLEAR ALL and SAVE ALL buttons.
  format the time rows.
  format the width of the 12-column-divisions, and scales to smaller screens.
  (With more time, I could easily use this to scale down to mobile screen.)
  give the confirmation prompts, using a Modal. (not necessary, but nice for the user)

Font-Awesome ...
  used for the icons to save and delete individual time-blocks.
  (I learned that version compatibility is VERY important here... this was un-necessarily difficult.  LOL)

Local Storage was a breeze to work-with, after the last project.

CSS was minimally adjusted... only to hover a new element (clrBtn and its :hover).


## Update (since videos and screenshots were taken)
I didn't like the prescribed white letters on the "past" (light-grey) background color... so I changed all the text for all the times to black.  It's much more readable.


## Video Demos
Time-of-Day Conditional Formatting ... https://watch.screencastify.com/v/gfjZUhgCZGnRGU66BSx1 
Save and Clear Buttons (single and ALL) ... https://watch.screencastify.com/v/Jo4ZIyvNe0EqdNXCAqrE 


## Screenshots
![WorkingSavedActivitiesIntoLocalStorage](./assets/images/screenshots/times_activities_in_LS.jpg)
