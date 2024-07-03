export interface Iproduct{
    pName: string;
    pId: string;
    pStatus: Ipstatus;
    canReturn : 1 | 0
}
export type Ipstatus = 'Progress'|'Dispatched'|'Delivered'