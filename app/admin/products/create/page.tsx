import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckBoxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createProductAction } from "@/utils/actions";
import { faker } from "@faker-js/faker";

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
          <FormContainer action={createProductAction}>
            <div className="grid gap-4 md:grid-cols-2 my-4">
              <FormInput
                name="name"
                type="text"
                label="product name"
                defaultValue={name}
              />
              <FormInput
                name="company"
                type="text"
                label="company name"
                defaultValue={company}
              />
              <PriceInput />
              <ImageInput />
            </div>
            <TextAreaInput
              name="description"
              labelText="product description"
              defaultValue={description}
            />
            <div className="mt-6">
              <CheckboxInput name="feature" label="feature" />
            </div>
            <SubmitButton text='create prodocut' className="mt-8"/>
          </FormContainer>
        </div>
      </section>
    </div>
  );
}

export default CreateProductPage;
