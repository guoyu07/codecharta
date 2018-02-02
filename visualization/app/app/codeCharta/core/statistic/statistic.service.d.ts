import { CodeMap, CodeMapNode } from "../data/model/CodeMap";
import { Settings } from "../../core/settings/settings.service";
import { DataModel } from "../data/data.service";
export declare enum STATISTIC_OPS {
    NOTHING = "NOTHING",
    MEAN = "MEAN",
    MEDIAN = "MEDIAN",
    MAX = "MAX",
    MIN = "MIN",
    FASHION = "FASHION",
}
export declare class StatisticMapService {
    static SELECTOR: string;
    unifyMaps(data: DataModel, settings: Settings): CodeMap;
    createArrayMap(input: CodeMapNode, output: CodeMapNode, length: number): CodeMapNode;
    fulfillMap(input: CodeMapNode, output: CodeMapNode, position: number): CodeMapNode;
    emptyMap(output: any): any;
    applyStatistics(input: any, output: any, operation: STATISTIC_OPS): any;
    statistic(input: number[], operation: STATISTIC_OPS): number;
    mean(input: number[]): number;
    max(input: number[]): number;
    min(input: number[]): number;
    fashion(input: number[]): number;
    median(input: number[]): number;
}
