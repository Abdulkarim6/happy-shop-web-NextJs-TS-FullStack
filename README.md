# Happy Shop Web 🛍️

A modern, full-stack e-commerce application built with the latest web technologies including Next.js 15, React 19, and Tailwind CSS v4.

# Admin
Email: karim@m.com
Pass: 121212

🔗 **Live Demo:** [https://happy-shop-web.vercel.app/](https://happy-shop-web.vercel.app/)

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **Animations:** [GSAP](https://gsap.com/), [Embla Carousel](https://www.embla-carousel.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** [NextAuth.js v5](https://authjs.dev/)
- **Image Hosting:** [Cloudinary](https://cloudinary.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Comprehensive Features

### 🛍️ User & Shopping Experience
- **Advanced Product Browsing:** Real-time search, dynamic filtering, and server-side pagination.
- **Quick View Modals:** Interactive modals to view product details instantly without leaving the page.
- **Cart & Checkout:** Seamless "add to cart" functionality, cart management, and a complete checkout page.
- **Review & Ratings:** Logged-in users can leave reviews and star ratings on purchased products.
- **Modern UI/UX:** Responsive design with smooth animations using GSAP and Tailwind v4.
- **Secure Auth:** User authentication powered by NextAuth v5 (Credentials/Social Login).
- **Image Optimization:** High-performance image delivery via Cloudinary.

### 🔐 Admin & Security
- **Secure Admin Panel:** Protected routes accessible only to users with Admin roles.
- **User Management:** Dashboard functionality to view, delete, or upgrade users to Admin.
- **Product & Order Management:** Complete CRUD (Create, Read, Update, Delete) operations for adding new products and updating order statuses directly to the database.

## 🚀 Upcoming Features (In Progress)
- **Payment Gateway Integration:** Planning to integrate a secure payment gateway (Stripe) for real-time transactions.

### ⚙️ Technical Highlights
- **Performance Optimization:** Leveraging Next.js SSR (Server-Side Rendering) and SSG (Static Site Generation) for blazing-fast loading and SEO.
- **Database Integration:** Seamless fetching and mutation of data using MongoDB.
- **Highly Reusable Components:** Clean code architecture using reusable React components for scalability.

## 📂 Project Structure

```bash
happy-shop-web/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── lib/              # Utility functions and DB connection
└── types/            # TypeScript type definitions
└── auth.ts/          # auth functions
└── middleware.ts/    # Protect routes







# # Authentication related
# * At first, connect mongodb with the application.
# * Create custom Register and login page.
# * accessed the input values from the account Form.

#   ## Stored new user data
#   * stored new user data(password stored as hashPass using `bcrypt`) using server action in the database and showing a sweet alert.

#   ## [set login config using NextAuth](https://next-auth.js.org/getting-started/example#add-api-route)
#   * Add API route to the project create a file called [...nextauth].js in src/app/api/auth of NextAuth.
#   * added `<SessionProvider />` at the top level to the project for observe current login user data via the `useSession` hook of NextAuth.
#   * adding a `NEXTAUTH_SECRET` key in local env file.

#   ## Login user process
#   * calling signIn function inside the form, passing credentials like email,pass as parameter.
#   * accessing email and pass from credentials in `authorize` function inside the authOptions   
#     page.
#   * cheks the email and pass is exists or not in database. If exists, checks the given pass is 
#     ok or not using `bcrypt`. If all is ok, set the user on `jwt` by return user otherwise return error or null;

# # Menu list related
# * Loaded categories inside the navber page using server action
# * set categories name in menu list dynamicly

# # products categories related
# * Loads products categories using `NextJs route handler`.
#   * created an api route with `GET` function to connect mongodb in directory `app/api/     categories/route.ts`.
#   * calls the api ```fetch(`${baseUrl}/api/categories`,{cache: "no-store"})``` inside the component to fetching the data using the api.
#   * ***WARNING: For Production***
#     * Need to declared base api starting with NEXT_PUBLIC_`NEXT_PUBLIC_API_URL=http://localhost:3000` URl in `.env.local` variable for local dev.
#     * Need to declared base api starting with NEXT_PUBLIC_`NEXT_PUBLIC_API_URL=https://yourdomain.vercel.app` URl in `.env.local` variable for Production level.