export interface IContactResquestData {
    type: 'support' | 'partnership';
    name: string;
    email: string;
    phone: string;
    message?: string;
}

export interface IProposalRequestData extends IContactResquestData {
    segment: string;
    proposal: string;
    publicInfo: string;
    budgeting: string;
    more: string;
    subject: string;
}
