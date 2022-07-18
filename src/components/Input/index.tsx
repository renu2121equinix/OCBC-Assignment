import { FormEvent } from "react";
import { Wrapper, Label, InputComponent, Error } from "./style";

interface IInput {
  type: string;
  name: string;
  value: string | number;
  handleChange: (e: FormEvent) => void;
  label: string;
  error: string;
}

export const Input = ({
  type,
  name,
  value,
  handleChange: onChange,
  label,
  error
}: IInput): JSX.Element => {
  return (
    <Wrapper>
      <Label
        id={`input-${name}`}
        data-testid={`label-${name}`}
        htmlFor={`input-${name}`}
      >
        {label}
      </Label>
      <InputComponent
        type={type}
        aria-labelledby={`input-${name}`}
        autoComplete="off"
        name={name}
        data-testid={`input-${name}`}
        value={value}
        onChange={onChange}
      />
      {error && <Error data-testid={`error-${name}`}>{error}</Error>}
    </Wrapper>
  );
};
