# 🐈‍⬛ SPACE CATS - DEPLOYMENTS

The backend and frontend deployments were handled separately, making the process more straightforward due to breaking down the code bases into two separate entities. Essentially, the code bases are two different projects, and -- it makes sense -- to keep things separate for decoupling, modularity and API considerations [1].

## BACKEND DEPLOYMENT

_**Space Cats**_ uses _railway_ for frontend deployment [2].

_render_ [3] serves as a backup.

WEB SERVER URL: https://space-cats-production.up.railway.app ✔️

BACKUP WEB SERVER URL: https://space-cats-backend-rfpo.onrender.com ✔️

## FRONTEND DEPLOYMENT

_**Space Cats**_ uses _Vercel_ for frontend deployment [4].

STATIC SITE URL: https://space-cats.vercel.app/ ✔️

### REFERENCES

[1] https://blog.elaniin.com/is-it-truly-necessary-to-separate-backend-and-frontend/

[2] https://railway.app/dashboard

[3] https://dashboard.render.com/

[4] https://vercel.com/
