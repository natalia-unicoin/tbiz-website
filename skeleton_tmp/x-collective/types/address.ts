export interface State {
  name: string;
}

export interface Country {
  name: string;
  code: string;
  states?: State[];
}
