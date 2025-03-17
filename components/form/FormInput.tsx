import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};
function FormInput({
  name,
  type,
  label,
  defaultValue,
  placeholder,
}: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">{label || name}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}
export default FormInput;
