import { DataServiceSubscriber, DataService, DataModel } from "../../core/data/data.service";
import { SettingsService } from "../../core/settings/settings.service";
import { CodeMap } from "../../core/data/model/CodeMap";
/**
 * Controls the RevisionChooser
 */
export declare class RevisionChooserController implements DataServiceSubscriber {
    private dataService;
    private settingsService;
    revisions: CodeMap[];
    visible: boolean;
    /**
     * @listens {data-changed}
     * @constructor
     * @param {DataService} dataService
     */
    constructor(dataService: DataService, settingsService: SettingsService);
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
    /**
     * called on data change
     * @param {DataModel} data
     */
    onDataChanged(data: DataModel): void;
    loadComparisonMap(key: number): void;
    loadReferenceMap(key: number): void;
}
export declare const revisionChooserComponent: {
    selector: string;
    template: any;
    controller: typeof RevisionChooserController;
};
