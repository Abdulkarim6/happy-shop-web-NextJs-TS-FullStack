import "server-only";
import dbConnect from "@/lib/dbConnect";
import { unstable_cache } from "next/cache";
import { ReviewType } from "./interfaces";

// If an error occurs, the data will not be cached. The error will caught in cache block
const fetchCachedReviews = unstable_cache(
  async () => {
    const collection = dbConnect("reviews");
    const res = await collection.find({}).sort({createdAt:-1}).toArray();
    return res.map(({ _id, ...rest }) => ({ ...rest, _id: _id.toString()}) as ReviewType); },
  ["reviews"],
  { tags: ["reviews"], revalidate: 3600 }
);


export async function getReviews() {
  try {
    const reviews = await fetchCachedReviews();

    if (!reviews || reviews.length === 0) {
      return { reviews: [], success: false, message: "No reviews found" };
    }

    return { reviews, success: true };
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return { reviews: [], success: false, message: "Failed to fetch reviews" };
  }
}