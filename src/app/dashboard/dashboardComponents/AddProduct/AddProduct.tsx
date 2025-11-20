import { addProduct } from '@/app/actions/addProduct';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Form from 'next/form';

const AddProduct = () => {
    return (
    <Form action={addProduct} className='w-full my-3'>
    <div className='fieldsContainer flex flex-col md:flex-row justify-around md:space-x-5 w-full'>
    <div className='w-full'>
        <div className="space-y-2 mb-2">
          <Label htmlFor="_id">Product ID</Label>
          <Input name="_id" id="_id" type="text" placeholder="Product ID" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="name">Name</Label>
          <Input name="name" id="name" type="text" placeholder="Product Name" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="description">Description</Label>
          <Input name="description" id="description" type="text" placeholder="Product Description" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="brand">Brand</Label>
          <Input name="brand" id="brand" type="text" placeholder="Brand Name" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="subCategory">Sub Category</Label>
          <Input name="subCategory" id="subCategory" type="text" placeholder="Sub Category" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="targetAudience">Target Audience</Label>
          <Input name="targetAudience" id="targetAudience" type="text" placeholder="Target Audience" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="size">Size</Label>
          <Input name="size" id="size" type="text" placeholder="Sizes (comma separated)" className='border-slate-500' required />
        </div>
    </div>
    <div className='w-full'>
        <div className="space-y-2 mb-2">
          <Label htmlFor="price">Price</Label>
          <Input name="price" id="price" type="number" placeholder="Product Price" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="inStock">In Stock</Label>
          <Input name="inStock" id="inStock" type="text" placeholder="true / false / number / text" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="rating">Rating</Label>
          <Input name="rating" id="rating" type="text" placeholder="Rating value" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="image">Image URL</Label>
          <Input name="image" id="image" type="text" placeholder="Image URL" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="color">Color</Label>
          <Input name="color" id="color" type="text" placeholder="Product Color" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="ageGroup">Age Group (optional)</Label>
          <Input name="ageGroup" id="ageGroup" type="text" placeholder="Age Group" className='border-slate-500' required />
        </div>
        
        <div className="space-y-2 mb-2">
          <Label htmlFor="DateAdded">Date Added</Label>
          <Input name="DateAdded" id="DateAdded" type="date" className='border-slate-500' required />
        </div>
    </div>
    </div>
        <button type='submit' className='bg-sky-500 mx-auto block p-2 rounded w-32 text-lg font-medium'>SUBMIT</button>
    </Form>  
    );
};

export default AddProduct;