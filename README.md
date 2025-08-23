# Authentication related
* At first, connect mongodb with the application.
* Create custom Register and login page.
* accessed the input values from the account Form.

  ## Stored new user data
  * stored new user data(password stored as hashPass using `bcrypt`) using server action in the database and showing a sweet alert.

  ## [login with NextAuth](https://next-auth.js.org/getting-started/example#add-api-route)
  * Add API route to the project create a file called [...nextauth].js in src/app/api/auth of NextAuth.
  * added `<SessionProvider />` at the top level to the project for observe current login user data via the `useSession` hook of NextAuth.

  ## Login user
  * calling signIn function inside the form, passing credentials like email,pass as parameter.
  * accessing email and pass from credentials in `authorize` function inside the authOptions   
    page.
  * cheks the email and pass is exists or not in database. If exists, checks the given pass is 
    ok or not using `bcrypt`. If all is ok, set the user on `jwt` by return user otherwise return error or null;