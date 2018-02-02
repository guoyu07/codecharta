/// <reference types="angular" />
/// <reference types="angular-mocks" />
import { DataServiceSubscriber, DataService, DataModel } from "../../core/data/data.service";
import { SettingsServiceSubscriber, SettingsService, Settings } from "../../core/settings/settings.service";
import { ITimeoutService } from "angular";
import { STATISTIC_OPS } from "../../core/statistic/statistic.service";
export declare class LegendPanelController implements DataServiceSubscriber, SettingsServiceSubscriber {
    private $timeout;
    private settingsService;
    private dataService;
    private $element;
    private deltas;
    private pd;
    private nd;
    private range;
    private areaMetric;
    private heightMetric;
    private colorMetric;
    private positive;
    private neutral;
    private negative;
    private select;
    private operation;
    private deltaColorsFlipped;
    private visible;
    constructor($timeout: ITimeoutService, settingsService: SettingsService, dataService: DataService, $element: Element);
    /**
     * Links the click Handler
     * @param {Scope} scope
     * @param {object} element dom element
     */
    $postLink(): void;
    /**
     * Toggles the visibility
     */
    toggle(): void;
    onDataChanged(data: DataModel): void;
    refreshDeltaColors(): void;
    onSettingsChanged(s: Settings): void;
    getImageDataUri(hex: number): string;
    encodeHex(s: string): string;
    encodeRGB(r: number, g: number, b: number): string;
    encodeTriplet(e1: number, e2: number, e3: number): string;
    generatePixel(color: string): string;
    setOperation(operation: STATISTIC_OPS): string;
}
export declare const legendPanelComponent: {
    selector: string;
    template: any;
    controller: typeof LegendPanelController;
};
