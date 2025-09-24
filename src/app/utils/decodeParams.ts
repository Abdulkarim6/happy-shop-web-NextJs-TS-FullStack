// const encoded = "Trousers-%26-T-shirt";  
// 👉 "Trousers-%26-T-shirt"
// const decoded = decodeURIComponent(encoded);
// 👉 "Trousers-&-T-shirt"

export const decodeParams = async(params: Record<string, string[]>)=>{
  const decoded: Record<string, string[]> = {};

      for(const key in params){
        // console.log(key); // sub_categories
        const value = params[key];
        decoded[key] = value.map((v) => decodeURIComponent(v));
      }
    return decoded;
}