import type { 符筆具 } from '../fubi.js';
import type { 符條 } from '../fupu.js';
export type 符筆 = (bi: 符筆具, tiao: 符條) => void;
export declare const 落筆簿: Record<string, 符筆>;
