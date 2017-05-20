System.register(["angular2/core", "./day-component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, day_component_1;
    var HolidaysComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (day_component_1_1) {
                day_component_1 = day_component_1_1;
            }],
        execute: function() {
            HolidaysComponent = (function () {
                function HolidaysComponent() {
                    this.holidays = [];
                }
                HolidaysComponent.prototype.loadUsers = function () {
                    var _this = this;
                    fetch('https://holidayapi.com/v1/holidays?country=US&year=2015&key=cbe17756-ccb2-4cf9-8154-54012ec79f73')
                        .then(function (response) {
                        return response.json();
                    }).then(function (data) {
                        for (var i1 in data) {
                            var cdata = data[i1];
                            for (var i2 in cdata) {
                                var cdata1 = cdata[i2];
                                for (var i3 in cdata1) {
                                    var cdata2 = cdata1[i3];
                                    _this.holidays.push(cdata2.name);
                                }
                            }
                        }
                    }).catch(function (ex) {
                        console.error('Error fetching users', ex);
                    });
                };
                HolidaysComponent.prototype.ngOnInit = function () {
                    this.loadUsers();
                };
                HolidaysComponent = __decorate([
                    core_1.Component({
                        selector: 'holidays-list',
                        template: "\n               <md-card id=\"page-padding\">\n                  <h2>List of all 2015 USA Holidays</h2>\n                  <md-list class=\"app-list\">\n                     <md-list-item *ngFor=\"#day of holidays\">\n                        <p md-line class=\"demo-secondary-text\"><a href=\"/list/{{day}}\">{{day}}</a></p>\n                     </md-list-item>\n                  </md-list>\n               </md-card>\n            ",
                        directives: [day_component_1.DayComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HolidaysComponent);
                return HolidaysComponent;
            }());
            exports_1("HolidaysComponent", HolidaysComponent);
        }
    }
});
//# sourceMappingURL=holidays-component.js.map