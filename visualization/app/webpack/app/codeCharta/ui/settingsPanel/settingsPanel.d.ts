import { STATISTIC_OPS, StatisticMapService } from "../../core/statistic/statistic.service";
import { SettingsService, Settings, SettingsServiceSubscriber } from "../../core/settings/settings.service";
import { DataService, DataServiceSubscriber, DataModel } from "../../core/data/data.service";
import { TreeMapService } from "../../core/treemap/treemap.service";
/**
 * Controls the settingsPanel
 */
export declare class SettingsPanelController implements DataServiceSubscriber, SettingsServiceSubscriber {
    private settingsService;
    private dataService;
    private treeMapService;
    private statisticMapService;
    settings: Settings;
    sliderOptions: any;
    metrics: string[];
    data: DataModel;
    STATISTIC_OPS: typeof STATISTIC_OPS;
    constructor(settingsService: SettingsService, dataService: DataService, treeMapService: TreeMapService, statisticMapService: StatisticMapService);
    showUrlParams(): void;
    /**
     * called on settings change.
     * @param {Settings} settings
     */
    onSettingsChanged(settings: Settings): void;
    /**
     * called on data change.
     * @param {DataModel} data
     */
    onDataChanged(data: DataModel): void;
    /**
     * Notifies the settings service about changes.
     */
    notify(): void;
    /**
     * Sorts a simple string array in alphabetic order.
     * @param {string[]} arr
     * @returns {string[]} sortedArr
     */
    sortStringArrayAlphabetically(arr: string[]): string[];
    /**
     * Updates the map before broadcasting the update of the settings
     */
    onStatisticsChange(): void;
}
export declare const settingsPanelComponent: {
    selector: string;
    template: any;
    controller: typeof SettingsPanelController;
};
