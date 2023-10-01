export interface OptionType {
  index: number;
  value: number;
  name: string;
}
export interface FormType {
  label: string;
  type: string;
  value: string | Date | number;
  name: string;
  options?: OptionType[];
}
