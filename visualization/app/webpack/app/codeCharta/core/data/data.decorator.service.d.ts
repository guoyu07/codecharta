import { CodeMap } from "./model/CodeMap";
/**
 * Decorates the data structure with artificial metrics
 */
export declare class DataDecoratorService {
    constructor();
    /**
     * Decorates the map with the unary metric. This metric is always 1 to allow the same area on all buildings.
     * @param {CodeMap} map
     */
    decorateMapWithUnaryMetric(map: CodeMap): void;
    decorateMapWithOriginAttribute(map: CodeMap): void;
}
