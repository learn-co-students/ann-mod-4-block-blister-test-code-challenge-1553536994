# Block Blister

Welcome to __Block Blister__, Block Buster's attempt to re-brand and become a competitor in today's technology and e-commerce driven world!

Here's the scenario: as Block Blister's new (and only) developer, your job is to build out a React Front End where users can see a list of movies on the left side of the page. If the user clicks on a movie, that movie gets added to their list of rental movies on the right side of the page. A user shouldn't be able to add the same movie more than once (That's weird! Why would you rent the same movie twice at one time?!). But the user can change their mind before checking out. Clicking on a movie in the rental list removes it, but clicking the Check Out button will clear all movies in the user's rental list.

All of the code to style the page has been written for you, meaning that you should be adding to the code rather than editing it; your main responsibility will be to get information, render it into the right containers, and build out the page's functionality. If your finished product has some styling issues, don't worry too much about it.


## What You Already Have

`Movie` is a presentational component that has been provided for you that will render out information about an individual movie. This component is pre-styled, and it is your responsibility to get the data into it.

`RentButton` and `Searchbar` are components that will functionality to your app. They are presentational components, but you shouldn't need to change how they look in any way. While you won't be passing data to these components, you might need to pass down other things to make them work...

`MovieContainer` and `RentalContainer` are container components. `MovieContainer` is where all the movies from Block Blister's server will be displayed, while `RentalContainer` (the blue portion on the right half of the screen) will only display the movies that have been selected by the user.

`MainContainer` is the highest component below App, and serves as the main container for all of the pieces of the page.




## Instructions
To start up Block Blister's server, run `json-server --port 4000 db.json`.

Then, to start up the front end, run `npm install && npm start` to get the app up and running. Follow along with these steps, making sure to read all of the instructions before beginning to code.

#### 1.  Fetching Movies

Work on fetching data from `http://localhost:4000/movies`. The response should contain an array of movies objects that are structured as follows:

  ```json
    {
      "id": 1,
      "name": "Saving Private Ryan",
      "year": 1998,
      "description": "A group of U.S. soldiers go behind enemy lines to retrive a paratrooper whose brothers have been killed in action.",
      "image": "https://image.tmdb.org/t/p/w370_and_h556_bestv2/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg"
    },
  ```

Based on the current structure of the app, think about where this array of movies needs to be stored.


#### 2.  Showing movies

After you have fetched the bots, work on rendering them into `MovieContainer`. A component called `Movie` has been provided to you to display the information about an individual movie in a card format.


#### 3.  Adding And Removing Movies

Once all movies are shown in `MovieContainer`, work on the functionality of adding movies into the 'My Rentals' section. Clicking a card should add a movie to the user's list of rentals. Movies that have been chosen should be displayed within `RentalContainer`(feel free to reuse `Movie`). A chosen movie should only show up once in the list of rentals. If you click on a movie in 'My Rentals', that movie should be removed from the list of rentals.

_Note that nothing needs to be persisted. Refreshing the page should clear out 'My Rentals'._


## Checkpoint!

If you have gotten this far, you have hit the checkpoint. Your app should look like the following:

![alt text][checkpoint]

[checkpoint]: ./public/gif1.gif


#### 4. Checking Out

Now that you have some of the functionality of your app, it's time to Check Out our movies! When you click on the 'Check Out' button, all the movies in the 'My Rentals' list should be cleared.

After this feature, your app should have the following functionality:

![alt text][full_demo]

[full_demo]: ./public/gif2.gif "Full demo"


#### BONUS: Searching

If you have finished all of the above features before time is called, consider building out the `Searchbar`. If a user types anything into the search bar, the list of movies in the 'Browse Movies' section should be filtered such that only the movies with titles container the search text appears. 

![alt text][bonus_demo]

[bonus_demo]: ./public/gif3.gif "Full demo"

## Finishing up

When time is called, please stop coding, push your code to your fork, and submit a pull request from Github. If you have any clarifying questions during or after the code challenge, please feel free to ask your instructor.

## Criteria
1. Props and state - Is state maintained in the right components? Are the functions to change state defined and executed in the appropriate places? Are the appropriate props passed from component to component?

2. Code structure and efficiency - Is the code clean and easy to read? Are large chunks of code separated into reusable functions? Is functionality appropriately delegated between class and functional components?

3. Component lifecycle - Are the right component lifecycle methods used? Are they used for the correct purposes?

4. Rendering - Is information rendered in the correct locations? Were you able to conditionally render different components?

__Good Luck!__
