export interface IContactResquestData {
  type: "support" | "partnership";
  name: string;
  email: string;
  phone: string;
  subject: string;
  message?: string;
}

export interface IProposalRequestData extends IContactResquestData {
  segment: string;
  proposal: string;
  publicInfo: string;
  budgeting: string;
  more: string;
}
