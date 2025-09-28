// const encoded = "Trousers-%26-T-shirt";  
// 👉 "Trousers-%26-T-shirt"
// const decoded = decodeURIComponent(encoded);
// 👉 "Trousers-&-T-shirt"

export const decodeParams = async(params: Record<string, string[]>)=>{
  // console.log(params); // like:= sub_categories: ['women', '3-piece-sets']
  
  const decoded: Record<string, string[]> = {}; // string-keyed object of string[] values

      for(const key in params){
      //  console.log(key,'12'); //sub_categories
        const value = params[key];
      //  console.log(value,'14'); // ['women', '3-piece-sets']
        decoded[key] = value.map((v) => decodeURIComponent(v)); //decoded["sub_categories"] = ["women", "3-piece-sets"];
      }     
    return decoded;
}