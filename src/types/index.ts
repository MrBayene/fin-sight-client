export interface GraphData {
    id: string;
    label: string;
    values: number[];
}

export type GraphType = 'line' | 'bar' | 'pie';