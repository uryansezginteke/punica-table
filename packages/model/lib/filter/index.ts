export interface IFilter {
  render: (formData: any, formController: any) => any;
  entity: () => Promise<any>;
  data: {
    [key: string]: any;
  };
}
