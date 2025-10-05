import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) { 
  try {
    const body = await req.json();
    const { subCategory, targetAudience, colors, sizes } = body;
    //console.log(subCategory, targetAudience, colors, sizes);
    const subCategoryS = subCategory?.replace(/-&-/g, ' & ');
    
    const pipeline = [
      //  match
      { $match: { targetAudience: targetAudience, subCategory: subCategoryS } },

      //  size normalize
      {
        $addFields: {
          sizesNormalized: {
            $cond: [
              { $isArray: "$size" }, // যদি size আগেই array হয় → true
              "$size",               // then: রাখো
              {  // else: যদি array না হয়, আরো চেক:
                $cond: [{ $eq: ["$size", null] }, [], ["$size"]], // যদি size null → empty array
              },                                      // না হলে single-element array (string -> ["M"])
            ],
          },
        },
      },

      //  null / empty বাদ
      {
        $addFields: {
          sizesNormalized: {
            $filter: {
              input: "$sizesNormalized",
              as: "s",
              cond: {
                $and: [{ $ne: ["$$s", null] }, { $ne: ["$$s", ""] }],
              },
            },
          },
        },
      },

      // unwind : array ভাঙা
      { $unwind: "$sizesNormalized" },

      // count 
      {
        $group: {
          _id: "$sizesNormalized",
          quantity: { $sum: 1 },
        },
      },

      //  numeric বা custom order detect
      {
        $addFields: {
          sortKey: {
            $cond: {
              if: { $regexMatch: { input: "$_id", regex: /^[0-9]+$/ } },
              then: { $toInt: "$_id" },
              else: {
                $switch: {
                  branches: [
                    { case: { $eq: ["$_id", "XS"] }, then: 1001 },
                    { case: { $eq: ["$_id", "S"] }, then: 1002 },
                    { case: { $eq: ["$_id", "M"] }, then: 1003 },
                    { case: { $eq: ["$_id", "L"] }, then: 1004 },
                    { case: { $eq: ["$_id", "XL"] }, then: 1005 },
                    { case: { $eq: ["$_id", "XXL"] }, then: 1006 },
                    { case: { $eq: ["$_id", "XXXL"] }, then: 1007 },
                  ],
                  default: 1999,
                },
              },
            },
          },
        },
      },

      //  final sort
      { $sort: { sortKey: 1 } },
    ];


    const countProductSizeBased = await dbConnect("products").aggregate(pipeline).toArray();
    
    return Response.json( countProductSizeBased );

  } catch (error) {
     console.error("Error in GET:", error);
     return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
