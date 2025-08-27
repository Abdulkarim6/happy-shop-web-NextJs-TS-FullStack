# Authentication related
* At first, connect mongodb with the application.
* Create custom Register and login page.
* accessed the input values from the account Form.

  ## Stored new user data
  * stored new user data(password stored as hashPass using `bcrypt`) using server action in the database and showing a sweet alert.

  ## [set login config using NextAuth](https://next-auth.js.org/getting-started/example#add-api-route)
  * Add API route to the project create a file called [...nextauth].js in src/app/api/auth of NextAuth.
  * added `<SessionProvider />` at the top level to the project for observe current login user data via the `useSession` hook of NextAuth.
  * adding a `NEXTAUTH_SECRET` key in local env file.

  ## Login user process
  * calling signIn function inside the form, passing credentials like email,pass as parameter.
  * accessing email and pass from credentials in `authorize` function inside the authOptions   
    page.
  * cheks the email and pass is exists or not in database. If exists, checks the given pass is 
    ok or not using `bcrypt`. If all is ok, set the user on `jwt` by return user otherwise return error or null;

# Menu list related
* Loaded categories inside the navber page using server action
* set categories name in menu list dynamicly

# products categories related
* Loads products categories using `NextJs route handler`.
  * created an api route with `GET` function to connect mongodb in directory `app/api/     categories/route.ts`.
  * calls the api ```fetch(`${baseUrl}/api/categories`,{cache: "no-store"})``` inside the component to fetching the data using the api.
  * ***WARNING: For Production***
    * Need to declared base api starting with NEXT_PUBLIC_`NEXT_PUBLIC_API_URL=http://localhost:3000` URl in `.env.local` variable for local dev.
    * Need to declared base api starting with NEXT_PUBLIC_`NEXT_PUBLIC_API_URL=https://yourdomain.vercel.app` URl in `.env.local` variable for Production level.