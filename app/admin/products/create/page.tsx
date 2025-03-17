import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";
export async function createProductAction(formData: FormData) {
  "use server";
  const name = formData.get("name");
  console.log(name);
}

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <div>
      <section>
        <h1 className="capitalize text-2xl font-semibold mb-8">
          create product
        </h1>
        <div className="border p-8">
          <form action={createProductAction}>
           <FormInput name="name" type="text" label="product name" defaultValue={name}/>
            <Button size="lg" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CreateProductPage;
