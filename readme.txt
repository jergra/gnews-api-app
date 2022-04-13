April 13, 2022

C:\dev\gnews-api-app 

Derived from tutorials:
    
    Create a News Website with Reactjs and NewsAPI
    https://www.youtube.com/watch?v=AfifHeANwe0
        by Code With Ishraq
        
    ReactJs News App using the New York Times Articles API
    https://www.youtube.com/watch?v=m2aYEl14ekY&t=578s&ab_channel=tsbsankara
        by tsbsankara 


This project uses the news API provided by GNews (https://gnews.io/) 
to search for news articles of interest.

This is better than using NewsAPI (https://newsapi.org/) because
GNews has a free tier for a deployed website, whereas
NewsAPI will only work for free locally. Using NewsAPI on a 
deployed website would require paying a monthly fee.

Enter a search term, or allow a random choice of one
or two search terms selected from a list of interests.

The list of interests: 
    src/data/terms.js

start:
    npm start

deployed:
    https://gnews-api-app.vercel.app

update:
    git add .
    git commit -m "message"
    git push

