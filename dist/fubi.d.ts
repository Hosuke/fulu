import { type 筆具 } from './bi.js';
export interface 符框 {
    中x: number;
    頂y: number;
    寬px: number;
    硃色?: string;
}
export interface 路徑具 {
    M(x: number, z: number): 路徑具;
    L(x: number, z: number): 路徑具;
    Q(cx: number, cz: number, x: number, z: number): 路徑具;
    C(c1x: number, c1z: number, c2x: number, c2z: number, x: number, z: number): 路徑具;
    close(): 路徑具;
}
export interface 符筆具 extends 筆具 {
    硃: (fn: () => void) => void;
    塊: (書: (t: 路徑具) => void) => void;
    鑿: (書: (t: 路徑具) => void) => void;
    鑿線: (寬: number, 書: (t: 路徑具) => void) => void;
}
export declare function 執符筆(ctx: CanvasRenderingContext2D, 框: 符框): 符筆具;
export declare function 卵(t: 路徑具, x: number, z: number, rx: number, rz: number, 傾?: number): void;
export declare function 符界(bi: 筆具, 幅比?: number): void;
