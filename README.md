# microfrontend-poc
This is a repo for a POC of microfrontends using the single-spa microfrontend framework

## Running
Open up a VSCode instance for each of the main folders (there are currently five) except for crafted-connect and run
1) `npm start dev`
2) `npm start run`

Once all of the projects are running, navigate to `http://localhost:9000` to see it in all of its glory

## Deploying
1) `npm start deploy`

This will both build the app for production as well as deploy it to GCP should you need to do so on your local machine. Note that you will need to have to GCP CLI installed and configured. You will also need proper permissions to the GCP project

## CI/CD
Github is setup in such a way that if you commit to any of the individual apps in this repo, it will detect which you did (or multiple of you edited several) and redeploy only those services.

## Random Notes
To log in, go to the Login route (or click the login button). The username is crafteduser and password is craftedpassword. There is no backend at the moment for auth (the username and password are hardcoded), so no more users can be created unless you do some monkeying around in `common-single-spa/src/auth.ts`
