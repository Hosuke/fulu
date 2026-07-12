export type 符類 = '入山符' | '真形圖' | '複文' | '鎮宅符' | '雷法符' | '籙' | '其他';
export type 信級 = '已核' | '待核';
export interface 出典條 {
    典: string;
    據?: string;
    引?: string;
    註?: string;
    卷?: string;
}
export interface 符條 {
    id: string;
    名: string;
    類: 符類;
    式: string | null;
    用: string | null;
    出典: 出典條[];
    異說?: string;
    信: 信級;
    幅比?: number;
    據圖?: string;
}
export declare const 符譜: 符條[];
export declare const 依號: Record<string, 符條>;
