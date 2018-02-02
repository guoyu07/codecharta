import { Range } from "../../model/Range";
import { Scale } from "../../model/Scale";
import { DataService, DataServiceSubscriber, DataModel } from "../data/data.service";
import { CameraChangeSubscriber, ThreeOrbitControlsService } from "../../codeMap/threeViewer/threeOrbitControlsService";
import { PerspectiveCamera } from "three";
import { STATISTIC_OPS } from "../statistic/statistic.service";
import { DeltaCalculatorService } from "../data/data.deltaCalculator.service";
import { DataDecoratorService } from "../data/data.decorator.service";
export interface Settings {
    map: any;
    neutralColorRange: Range;
    areaMetric: string;
    heightMetric: string;
    colorMetric: string;
    deltas: boolean;
    amountOfTopLabels: number;
    scaling: Scale;
    camera: Scale;
    margin: number;
    operation: STATISTIC_OPS;
    deltaColorFlipped: boolean;
}
export interface SettingsServiceSubscriber {
    onSettingsChanged(settings: Settings, event: Event): any;
}
export declare class SettingsService implements DataServiceSubscriber, CameraChangeSubscriber {
    private urlService;
    private dataService;
    private $rootScope;
    private threeOrbitControlsService;
    private statisticMapService;
    private deltaCalculatorService;
    private dataDecoratorService;
    static SELECTOR: string;
    private _settings;
    private _lastDeltaState;
    constructor(urlService: any, dataService: DataService, $rootScope: any, threeOrbitControlsService: ThreeOrbitControlsService, statisticMapService: any, deltaCalculatorService: DeltaCalculatorService, dataDecoratorService: DataDecoratorService);
    subscribe(subscriber: SettingsServiceSubscriber): void;
    private getInitialSettings(renderMap, metrics);
    private onActivateDeltas();
    private onDeactivateDeltas();
    /**
     * change the map and metric settings according to the parameter.
     * @listens {data-changed} called on data-changed
     * @emits {settings-changed} transitively on call
     * @param {DataModel} data
     */
    onDataChanged(data: DataModel): void;
    onCameraChanged(camera: PerspectiveCamera): void;
    /**
     * Broadcasts a settings-changed event with the new {Settings} object as a payload
     * @emits {settings-changed} on call
     */
    private onSettingsChanged();
    /**
     * TODO this method can be propably implemented much better
     * updates the settings object according to url parameters. url parameters are named like the accessors of the Settings object. E.g. scale.x or areaMetric
     * @emits {settings-changed} transitively on call
     */
    updateSettingsFromUrl(): void;
    /**
     * Updates query params to current settings
     */
    getQueryParamString(): string;
    /**
     * Applies given settings. ignores map. this ensures to copy settings object and prevent side effects
     * @param {Settings} settings
     */
    applySettings(settings?: Settings): void;
    readonly settings: Settings;
    /**
     * Returns a metric from the metrics object. If it is not found the last possible metric will be returned.
     * @param id id
     * @param {object} metrics metrics object
     * @returns {string} metric
     */
    private getMetricByIdOrLast(id, metrics);
    /**
     * corrects settings, if the chosen metric is not available in the current map, the first three metrics are chosen as a default.
     * @param {Settings} settings
     */
    private correctSettings(settings);
    /**
     * Checks if the given metricName is in the metricsArray. If it is in there, we return it, else we return the defaultValue.
     * @param {String[]} metricsArray an array of metric names
     * @param {String} metricName a metric name to look for
     * @param {String} defaultValue a default name in case metricName was not found
     */
    private getMetricOrDefault(metricsArray, metricName, defaultValue);
}
