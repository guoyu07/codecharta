import {TooltipService, TooltipServiceSubscriber, Tooltips} from "../../core/tooltip/tooltip.service";
import {IScope} from "angular";
/**
 * Controller for the DropdownDirective
 */
class DropdownController implements TooltipServiceSubscriber{

    /* @ngInject */
    /**
     *
     * @param {TooltipService} tooltipService
     * @param {Scope} $scope
     */
    constructor(
        private tooltipService: TooltipService,
        private $scope: IScope) {

        tooltipService.subscribe(this);

    }

    onTooltipsChanged(tooltips: Tooltips, event: Event) {
        this.$scope.$apply();
    }

    /**
     * returns the tooltip description related to the given key
     * @param {String} key
     * @returns {String} description
     */
    getTooltipTextByKey(key) {
        return this.tooltipService.getTooltipTextByKey(key);
    }

    toLowerCaseButFirst(word: string): string{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}

export {DropdownController};


