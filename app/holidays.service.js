System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var HolidaysService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HolidaysService = (function () {
                function HolidaysService() {
                    this.Holidays = [];
                }
                HolidaysService.prototype.loadlist = function () {
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
                                    _this.Holidays.push(cdata2.name);
                                    console.log(_this.Holidays);
                                }
                            }
                        }
                    }).catch(function (ex) {
                        console.error('Error fetching users', ex);
                    });
                };
                HolidaysService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HolidaysService);
                return HolidaysService;
            }());
            exports_1("HolidaysService", HolidaysService);
        }
    }
});
//# sourceMappingURL=holidays.service.js.map