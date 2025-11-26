import ManageProductsClient from "./ManageProductsClient";
import { getAllProducts } from '@/app/utils/getAllProducts';
import { getCategories } from '@/app/utils/getCategories';

const ManageProducts = async() => {
  const allProductsOfCategoriesPromise = getAllProducts();
  const allCategoriesPromise =  getCategories();
  
  const [allCategories, allProductsOfCategories] = await Promise.all([
    allCategoriesPromise, allProductsOfCategoriesPromise //parallaly loads data
  ]);
  
  // const allProductsOfCategories = await getAllProducts();
  // const allCategories = await getCategories();

    return (
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum tempora totam laudantium eos! Sequi veritatis perspiciatis, alias, quibusdam fuga quia impedit sint odio a suscipit illo amet aut quaerat maiores.
        Pariatur molestiae provident est iusto corrupti consequuntur. Sunt unde, odit eius quasi aliquid dolorem totam harum quidem natus, quia error consequuntur autem nobis recusandae in aspernatur ipsum fugiat beatae optio.
        Earum, ratione consectetur reprehenderit repellendus ut harum id eveniet eius eum animi minima? Culpa voluptatem tempore facilis modi eum enim atque molestias ipsum animi quisquam, amet repellat ut voluptate consequuntur!
        In et distinctio consequatur nesciunt impedit explicabo! Vero tempore ratione, cum fuga, quasi minus incidunt repellat doloremque delectus quam dolore ipsa magni sint perspiciatis laudantium nobis, repudiandae beatae pariatur voluptatibus!
        Assumenda, perspiciatis eius, placeat laboriosam hic aperiam sequi excepturi a totam rem omnis maiores magni illo, incidunt dolore minima sit eos ipsam? Nulla, tenetur? Quidem esse totam sunt asperiores magnam.
        Labore veritatis totam minima error vel repellendus iusto velit! Alias sint nihil eligendi, hic amet molestias dolore quibusdam tenetur fugiat harum voluptas. Sapiente at esse quidem sequi! Veritatis, consequatur esse!
        Harum facilis ut facere consectetur est rem dolorem. Excepturi rerum, minus maiores suscipit repellat doloribus earum in ut, quod odio quisquam tempore at voluptates, quos dignissimos reprehenderit quas sed et.
        Fuga, exercitationem. Quaerat, id dolorum, aspernatur aut explicabo, recusandae animi facilis blanditiis tempora cumque modi. Tempore alias quis provident laborum dolores architecto id exercitationem debitis aut eos. Molestias, dicta excepturi!
        Sed nulla commodi deserunt quam culpa totam aliquid mollitia, voluptatem voluptate, ea recusandae. Temporibus laudantium quia quas doloremque. In debitis aut sunt enim, quibusdam laboriosam sint dicta quam a officiis.
        Suscipit quo soluta deserunt asperiores quod nisi. Explicabo illum omnis sit quis sed totam incidunt, facere nobis quasi ratione consequatur, perferendis repellat voluptatibus, optio enim eaque dolores eligendi laborum dolorem.
        Voluptatibus, provident modi reiciendis officia tempora nihil explicabo animi quidem voluptate labore exercitationem alias nam error sint quia amet vel minus cupiditate nesciunt voluptatum? Ratione quaerat qui fuga ipsam consequatur!
        Voluptatem nam in perspiciatis iure ab cupiditate odio nihil vero a incidunt, facere minima voluptates non eaque beatae ratione, error pariatur esse ad reprehenderit dolore nemo. Blanditiis, doloribus. Nesciunt, voluptatum.
        Laudantium modi, nam unde corporis culpa sit sunt excepturi aspernatur cum! Labore aut, dolore nostrum illo dignissimos laborum illum voluptates quaerat dolorem nisi hic, cupiditate corporis voluptatibus ipsam laboriosam facilis.
        Consectetur debitis ducimus perspiciatis sed odio animi obcaecati exercitationem consequuntur accusantium, autem cumque. Voluptatibus sapiente facere assumenda natus temporibus saepe cum sunt nostrum optio sequi expedita, deleniti ea nulla quasi.
        Ullam a ex error assumenda vel tempora dicta. Numquam neque nihil illum omnis! Suscipit nihil vitae modi dolor? Dolor unde architecto optio aut dolorum dolorem voluptatibus consequuntur culpa veritatis esse.
        Odio dolorum officia vero a doloribus quisquam soluta hic ipsam facilis dolores quasi tempore impedit, sapiente reiciendis minus minima. Maxime praesentium sequi et alias! Velit delectus optio odit magni cum.
        Minima expedita unde consectetur exercitationem autem voluptatum qui id doloremque praesentium? Atque sunt voluptate, laborum recusandae necessitatibus cum corrupti explicabo deleniti. Perferendis sed inventore at omnis quaerat, consequatur repellat cum?
        Provident, sapiente officia. Optio provident numquam omnis fugit velit quia modi, possimus expedita odit, dolorem iste tenetur a neque eos eaque soluta odio fugiat assumenda. Velit dolor iure earum fugiat!
        Voluptatibus debitis sed fuga ipsam quis facilis. Quis aliquid perferendis, asperiores et sapiente illum nobis perspiciatis atque saepe vitae, eaque accusamus quia vel? Quas incidunt sint commodi. Neque, dolor dicta?
        Possimus tenetur et quisquam, quam hic ad. At quidem quos magnam autem! Magnam ducimus error eius, quidem officia iusto reprehenderit quos, similique porro delectus dicta dolorum provident, labore maiores ut.
        Cum recusandae error quam iusto facere suscipit, tempore consectetur quisquam, odit quidem quos. In maiores at neque, a iusto, dicta enim fugiat quas assumenda corrupti aliquam id autem illum repellendus.
        Ad corporis doloribus dolores nobis assumenda alias accusantium quis ipsa voluptas commodi dolore vitae, reiciendis dolorum, sed distinctio officia ea sequi maiores nostrum illum laudantium asperiores aliquam odio. Distinctio, corporis!
        Obcaecati consequuntur magni aliquid excepturi expedita quidem ullam velit eveniet aliquam officiis temporibus enim, quod maiores unde iure provident omnis at vitae tempora quisquam? Veniam veritatis esse temporibus quod dolore.
        Voluptatum, adipisci dolorum, iste totam maiores quod quaerat modi odit reprehenderit facere laboriosam possimus fugiat consequuntur mollitia esse repellat! Repellat, eius quo esse laboriosam tempore unde ab quam distinctio ullam.
        Architecto, debitis saepe dicta consectetur reiciendis recusandae reprehenderit ipsum minima pariatur dolore laboriosam cumque. Iste quos labore natus quaerat cum veniam. Dolores, iure? Aliquam delectus accusantium, quisquam veritatis corrupti possimus!
        Maxime accusamus autem reprehenderit quia tempora architecto, rem aliquam illo consectetur! Delectus tenetur molestias, cum sint nulla tempora. Provident consectetur animi ratione quasi quisquam consequuntur tempore hic corporis ut pariatur.
        Tempore aperiam nobis, temporibus harum esse fugit sunt similique. Aliquid commodi corrupti quia eligendi deleniti? Aliquam mollitia ipsum sint autem, sit quae distinctio soluta doloremque corrupti tempora, veniam magni vel.
        Maxime, reiciendis consectetur voluptatum dolore porro voluptatem nostrum facere laudantium deserunt repellendus facilis exercitationem quae dolorem deleniti excepturi aut amet possimus! Quaerat expedita blanditiis recusandae aut atque ipsum voluptas dignissimos.
        Ipsam, dolor! Quam perferendis ex quasi repudiandae itaque libero cum vero quisquam animi deserunt vitae autem recusandae inventore, eveniet debitis enim porro at ipsa facilis possimus? Optio voluptatum pariatur fuga.
        Aliquid, esse. Molestiae asperiores iure labore itaque exercitationem, aut, eos quisquam quos tempore dicta repudiandae necessitatibus. Cupiditate unde velit eveniet aliquam voluptas qui? Itaque a officia commodi sint quidem accusamus.
      </div>
      // <ManageProductsClient allProductsOfCategories={allProductsOfCategories} allCategories={allCategories}/>
    );
};

export default ManageProducts;