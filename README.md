# GoalPosts
* Quickly and easily watch goals posted to [/r/soccer](http://www.reddit.com/r/soccer)
* View live site [here](http://www.goal-posts.com/) (please be patient while Heroku wakes up)
* Relies on a Rails API back end ([repo](https://github.com/davidtom/goalposts-api))

## Features
* Watch embedded goal highlights, grouped by day and sorted in chronological order by time (no spoilers!)
* Includes direct links to embed source and the [/r/soccer](http://www.reddit.com/r/soccer) post for discussion
* Infinity scroll allows goals to be loaded on demand, improving page load time
* Basic search to find goals by title
* Search results can be filtered by title or post date
* Includes basic admin features utilizing jwt token authentication

## Architecture
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* See ```src/components/PageAssets``` to update API URL
