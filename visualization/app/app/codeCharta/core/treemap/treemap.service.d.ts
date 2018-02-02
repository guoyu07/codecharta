import { DataService } from "../data/data.service";
import { CodeMapNode } from "../data/model/CodeMap";
import { HierarchyRectangularNode } from "d3-hierarchy";
/**
 * This service transforms valid file data to a custom treemap. Our custom treemap has a 3rd axis added to the nodes.
 */
declare class TreeMapService {
    private dataService;
    static SELECTOR: string;
    constructor(dataService: DataService);
    /**
     * creates an array of fully transformed/customized and visible {d3#treemap} nodes.
     * @external {d3#treemap} https://github.com/d3/d3-hierarchy/blob/master/README.md#treemap
     * @param {Object} data valid data
     * @param {number} w treemap width for calculation
     * @param {number} l treemap length for calculation
     * @param {number} p padding between treemap squares
     * @param {string} areaKey area metric name
     * @param {string} heightKey height metric name
     */
    createTreemapNodes(data: CodeMapNode, w: number, l: number, p: number, areaKey: string, heightKey: string): HierarchyRectangularNode<{}>[];
    /**
     * Transforms a d3 node to our specific representation. Our specification requires a third axis z.
     * -add z0 and z1 depending on treedepth and padding
     * -add w,l,h depending on data.type and x, y
     * -all we also write all important stuff into the node itself so we do not need node.data anymore (there could be obsolete data from old cc.jsons)
     * -the height of the new z axis needs to be scaled to the w/l of the {d3#treemap}
     *
     * @param {Object} node d3 node
     * @param {string} heightKey name of the height metric
     * @param {number} heightScale scaling factor
     * @param {number} folderHeight height of folder
     */
    private transformNode(node, heightKey, heightScale, folderHeight);
    /**
     * Gets the biggest value of a metric in the current set of revisions
     * @param {string} metric name of the metric
     * @returns {number} max value
     */
    getMaxMetricInAllRevisions(metric: string): number;
    /**
     * Extracts the area by areakey from the node.
     *
     * @param {Object} node d3 node
     * @param {string} areaKey name of the area attribute key
     * @returns {number} area value else 0
     */
    getArea(node: any, areaKey: any): number;
}
export { TreeMapService };
