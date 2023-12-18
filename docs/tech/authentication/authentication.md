# 🐈‍⬛ SPACE CATS - AUTHENTICATION CHALLENGES

## BASELINE

To protect sensitive information and stop unauthorised users from accessing the dashboard, _**Space Cats**_ uses JWT (JSON Web Token)-based user authentication and authorisation, based on an implementation by FADAHUNSI SEYI SAMUEL @ freecodecamp [1] with modifications.

## DEPLOYED ENVIRONMENT

Due to cookies not being set in a deployed environment, some adjustments were made to the user verification once logged in to the dashboard. Instead of the token being stored in a cookie, the token is sent along with the response [2].

Then, on the client's side, the token is stored in session storage [3] to verify that -- once logged in -- the user's token matches the one that has been saved. On logging out, the token is deleted from session storage. Session storage was selected due to local storage posing more significant security concerns [3].

There are better solutions than the above, but it is necessary due to the restriction set by deploying the code base on different servers.

### REFERENCES

[1] https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

[2] https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/

[3] https://github.com/HedonisticOpportunist/Space-Cats/pull/3/files
