"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var list_service_1 = require("./list.service");
var ListComponent = (function () {
    function ListComponent(listService) {
        this.listService = listService;
        this.list = [];
    }
    ListComponent.prototype.loadlist = function () {
        var _this = this;
        this.listService.getList().subscribe(function (list) {
            var darr = list;
            for (var i in darr) {
                var darr1 = darr[i];
                for (var i1 in darr1) {
                    _this.list.push(darr1[i1]);
                }
            }
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.loadlist();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'my-list',
        template: "<h1>List of all 2015 USA Holidays</h1>\n  \t\t\t\t<ul>\n  \t\t\t\t\t<li *ngFor=\"let item of list\">\n  \t\t\t\t\t\t<p *ngFor=\"let kid of item\">{{kid.name}}</p>\n  \t\t\t\t\t</li>\n  \t\t\t\t</ul>\n  \t\t\t\t"
    }),
    __metadata("design:paramtypes", [list_service_1.ListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map