export type Select = { value: string; label: string } | null;

export interface Form {
  sendTo: Select;
  sendFrom: Select;
  postCardImageUrl: string;
  sendAt: Date;
}
