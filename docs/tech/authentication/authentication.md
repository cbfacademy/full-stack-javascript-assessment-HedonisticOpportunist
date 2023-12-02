# 🐈‍⬛ SPACE CATS - AUTHENTICATION CHALLENGES

## BASELINE

To protect sensitive information and stop unauthorised users from accessing the dashboard, _**Space Cats**_ uses JWT (JSON Web Token)-based user authentication and authorisation, based on an implementation by FADAHUNSI SEYI SAMUEL @ freecodecamp [1].

## DEPLOYED ENVIRONMENT

Due to cookies not being set in a deployed environment, some adjustments were made to the user verification once logged in to the dashboard [2]. Instead of verifying if a cookie is available, cookies are persistent once the user has logged in [2].

### REFERENCES

[1] https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

[2] https://blog.reactplay.io/persistent-log-in-using-cookies-in-react
