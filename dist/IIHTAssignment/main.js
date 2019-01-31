(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-project/add-project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-project/add-project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    font-family: Lato;\n  }\n  /* The container */\n  /* .container {\n      display: block;\n      position: relative;\n      padding-left: 35px;\n      margin-bottom: 12px;\n      cursor: pointer;\n      font-size: 22px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n  } */\n  /* Hide the browser's default checkbox */\n  /* .container input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer;\n  } */\n  /* Create a custom checkbox */\n  /* .checkmark {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 25px;\n      width: 25px;\n      background-color: #eee;\n  } */\n  /* On mouse-over, add a grey background color */\n  /* .container:hover input ~ .checkmark {\n      background-color: #ccc;\n  } */\n  /* When the checkbox is checked, add a blue background */\n  /* .container input:checked ~ .checkmark {\n      background-color: #2196F3;\n  }\n   */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* .checkmark:after {\n      content: \"\";\n      position: absolute;\n      display: none;\n  }\n   */\n  /* Show the checkmark when checked */\n  /* .container input:checked ~ .checkmark:after {\n      display: block;\n  } */\n  /* Style the checkmark/indicator */\n  /* .container .checkmark:after {\n      left: 9px;\n      top: 5px;\n      width: 5px;\n      height: 10px;\n      border: solid white;\n      border-width: 0 3px 3px 0;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n  } */\n  /*Slider */\n  .slidecontainer {\n    width: 100%;\n  }\n  .slider {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    transition: opacity .2s;\n  }\n  .slider:hover {\n    opacity: 1;\n  }\n  .slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: #4CAF50;\n    cursor: pointer;\n  }\n  .slider::-moz-range-thumb {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: #4CAF50;\n    cursor: pointer;\n  }\n  /* \n  body div.cdk-overlay-container {\n    z-index: 99999;\n  }\n  \n  /deep/ .cdk-overlay-pane {\n    z-index: 99999 !important;\n  }\n  \n  /deep/ .cdk-global-overlay-wrapper {\n    z-index: 1000 !important;\n  }\n  /deep/ .cdk-overlay-container {\n    z-index: 2000 !important;\n  }\n  \n  .mat-select-menu-container {\n    z-index: 99999 !important;\n  }\n  \n  .mat-dialog-container {\n    z-index: 99999;\n  }\n  \n  /deep/ .mat-select-panel {\n    z-index: 99999 !important;\n  }\n  \n  /deep/ .mat-primary {\n    z-index: 99999 !important;\n  } */\n  /* .cdk-global-overlay-wrapper {\n    z-index: 1000 !important;\n} */\n  /* .cdk-overlay-container {\n    z-index: 1000 !important;\n  }  */\n  /* .note-dialog .modal-dialog{ z-index:1050; } */\n  /* .modal-backdrop, .modal-backdrop.in{\n    z-index:1000;\n    }\n    \n    .modal {\n    z-index:1001;\n    } */"

/***/ }),

/***/ "./src/app/add-project/add-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-project/add-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"popular-templates-section\">\n  <div class=\"container-fluid\">\n    <h4>Add Project</h4>\n    <div [formGroup]=\"addProjectForm\">\n      <div>\n        <div>\n\n          <label>Project:\n            <input [(ngModel)]=\"projectInp.projectname\" formControlName=\"project\" required/>\n          </label><br>\n        </div>\n        <div>\n          <label class=\"container\">\n            <input type=\"checkbox\" [(ngModel)]=\"theCheckbox\" data-md-icheck (change)=\"toggleVisibility($event)\" formControlName=\"parenttaskcheck\"\n            /> Set Start and End Date\n\n            <span *ngIf=\"marked\">checked</span><span *ngIf=\"!marked\">unchecked</span>\n\n            <span class=\"checkmark\"></span>\n          </label>\n        </div>\n        <div>\n            <!-- <app-datepicker-popup [(model)]=\"modeldate\"></app-datepicker-popup> -->\n\n            <input type=\"date\" [(ngModel)]=\"projectInp.startdate\" placeholder=\"Start Date\" formControlName=\"startdate\"\n            />\n        </div>\n        <div>\n            <input type=\"date\" [(ngModel)]=\"projectInp.enddate\" placeholder=\"End Date\" formControlName=\"enddate\" />\n        </div>\n        <div>\n          <div class=\"slidecontainer\">\n\n            <label>Project Priority: {{projectInp.priority}}\n            </label><br>\n\n            <input [(ngModel)]=\"projectInp.priority\" class=\"slider\" type=\"range\" min=\"1\" max=\"100\" value=\"10\" formControlName=\"projectpriority\"\n            />\n          </div>\n        </div>\n\n\n        <div>\n          <label>\n            Manager : \n            <input  [ngModel]=\"projectManager\" disabled formControlName=\"user\" />\n            <button (click)=\"getUsers()\" type=\"button\" class=\"btn btn-info btn-md\" data-toggle=\"modal\" data-target=\"#myUserModal\">Search</button>\n\n          </label><br>\n        </div>\n      </div>\n      <!-- <button (click)=\"addData()\">{{buttonText}}</button> -->\n      <div class=\"container-fluid\">\n        <!-- <div class=\"span4 text-left\"><a href=\"#\" class=\"btn\">Btn1</a></div> -->\n        <div class=\"row m-0\">\n          <div class=\"col-lg-3 blue\"> </div>\n          <div class=\"col-lg-3 blue\">\n            <div class=\"row m-0\">\n              <div class=\"col-sm-6 blue\"> <button (click)=\"addData()\">{{buttonText}}</button> </div>\n              <div class=\"col-sm-6 blue\"> <button (click)=\"resetData()\">Reset</button> </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 blue\"> </div>\n          <div class=\"col-lg-3 blue\"> </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<hr size=\"10\">\n<section class=\"popular-templates-section\">\n  <div class=\"container-fluid\">\n    <div class=\"popular-templates-title\">\n    </div>\n    <div class=\"popular-templates\">\n      <div class=\"row m-0\">\n        <div class=\"col-3 blue\">\n          <!-- <input [(ngModel)]=\"userSearch\" placeholder=\"Search\" /> -->\n        </div>\n        <div class=\"col-9 blue\">\n          <div class=\"row m-0\">\n            <div class=\"col-9 blue\">\n              <div class=\"row m-0\">\n                <div class=\"col-md-4 blue\">Sort By:\n                </div>\n                <div class=\"col-md-2 blue\">\n                  <button (click)=\"getSortbyStartDate()\">Start Date</button>\n                </div>\n                <div class=\"col-md-2 blue\">\n                  <button (click)=\"getSortbyEndDate()\">End Date</button>\n                </div>\n                <div class=\"col-md-2 blue\">\n                  <button (click)=\"getSortbyPriority()\">Priority</button>\n                </div>\n                <div class=\"col-md-2 blue\">\n                  <button (click)=\"getSortbyCompleted()\">Completed</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 blue\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <hr size=\"10\">\n\n      <div *ngFor=\"let tta of projectdetails\">\n        <div class=\"row m-0\">\n          <div class=\"col-4 blue\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">Project Name: {{tta.project.projectname}}</li>\n              <li class=\"list-group-item\">No of Task:{{tta.noOfTask}}</li>\n              <li class=\"list-group-item\">Start Date:{{tta.project.startdate}}</li>\n            </ul>\n          </div>\n          <div class=\"col-4 black\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">Priority: {{tta.project.priority}}</li>\n              <li class=\"list-group-item\">Completed:{{tta.completed}}</li>\n              <li class=\"list-group-item\">End date:{{tta.project.enddate}}</li>\n            </ul>\n          </div>\n          <div class=\"col-4 black\">\n\n            <div class=\"row\">\n              <div><button (click)=\"editProject(tta)\">Edit</button></div>\n            </div>\n            <div class=\"row\">\n              <br>\n            </div>\n            <div class=\"row\">\n              <div><button (click)=\"deleteProject(tta)\">Delete</button></div>\n            </div>\n          </div>\n        </div>\n        <hr size=\"10\">\n\n      </div>\n    </div>\n  </div>\n\n</section>\n\n<hr>\n\n<!-- <app-datepicker-popup [(model)]=\"modeldate\"></app-datepicker-popup> -->\n<!-- <pre>Model: {{ modeldate | json }}</pre>\n<pre>Model: {{ model| date:'yyyy-MM-dd' }}</pre> -->\n\n<div class=\"modal fade\" id=\"myUserModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Select Manager</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <select [(ngModel)]=\"userSelected\"  (ngModelChange)=\"onAreaUserControlChanged()\">\n            <option *ngFor=\"let tta of users\" [ngValue]=\"tta\">{{tta.firstname}}</option>\n          </select>\n          <p>You selected: {{userSelected | json}}</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/add-project/add-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-project/add-project.component.ts ***!
  \******************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _parenttask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parenttask.service */ "./src/app/parenttask.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(rest, rest1, rest2, rest3, route, router, datePipe) {
        this.rest = rest;
        this.rest1 = rest1;
        this.rest2 = rest2;
        this.rest3 = rest3;
        this.route = route;
        this.router = router;
        this.datePipe = datePipe;
        this.modeldate = {
            "year": 0,
            "month": 0,
            "day": 0
        };
        this.projectManager = "";
        this.userSearch = "";
        this.marked = false;
        this.theCheckbox = false;
        this.parenttasks = [];
        this.projects = [];
        this.users = [];
        this.buttonText = "Add";
        this.projectdetails = [];
        this.parentTaskSelected = { parentid: 0, parenttask: "" };
        this.projectSelected = { projectid: 0, projectname: "", startdate: "", enddate: "", priority: 0 };
        this.userSelected = { userid: 0, firstname: "", lastname: "", employeeid: 0, project: "", task: "" };
        this.taskSelected = { taskname: '', startdate: '', enddate: '', priority: 0, active: 1, parenttask: '', project: '' };
        this.addProjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            parenttask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            projectpriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            startdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            enddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            parenttaskcheck: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            taskname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            parenttaskselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            projectselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            userselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.ptask = { parenttask: '' };
        this.task = { taskname: '', startdate: '', enddate: '', priority: 0, active: 1, parenttask: '', project: '' };
        this.taskuser = { userid: 0, firstname: '', lastname: '', employeeid: 0, project: '', task: '' };
        this.projectInp = { projectid: 0, projectname: '', startdate: '', enddate: '', priority: 0 };
    }
    ;
    AddProjectComponent.prototype.ngOnInit = function () {
        this.getProjects();
        //this.model = Date.now();
        this.disableFields();
        this.model = new Date();
        this.tomorrow = new Date();
        this.tomorrow.setDate(this.tomorrow.getDate() + 1);
        console.log(this.datePipe.transform(this.tomorrow, 'yyyy-MM-dd'));
        this.modeldate.year = parseInt(this.datePipe.transform(this.model, 'yyyy'), 10);
        this.modeldate.month = parseInt(this.datePipe.transform(this.model, 'MM'), 10);
        this.modeldate.day = parseInt(this.datePipe.transform(this.model, 'dd'), 10);
    };
    AddProjectComponent.prototype.ngOnChanges = function () {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
    };
    AddProjectComponent.prototype.addData = function () {
        var _this = this;
        ;
        this.projectSelected = this.projectInp;
        console.log(this.projectSelected);
        console.log(this.taskuser);
        if (this.taskuser == null || this.taskuser.employeeid == null || this.taskuser.firstname == ""
            || this.taskuser.lastname == "") {
            alert("Please Select Manager");
            return;
        }
        this.taskuser.project = this.projectSelected;
        if (this.taskuser.project == null) {
            alert("Please Enter Project Name");
            return;
        }
        if (this.projectInp.startdate >= this.projectInp.enddate) {
            alert("End date should be greater than Start date");
            return;
        }
        this.rest3.addData(this.taskuser).subscribe(function (result) {
            _this.getProjects();
            _this.resetData();
        }, function (err) {
            console.log(err);
        });
        this.buttonText = "Add";
    };
    AddProjectComponent.prototype.getParentTask = function () {
        var _this = this;
        this.parenttasks = [];
        this.rest.getAll().subscribe(function (data) {
            console.log(data);
            _this.parenttasks = data;
        });
    };
    AddProjectComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectdetails = [];
        this.rest2.getAllProjectDetails().subscribe(function (data) {
            console.log(data);
            _this.projectdetails = data;
            if (_this.projectdetails.errorMessage == "Empty users") {
                console.log("No Project");
                _this.projectdetails = [];
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddProjectComponent.prototype.getSortbyStartDate = function () {
        var _this = this;
        this.projectdetails = [];
        this.rest2.getSortbyStartDate().subscribe(function (data) {
            console.log(data);
            _this.projectdetails = data;
        });
    };
    AddProjectComponent.prototype.getSortbyEndDate = function () {
        var _this = this;
        this.projectdetails = [];
        this.rest2.getSortbyEndDate().subscribe(function (data) {
            console.log(data);
            _this.projectdetails = data;
        });
    };
    AddProjectComponent.prototype.getSortbyPriority = function () {
        var _this = this;
        this.projectdetails = [];
        this.rest2.getSortbyPriority().subscribe(function (data) {
            console.log(data);
            _this.projectdetails = data;
        });
    };
    AddProjectComponent.prototype.getSortbyCompleted = function () {
        var _this = this;
        this.projectdetails = [];
        this.rest2.getSortbyCompleted().subscribe(function (data) {
            console.log(data);
            _this.projectdetails = data;
        });
    };
    AddProjectComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = [];
        this.rest3.getAll().subscribe(function (data) {
            console.log(data);
            _this.users = data;
            console.log(_this.users);
        });
    };
    AddProjectComponent.prototype.editProject = function (editproject) {
        console.log(editproject);
        this.taskuser = editproject.user;
        console.log(editproject);
        this.projectInp = editproject.project;
        if (editproject.user == null) {
            console.log("No PM Selected");
            this.projectManager = "";
        }
        else {
            this.userSelected = editproject.user;
            this.projectManager = this.userSelected.firstname;
        }
        this.buttonText = "Update";
    };
    AddProjectComponent.prototype.deleteProject = function (deleteproject) {
        var _this = this;
        console.log(deleteproject);
        this.rest3.updateUserByTaskProject(deleteproject.project.projectid).subscribe(function (data) {
            console.log(data);
            _this.rest1.updateByProjectId(deleteproject.project.projectid).subscribe(function (data) {
                console.log(data);
                _this.rest2.deleteData(deleteproject.project.projectid).subscribe(function (data) {
                    console.log(data);
                    _this.taskuser = deleteproject.user;
                    if (_this.taskuser != null) {
                        _this.taskuser.project = null;
                        _this.rest3.addData(_this.taskuser).subscribe(function (result) {
                            _this.getProjects();
                        }, function (err) {
                            console.log(err);
                        });
                    }
                });
            });
        });
    };
    AddProjectComponent.prototype.resetData = function () {
        this.addProjectForm.reset();
        this.buttonText = "Add";
        this.getProjects();
        // this.projectInp.projectid = 0;
        // this.projectInp.projectname = "";
        // this.projectInp.priority = 0;
        // this.projectInp.startdate = "";
        // this.projectInp.enddate = "";
    };
    AddProjectComponent.prototype.toggleVisibility = function (e) {
        this.marked = e.target.checked;
        console.log('toggle');
        if (this.marked == true) {
            console.log('enable');
            this.enableFields();
            this.projectInp.startdate = this.datePipe.transform(this.model, 'yyyy-MM-dd');
            this.projectInp.enddate = this.datePipe.transform(this.tomorrow, 'yyyy-MM-dd');
        }
        else {
            this.disableFields();
        }
    };
    AddProjectComponent.prototype.disableFields = function () {
        this.addProjectForm.controls['startdate'].disable();
        this.addProjectForm.controls['enddate'].disable();
    };
    AddProjectComponent.prototype.enableFields = function () {
        this.addProjectForm.controls['startdate'].enable();
        this.addProjectForm.controls['enddate'].enable();
    };
    AddProjectComponent.prototype.onAreaUserControlChanged = function () {
        //console.log(JSON.stringify(event.parentid));
        console.log(JSON.stringify(this.userSelected));
        if (this.userSelected == null) {
            //this.taskuser = this.userSelected;
        }
        else {
            if (this.userSelected.project != null) {
                alert(this.userSelected.firstname + " Already Project Manager of " + this.userSelected.project.projectname);
            }
            else {
                this.taskuser = this.userSelected;
                this.projectManager = this.taskuser.firstname;
            }
        }
        console.log("projectManager" + this.projectManager);
        //this.parentTaskSelected = this.selectedProject;
        //this.task.project = this.projectSelected;
        // this.getProjects();
        // this.getUsers();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "ptask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "task", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "taskuser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "projectInp", void 0);
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [_parenttask_service__WEBPACK_IMPORTED_MODULE_3__["ParenttaskService"], _task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " p{\n    font-family: Lato;\n  }\n  /* The container */\n  /* .container {\n      display: block;\n      position: relative;\n      padding-left: 35px;\n      margin-bottom: 12px;\n      cursor: pointer;\n      font-size: 22px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n  } */\n  /* Hide the browser's default checkbox */\n  /* .container input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer;\n  } */\n  /* Create a custom checkbox */\n  /* .checkmark {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 25px;\n      width: 25px;\n      background-color: #eee;\n  } */\n  /* On mouse-over, add a grey background color */\n  /* .container:hover input ~ .checkmark {\n      background-color: #ccc;\n  } */\n  /* When the checkbox is checked, add a blue background */\n  /* .container input:checked ~ .checkmark {\n      background-color: #2196F3;\n  }\n   */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* .checkmark:after {\n      content: \"\";\n      position: absolute;\n      display: none;\n  }\n   */\n  /* Show the checkmark when checked */\n  /* .container input:checked ~ .checkmark:after {\n      display: block;\n  } */\n  /* Style the checkmark/indicator */\n  /* .container .checkmark:after {\n      left: 9px;\n      top: 5px;\n      width: 5px;\n      height: 10px;\n      border: solid white;\n      border-width: 0 3px 3px 0;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n  } */\n  /*Slider */\n  .slidecontainer {\n    width: 100%;\n  }\n  .slider {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 15px;\n    border-radius: 5px;\n    background: #d3d3d3;\n    outline: none;\n    opacity: 0.7;\n    transition: opacity .2s;\n  }\n  .slider:hover {\n    opacity: 1;\n  }\n  .slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: #4CAF50;\n    cursor: pointer;\n  }\n  .slider::-moz-range-thumb {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: #4CAF50;\n    cursor: pointer;\n  }\n  /* \n  body div.cdk-overlay-container {\n    z-index: 99999;\n  }\n  \n  /deep/ .cdk-overlay-pane {\n    z-index: 99999 !important;\n  }\n  \n  /deep/ .cdk-global-overlay-wrapper {\n    z-index: 1000 !important;\n  }\n  /deep/ .cdk-overlay-container {\n    z-index: 2000 !important;\n  }\n  \n  .mat-select-menu-container {\n    z-index: 99999 !important;\n  }\n  \n  .mat-dialog-container {\n    z-index: 99999;\n  }\n  \n  /deep/ .mat-select-panel {\n    z-index: 99999 !important;\n  }\n  \n  /deep/ .mat-primary {\n    z-index: 99999 !important;\n  } */\n  /* .cdk-global-overlay-wrapper {\n    z-index: 1000 !important;\n} */\n  /* .cdk-overlay-container {\n    z-index: 1000 !important;\n  }  */\n  /* .note-dialog .modal-dialog{ z-index:1050; } */\n  /* .modal-backdrop, .modal-backdrop.in{\n    z-index:1000;\n    }\n    \n    .modal {\n    z-index:1001;\n    } */"

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h4>Task Add</h4>\n  <div [formGroup]=\"addTaskForm\">\n    <div>\n      <div>\n\n        <label>Project:\n          <input [(ngModel)]=\"searchproject\" disabled formControlName=\"project\" />\n\n          <!-- Trigger the modal with a button -->\n          <button (click)=\"getProjects()\" type=\"button\" class=\"btn btn-info btn-md\" data-toggle=\"modal\" [disabled]=\"disableBtn\" data-target=\"#myProjectModal\">Search</button>\n          <!-- Project Modal -->\n\n        </label><br>\n      </div>\n      <div>\n        <label>Task Name:\n          <input [(ngModel)]=\"task.taskname\" placeholder=\"Task Name\" formControlName=\"taskname\" />\n        </label><br>\n      </div>\n      <div>\n        <div class=\"slidecontainer\">\n\n          <label>Task Priority: {{task.priority}}\n          </label><br>\n\n          <input [(ngModel)]=\"task.priority\" class=\"slider\" type=\"range\" min=\"1\" max=\"100\" value=\"0\" formControlName=\"taskpriority\"\n          />\n        </div>\n      </div>\n      <div>\n        <label>\n          <!-- <div class=\"column\"> -->\n          Parent Task:\n          <input [(ngModel)]=\"searchparent\" disabled formControlName=\"parenttask\" />\n          <button (click)=\"getParentTask()\" type=\"button\" class=\"btn btn-info btn-md\" data-toggle=\"modal\" [disabled]=\"disableBtn\" data-target=\"#myParentModal\">Search</button>\n\n          <!-- myParentModal Modal -->\n\n        </label><br>\n      </div>\n      <div>\n        <label class=\"container\">\n          <input type=\"checkbox\" [(ngModel)]=\"theCheckbox\" data-md-icheck (change)=\"toggleVisibility($event)\" formControlName=\"parenttaskcheck\"\n          /> Parent Task is\n\n          <span *ngIf=\"marked\">checked</span><span *ngIf=\"!marked\">unchecked</span>\n\n          <span class=\"checkmark\"></span>\n        </label>\n        <!-- <div>And <b>ngModel</b> also works, it's value is <b>{{theCheckbox}}</b></div> -->\n      </div>\n      <div>\n        <label>Start Date:\n          <input type=\"date\" [(ngModel)]=\"task.startdate\" placeholder=\"\" formControlName=\"startdate\" />\n        </label><br>\n      </div>\n      <div>\n        <label>End Date:\n          <input type=\"date\" [(ngModel)]=\"task.enddate\" placeholder=\"\" formControlName=\"enddate\" />\n        </label><br>\n      </div>\n      <div>\n        <label>\n          User :\n          <input [(ngModel)]=\"searchuser\" disabled formControlName=\"user\" />\n\n          <button (click)=\"getUsers()\" type=\"button\" class=\"btn btn-info btn-md\" data-toggle=\"modal\" data-target=\"#myUserModal\">Search</button>\n\n          <!-- myUserModal Modal -->\n\n        </label><br>\n      </div>\n    </div>\n    <!-- <button (click)=\"addData()\">Add Task</button> -->\n    <div class=\"container-fluid\">\n      <!-- <div class=\"span4 text-left\"><a href=\"#\" class=\"btn\">Btn1</a></div> -->\n      <div class=\"row m-0\">\n        <div class=\"col-lg-3 blue\"> </div>\n        <div class=\"col-lg-3 blue\">\n          <div class=\"row m-0\">\n            <div class=\"col-sm-6 blue\"> <button (click)=\"addData()\">{{buttonText}}</button> </div>\n            <div class=\"col-sm-6 blue\"> <button (click)=\"resetFields()\">Reset</button> </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 blue\"> </div>\n        <div class=\"col-lg-3 blue\"> </div>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Project Modal -->\n\n  <div class=\"modal fade\" id=\"myProjectModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Select Project</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\" styles=\"z-index:1040;\">\n          <select [(ngModel)]=\"projectSelected\" (ngModelChange)=\"onAreaProjectControlChanged()\">\n            <option *ngFor=\"let tta of projects\" [ngValue]=\"tta\">{{tta.projectname}}</option>\n          </select>\n          <p>You selected: {{projectSelected | json}}</p>\n        </div>\n        <div class=\"modal-footer\" styles=\"z-index:1030;\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- myParentModal Modal -->\n\n  <div class=\"modal fade\" id=\"myParentModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Select Parent Task</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\" styles=\"z-index:1040;\">\n\n          <select [(ngModel)]=\"parentTaskSelected\" (ngModelChange)=\"onAreaParentControlChanged()\">\n            <option *ngFor=\"let tta of parenttasks\" [ngValue]=\"tta\">{{tta.parenttask}}</option>\n          </select>\n\n\n          <p>You selected: {{parentTaskSelected | json}}</p>\n        </div>\n        <div class=\"modal-footer\" styles=\"z-index:1030;\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- myUserModal Modal -->\n\n\n  <div class=\"modal fade\" id=\"myUserModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Select User</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\" styles=\"z-index:1040;\">\n\n          <select [(ngModel)]=\"userSelected\" (ngModelChange)=\"onAreaUserControlChanged()\">\n            <option *ngFor=\"let tta of users\" [ngValue]=\"tta\">{{tta.firstname}}</option>\n          </select>\n\n\n          <p>You selected: {{userSelected | json}}</p>\n        </div>\n        <div class=\"modal-footer\" styles=\"z-index:1030;\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _parenttask_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parenttask.service */ "./src/app/parenttask.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(rest, rest1, rest2, rest3, route, router) {
        this.rest = rest;
        this.rest1 = rest1;
        this.rest2 = rest2;
        this.rest3 = rest3;
        this.route = route;
        this.router = router;
        this.disableBtn = false;
        this.buttonText = "Add Task";
        this.marked = false;
        this.searchproject = "";
        this.searchuser = "";
        this.searchparent = "";
        this.theCheckbox = false;
        this.parenttasks = [];
        this.projects = [];
        this.users = [];
        this.parentTaskSelected = { parentid: 0, parenttask: "" };
        this.projectSelected = { projectid: 0, projectname: "", startdate: "", enddate: "", priority: 0 };
        this.userSelected = { userid: 0, firstname: "", lastname: "", employeeid: 0, project: "", task: "" };
        this.taskSelected = { taskname: '', startdate: '', enddate: '', priority: 0, active: 1, parenttask: '', project: '' };
        this.addTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            parenttask: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            taskpriority: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            startdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            enddate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            parenttaskcheck: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            taskname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            parenttaskselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            projectselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            userselect: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.ptask = { parenttask: '' };
        this.task = { taskname: '', startdate: '', enddate: '', priority: 0, active: 1, parenttask: '', project: '' };
        this.taskuser = { userid: 0, firstname: '', lastname: '', employeeid: 0, task: '' };
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        this.edittaskid = this.route.snapshot.params['id'];
        if (this.edittaskid === undefined) {
            console.log("task ID:" + "Add Task");
        }
        else {
            console.log("Edit Task ID:" + this.edittaskid);
            this.buttonText = "Edit Task";
            this.disableBtn = true;
            this.getUserByTaskID(this.edittaskid);
            this.getTaskByID(this.edittaskid);
        }
    };
    AddTaskComponent.prototype.ngOnChanges = function () {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
    };
    AddTaskComponent.prototype.addData = function () {
        var _this = this;
        console.log("Task:" + JSON.stringify(this.task));
        console.log(this.marked);
        if (this.marked == true) {
            this.ptask.parenttask = this.task.taskname;
            this.rest.addData(this.ptask).subscribe(function (result) {
                alert(_this.ptask.parenttask + " Added as Parent Task");
                _this.resetFields();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.taskSelected = this.task;
            this.taskuser.task = this.taskSelected;
            if (this.task.active == 2) {
                alert(this.task.taskname + "is Completed Status");
                return;
            }
            if (this.taskuser.userid == 0 || this.task.taskname == null || this.task.project == "") {
                alert("Please Fill all fields");
                return;
            }
            console.log("Task User:" + JSON.stringify(this.taskuser));
            this.rest3.addData(this.taskuser).subscribe(function (result) {
                console.log("Task User:" + JSON.stringify(_this.taskuser));
                alert(_this.task.taskname + " Added as Task");
                _this.resetFields();
            }, function (err) {
                console.log(err);
            });
        }
    };
    AddTaskComponent.prototype.getParentTask = function () {
        var _this = this;
        this.parenttasks = [];
        this.rest.getAll().subscribe(function (data) {
            console.log(data);
            _this.parenttasks = data;
        });
    };
    AddTaskComponent.prototype.getTaskByID = function (id) {
        var _this = this;
        this.rest1.getById(id).subscribe(function (data) {
            console.log(data);
            _this.edittask = data;
            _this.task = _this.edittask;
            _this.task.project = _this.edittask.project;
            _this.searchproject = _this.edittask.project.projectname;
            _this.task.parenttask = _this.edittask.parenttask;
            _this.searchparent = _this.edittask.parenttask.parenttask;
        });
    };
    AddTaskComponent.prototype.getUserByTaskID = function (id) {
        var _this = this;
        this.rest3.getUserByTaskId(id).subscribe(function (data) {
            console.log(data);
            _this.edittaskuser = data;
            _this.taskuser = _this.edittaskuser;
            _this.searchuser = _this.edittaskuser.firstname;
        });
    };
    AddTaskComponent.prototype.getProjects = function () {
        var _this = this;
        this.projects = [];
        this.rest2.getAll().subscribe(function (data) {
            console.log(data);
            _this.projects = data;
            if (_this.projects.errorMessage != null) {
                alert(_this.projects.errorMessage);
                _this.projects = [];
            }
        });
    };
    AddTaskComponent.prototype.getUsers = function () {
        var _this = this;
        this.projects = [];
        this.rest3.getAll().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    AddTaskComponent.prototype.toggleVisibility = function (e) {
        this.marked = e.target.checked;
        console.log('toggle');
        if (this.marked == true) {
            console.log('disable');
            this.disableFields();
        }
        else {
            this.enableFields();
        }
    };
    AddTaskComponent.prototype.resetFields = function () {
        this.addTaskForm.reset();
        this.disableBtn = false;
        this.buttonText = "Add Task";
        this.task.priority = 0;
    };
    AddTaskComponent.prototype.disableFields = function () {
        this.addTaskForm.controls['startdate'].disable();
        this.addTaskForm.controls['enddate'].disable();
        this.addTaskForm.controls['taskpriority'].disable();
        this.addTaskForm.controls['parenttask'].disable();
    };
    AddTaskComponent.prototype.enableFields = function () {
        this.addTaskForm.controls['startdate'].enable();
        this.addTaskForm.controls['enddate'].enable();
        this.addTaskForm.controls['taskpriority'].enable();
        this.addTaskForm.controls['parenttask'].enable();
    };
    AddTaskComponent.prototype.onAreaParentControlChanged = function () {
        console.log(JSON.stringify(this.parentTaskSelected));
        this.task.parenttask = this.parentTaskSelected;
        this.searchparent = this.parentTaskSelected.parenttask;
        console.log("searchparent: " + this.searchparent);
    };
    AddTaskComponent.prototype.onAreaProjectControlChanged = function () {
        console.log(JSON.stringify(this.projectSelected));
        this.task.project = this.projectSelected;
        this.searchproject = this.projectSelected.projectname;
    };
    AddTaskComponent.prototype.onAreaUserControlChanged = function () {
        console.log(JSON.stringify(this.userSelected));
        if (this.userSelected == null) {
            //this.taskuser = this.userSelected;
        }
        else {
            if (this.userSelected.task != null) {
                alert(this.userSelected.firstname + " Already assigned to " + this.userSelected.task.taskname);
            }
            else {
                this.taskuser = this.userSelected;
                this.searchuser = this.userSelected.firstname;
            }
        }
    };
    AddTaskComponent.prototype.validateTask = function () {
    };
    AddTaskComponent.prototype.validateParentTask = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddTaskComponent.prototype, "ptask", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddTaskComponent.prototype, "task", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddTaskComponent.prototype, "taskuser", void 0);
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [_parenttask_service__WEBPACK_IMPORTED_MODULE_3__["ParenttaskService"], _task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"], _project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"popular-templates-section\">\n  <div class=\"container-fluid\">\n    <h4>Add User</h4>\n    <div [formGroup]=\"addUserForm\">\n      <div>\n\n        <div>\n          <label>First Name:\n            <input [(ngModel)]=\"taskuser.firstname\" placeholder=\"First Name\" formControlName=\"firstname\" />\n          </label><br>\n        </div>\n        <div>\n          <label>Last Name:\n            <input [(ngModel)]=\"taskuser.lastname\" placeholder=\"Last Name\" formControlName=\"lastname\" />\n          </label><br>\n        </div>\n        <div>\n          <label>Employee Id:\n            <input [(ngModel)]=\"taskuser.employeeid\" placeholder=\"id\" formControlName=\"employeeid\" />\n          </label><br>\n        </div>\n\n      </div>\n      <!-- <button (click)=\"addData()\">Add User</button>\n    <button (click)=\"addData()\">Reset</button> -->\n      <div class=\"container-fluid\">\n        <!-- <div class=\"span4 text-left\"><a href=\"#\" class=\"btn\">Btn1</a></div> -->\n        <div class=\"row m-0\">\n          <div class=\"col-lg-3 blue\"> </div>\n          <div class=\"col-lg-3 blue\">\n            <div class=\"row m-0\">\n              <div class=\"col-sm-6 blue\"> <button (click)=\"addData()\">{{buttonText}}</button> </div>\n              <div class=\"col-sm-6 blue\"> <button (click)=\"resetUser()\">Reset</button> </div>\n            </div>\n          </div>\n          <div class=\"col-lg-3 blue\"> </div>\n          <div class=\"col-lg-3 blue\"> </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</section>\n<hr size=\"10\">\n<section class=\"popular-templates-section\">\n  <div class=\"container-fluid\">\n    <div class=\"popular-templates-title\">\n    </div>\n    <div class=\"popular-templates\">\n      <div class=\"row m-0\">\n        <div class=\"col-3 blue\">\n          <div class=\"row m-0\">\n            <div class=\"col-9 blue\">\n              <input [(ngModel)]=\"userSearch\" placeholder=\"employeeid\" />\n            </div>\n            <div class=\"col-9 blue\">\n                <button (click)=\"getByEmployeeId()\">Search</button>\n              </div>\n          </div>\n        </div>\n        <div class=\"col-9 blue\">\n          <div class=\"row m-0\">\n            <div class=\"col-9 blue\">\n              <div class=\"row m-0\">\n                <div class=\"col-md-3 blue\">Sort:\n                </div>\n                <div class=\"col-md-3 blue\">\n                  <button (click)=\"getSortbyFirstName()\">First Name</button>\n                </div>\n                <div class=\"col-md-3 blue\">\n                  <button (click)=\"getSortbyLastName()\">Last Name</button>\n                </div>\n                <div class=\"col-md-3 blue\">\n                  <button (click)=\"getSortbyEmployeeId()\">ID </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 blue\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <hr size=\"10\">\n\n      <div *ngFor=\"let tta of users\">\n        <div class=\"row m-0\">\n          <div class=\"col-6 blue\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item\">First Name: {{tta.firstname}}</li>\n              <li class=\"list-group-item\">Last Name:{{tta.lastname}}</li>\n              <li class=\"list-group-item\">Employee ID:{{tta.employeeid}}</li>\n            </ul>\n          </div>\n          <div class=\"col-3 black\">\n            <div class=\"row\">\n              <div><button (click)=\"editUser(tta)\">Edit</button></div>\n            </div>\n            <div class=\"row\">\n              <br>\n            </div>\n            <div class=\"row\">\n              <div><button (click)=\"deleteUser(tta)\">Delete</button></div>\n            </div>\n          </div>\n          <div class=\"col-3 black\">\n            <!-- <div class=\"template-img\">\n            <img src=\"assets/images/template-thumb/template-1.jpg\" alt=\"\">\n          </div> -->\n          </div>\n        </div>\n        <hr size=\"10\">\n\n      </div>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(rest3) {
        this.rest3 = rest3;
        this.users = [];
        this.buttonText = "Add";
        this.addUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            employeeid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
        this.taskuser = { userid: 0, firstname: '', lastname: '', employeeid: null };
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AddUserComponent.prototype.addData = function () {
        var _this = this;
        console.log(this.taskuser);
        if (this.taskuser.employeeid == null || this.taskuser.firstname == "" || this.taskuser.lastname == "") {
            alert("Input Field should not be Blank");
            return;
        }
        this.rest3.addData(this.taskuser).subscribe(function (result) {
            _this.getUsers();
            _this.resetUser();
        }, function (err) {
            console.log(err);
        });
        this.buttonText = "Add";
    };
    AddUserComponent.prototype.getUsers = function () {
        var _this = this;
        this.users = [];
        this.rest3.getAll().subscribe(function (data) {
            console.log(data);
            _this.users = data;
            if (_this.users.errorMessage == "Empty users") {
                console.log("No User");
                _this.users = [];
            }
        });
    };
    AddUserComponent.prototype.getByEmployeeId = function () {
        var _this = this;
        console.log(isNaN(this.userSearch));
        if (this.userSearch == null || isNaN(this.userSearch)) {
            alert("Pleaes enter Employee ID");
            return;
        }
        this.rest3.getByEmployeeId(this.userSearch).subscribe(function (data) {
            console.log(data);
            _this.users = data;
            if (_this.users.errorMessage != null) {
                console.log("No User");
                alert(_this.users.errorMessage);
                _this.users = [];
            }
        });
    };
    AddUserComponent.prototype.editUser = function (edituser) {
        console.log(edituser);
        this.taskuser = edituser;
        this.buttonText = "Update";
    };
    AddUserComponent.prototype.deleteUser = function (edituser) {
        var _this = this;
        console.log(edituser);
        // this.taskuser = edituser;
        // this.buttonText = "Update";
        this.rest3.deleteData(edituser.userid).subscribe(function (result) {
            _this.getUsers();
        }, function (err) {
            console.log(err);
        });
        alert("User Deleted: " + edituser.firstname);
    };
    AddUserComponent.prototype.resetUser = function () {
        this.addUserForm.reset();
        this.getUsers();
    };
    AddUserComponent.prototype.getSortbyFirstName = function () {
        var _this = this;
        this.rest3.getSortbyFirstName().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    AddUserComponent.prototype.getSortbyLastName = function () {
        var _this = this;
        this.rest3.getSortbyLastName().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    AddUserComponent.prototype.getSortbyEmployeeId = function () {
        var _this = this;
        this.rest3.getSortbyEmployeeId().subscribe(function (data) {
            console.log(data);
            _this.users = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "taskuser", void 0);
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routepaths = [
    { path: '', component: _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__["AddProjectComponent"], data: { title: 'Add Project' } },
    { path: 'add-project', component: _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__["AddProjectComponent"], data: { title: 'Add Project' } },
    { path: 'add-task', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"], data: { title: 'Add Task' } },
    { path: 'edit-task/:id', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_5__["AddTaskComponent"], data: { title: 'Edit Task' } },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"], data: { title: 'Add User' } },
    { path: 'view-task', component: _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_7__["ViewTaskComponent"], data: { title: 'View Task' } }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routepaths),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#wrapper{\n    width: 100%;\n    margin: 0 auto;\n}\n#header{\n    width: 100%;\n    background-color: rgba(255, 145, 0, 0.507);\n    height: 125px;\n    text-align: center;\n}\n#content{\n    width: 100%;\n    background-color: rgba(243, 238, 234, 0.185);\n    height: 100%;\n    float: left;\n\n}\n#main-content{\n    width: 100%;\n    height: 100%;\n}\n#sidebar{\n    width: 25%;\n    background-color: rgb(90, 161, 161);\n    height: 100%;\n    float: left;\n\n}\n#footer{\n    width: Auto;\n    background-color: #ff8800da;\n    height: 100px;\n\n}\n/* .cdk-global-overlay-wrapper, .cdk-overlay-container {\n    z-index: 99999 !important;\n } */\n.navbg{\n    list-style: none;\n    background-color: rgb(228, 133, 25);\n    padding: 20px;\n    }\nli{\n    display: inline;\n    }\na{\n    -webkit-text-decoration: underline green;\n            text-decoration: underline green;\n    padding: 25px;\n    color: aliceblue;\n    font-size: 20px;\n    }\na:hover{\n    background-color: #8bada2;\n    }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <section class=\"popular-templates-section\">\n    <div class=\"container-fluid\">\n      <div class=\"popular-templates-title\">\n        <h4>Project Management</h4>\n      </div>\n      <div class=\"popular-templates\">\n        <div class=\"row m-0\">\n          <div class=\"col-10 blue\">\n            <!-- <div class=\"row m-0\">\n              <div class=\"col-md-3 blue\">\n                <a [routerLink]=\"['/add-project']\" routerLinkActive=\"router-link-active\">Add Project</a>\n              </div>\n              <div class=\"col-md-3 blue\">\n                <a [routerLink]=\"['/add-task']\">Add Task</a>\n              </div>\n              <div class=\"col-md-3 blue\">\n                <a [routerLink]=\"['/add-user']\">Add User</a>\n              </div>\n              <div class=\"col-md-3 blue\">\n                <a [routerLink]=\"['/view-task']\">View Task</a>\n              </div> -->\n              <div class=\"row m-0\">\n                  <ul class=\"navbg\">\n                    <a [routerLink]=\"['/add-project']\" routerLinkActive=\"router-link-active\">Add Project</a>\n                    <a [routerLink]=\"['/add-task']\">Add Task</a>\n                    <a [routerLink]=\"['/add-user']\">Add User</a>\n                    <a [routerLink]=\"['/view-task']\">View Task</a>\n                  </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n<div id=\"main-content\">\n  <div id=\"sidebar\">\n    <!-- <br>\n    <a [routerLink]=\"['/books']\" routerLinkActive=\"router-link-active\" >Books</a>\n    <br>\n    <a [routerLink]=\"['/book-add']\">Add Book</a>   -->\n    <!-- <br>\n    <a [routerLink]=\"['/add-project']\" routerLinkActive=\"router-link-active\" >Add Project</a>\n    <br>\n    <a [routerLink]=\"['/add-task']\">Add Task</a>  \n    <br>\n    <a [routerLink]=\"['/add-user']\">Add User</a>  \n    <br>\n    <a [routerLink]=\"['/view-task']\">View Task</a>   -->\n  </div>\n  <div id=\"content\">\n    <router-outlet></router-outlet>\n    <!-- <app-add-task></app-add-task> -->\n    <!-- <app-add-user></app-add-user> -->\n    <!-- <app-view-task></app-view-task> -->\n\n    <!-- <app-add-project></app-add-project> -->\n\n  </div>\n</div>\n<!-- <div id=\"footer\">Footer</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'IIHTAssignment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _datepicker_popup_datepicker_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datepicker-popup/datepicker-popup.component */ "./src/app/datepicker-popup/datepicker-popup.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__["AddUserComponent"],
                _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_12__["AddProjectComponent"],
                _datepicker_popup_datepicker_popup_component__WEBPACK_IMPORTED_MODULE_13__["DatepickerPopupComponent"],
                _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_15__["ViewTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datepicker-popup/datepicker-popup.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/datepicker-popup/datepicker-popup.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datepicker-popup/datepicker-popup.component.html":
/*!******************************************************************!*\
  !*** ./src/app/datepicker-popup/datepicker-popup.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" \n               name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (ngModelChange)=\"onAreaUserControlChanged()\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n        </div>\n      </div>\n    </div>\n  </form>\n  \n  <!-- <hr/>\n  <pre>Model: {{ model | json }}</pre> -->\n\n  "

/***/ }),

/***/ "./src/app/datepicker-popup/datepicker-popup.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/datepicker-popup/datepicker-popup.component.ts ***!
  \****************************************************************/
/*! exports provided: DatepickerPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerPopupComponent", function() { return DatepickerPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerPopupComponent = /** @class */ (function () {
    //dateModel: any = "2018-01-01"
    function DatepickerPopupComponent() {
        this.model = {
            "year": 2018,
            "month": 11,
            "day": 11
        };
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // ngOnChanges(changes: SimpleChanges){
    //   const model: SimpleChange = changes.model;
    //   console.log("date pick")
    //   console.log(model.previousValue);
    //   console.log(model.currentValue);
    //   this.model = model.currentValue;
    // }
    DatepickerPopupComponent.prototype.ngOnInit = function () {
        //this.model = "2018-01-02"
    };
    DatepickerPopupComponent.prototype.onAreaUserControlChanged = function () {
        console.log("Change");
        console.log(this.model);
        this.modelChange.emit(this.model);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatepickerPopupComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatepickerPopupComponent.prototype, "modelChange", void 0);
    DatepickerPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker-popup',
            template: __webpack_require__(/*! ./datepicker-popup.component.html */ "./src/app/datepicker-popup/datepicker-popup.component.html"),
            styles: [__webpack_require__(/*! ./datepicker-popup.component.css */ "./src/app/datepicker-popup/datepicker-popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerPopupComponent);
    return DatepickerPopupComponent;
}());



/***/ }),

/***/ "./src/app/parenttask.service.ts":
/*!***************************************!*\
  !*** ./src/app/parenttask.service.ts ***!
  \***************************************/
/*! exports provided: ParenttaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParenttaskService", function() { return ParenttaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'http://localhost:8090/projectmanagement/api/parenttask';
//const endpoint = 'https://jsonplaceholder.typicode.com/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ParenttaskService = /** @class */ (function () {
    function ParenttaskService(http) {
        this.http = http;
    }
    ParenttaskService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ParenttaskService.prototype.getAll = function () {
        return this.http.get(endpoint + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ParenttaskService.prototype.getById = function (id) {
        return this.http.get(endpoint + '/id/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ParenttaskService.prototype.addData = function (post) {
        console.log(post);
        return this.http.post(endpoint + '/', JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('added Data '); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addData')));
    };
    ParenttaskService.prototype.updateData = function (id, post) {
        console.log(post);
        return this.http.put(endpoint + '/id/' + id, JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('updated Dtaa id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateData')));
    };
    ParenttaskService.prototype.deleteData = function (id) {
        return this.http.delete(endpoint + '/id/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('deleted Post with id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePost')));
    };
    ParenttaskService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ParenttaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ParenttaskService);
    return ParenttaskService;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'http://localhost:8090/projectmanagement/api/project';
//const endpoint = 'https://jsonplaceholder.typicode.com/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ProjectService.prototype.getAll = function () {
        return this.http.get(endpoint + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.getAllProjectDetails = function () {
        return this.http.get(endpoint + '/getall/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.getSortbyStartDate = function () {
        return this.http.get(endpoint + '/sortbystartdate/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.getSortbyEndDate = function () {
        return this.http.get(endpoint + '/sortbyenddate/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.getSortbyPriority = function () {
        return this.http.get(endpoint + '/sortbypriority/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.getSortbyCompleted = function () {
        return this.http.get(endpoint + '/sortbycompleted/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(endpoint + '/id/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.getProjectByProjectName = function (id) {
        return this.http.get(endpoint + '/projectname/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    ProjectService.prototype.addData = function (post) {
        console.log(post);
        return this.http.post(endpoint + '/', JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('added Data '); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addData')));
    };
    ProjectService.prototype.updateData = function (id, post) {
        console.log(post);
        return this.http.put(endpoint + '/id/' + id, JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('updated Dtaa id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateData')));
    };
    ProjectService.prototype.deleteData = function (id) {
        return this.http.delete(endpoint + '/id/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('deleted Post with id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePost')));
    };
    ProjectService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'http://localhost:8090/projectmanagement/api/task';
//const endpoint = 'https://jsonplaceholder.typicode.com/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    TaskService.prototype.getAll = function () {
        return this.http.get(endpoint + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    TaskService.prototype.getById = function (id) {
        return this.http.get(endpoint + '/id/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    TaskService.prototype.getAllByProjectId = function (id) {
        return this.http.get(endpoint + '/project/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    TaskService.prototype.sortByStartdate = function (id) {
        return this.http.get(endpoint + '/sortbystartdate/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    TaskService.prototype.sortByEnddate = function (id) {
        return this.http.get(endpoint + '/sortbyenddate/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    TaskService.prototype.sortByPriority = function (id) {
        return this.http.get(endpoint + '/sortbypriority/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    TaskService.prototype.sortByCompleted = function (id) {
        return this.http.get(endpoint + '/sortbycompleted/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    TaskService.prototype.addData = function (post) {
        console.log(post);
        return this.http.post(endpoint + '/', JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('added Data '); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addData')));
    };
    TaskService.prototype.updateData = function (id, post) {
        console.log(post);
        return this.http.put(endpoint + '/id/' + id, JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('updated Data id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateData')));
    };
    TaskService.prototype.updateByProjectId = function (id) {
        return this.http.put(endpoint + '/project/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('updated Data id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateData')));
    };
    TaskService.prototype.deleteData = function (id) {
        return this.http.delete(endpoint + '/id/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('deleted Post with id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePost')));
    };
    TaskService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'http://localhost:8090/projectmanagement/api/user';
//const endpoint = 'https://jsonplaceholder.typicode.com/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    UserService.prototype.getAll = function () {
        return this.http.get(endpoint + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    UserService.prototype.getSortbyFirstName = function () {
        return this.http.get(endpoint + '/sortbyfirstname/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    UserService.prototype.getSortbyLastName = function () {
        return this.http.get(endpoint + '/sortbylastname/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    UserService.prototype.getSortbyEmployeeId = function () {
        return this.http.get(endpoint + '/sortbyemployeeid/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(endpoint + '/id/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    UserService.prototype.getByEmployeeId = function (id) {
        return this.http.get(endpoint + '/employeeid/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    UserService.prototype.getUserByTaskId = function (id) {
        return this.http.get(endpoint + '/task/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    UserService.prototype.addData = function (post) {
        console.log(post);
        return this.http.post(endpoint + '/', JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('added Data '); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addData')));
    };
    UserService.prototype.updateData = function (id, post) {
        console.log(post);
        return this.http.put(endpoint + '/id/' + id, JSON.stringify(post), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('updated Data id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateData')));
    };
    UserService.prototype.updateUserByTaskProject = function (id) {
        return this.http.put(endpoint + '/project/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('updated Data id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateData')));
    };
    UserService.prototype.deleteData = function (id) {
        return this.http.delete(endpoint + '/id/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (post) { return console.log('deleted User with id=' + { id: id }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteUser')));
    };
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-task/view-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-task/view-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-task/view-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<section class=\"popular-templates-section\">\n  <div class=\"container-fluid\">\n    <div class=\"popular-templates-title\">\n    </div>\n    <div class=\"popular-templates\">\n      <div class=\"row m-0\">\n        <div class=\"col-4 blue\">\n          <div class=\"row m-0\">\n            <div class=\"col-md-3 blue\">Project:\n            </div>\n            <div class=\"col-md-6 blue\">\n              <input [(ngModel)]=\"projectSearch\" placeholder=\"Search\" />\n            </div>\n            <div class=\"col-md-3 blue\">\n              <div><button (click)=\"getProjectByName()\">Search</button></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-8 blue\">\n          <div class=\"row m-0\">\n            <div class=\"col-10 blue\">\n              <div class=\"row m-0\">\n                <div class=\"col-md-3 blue\">Sort Task By:\n                </div>\n                <div class=\"col-md-9 blue\">\n                  <div class=\"row m-0\">\n\n                    <div class=\"col-md-3 blue\">\n                      <button (click)=\"getSortbyStartDate()\">Start Date</button>\n                    </div>\n                    <div class=\"col-md-3 blue\">\n                      <button (click)=\"getSortbyEndDate()\">End Date</button>\n                    </div>\n                    <div class=\"col-md-3 blue\">\n                      <button (click)=\"getSortbyPriority()\">Priority</button>\n                    </div>\n                    <div class=\"col-md-3 blue\">\n                      <button (click)=\"getSortbyCompleted()\">Completed</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-2 blue\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <hr size=\"10\">\n\n      <!-- loop start -->\n      <div *ngFor=\"let task of tasks\">\n        <div class=\"row m-0\">\n          <div class=\"col-4 blue\">\n            <div class=\"row m-0\">\n              <div class=\"col-6 blue\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Task</li>\n                  <li class=\"list-group-item\">{{task.taskname}}</li>\n                </ul>\n              </div>\n              <div class=\"col-6 blue\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Parent</li>\n                  <li class=\"list-group-item\">{{task.parenttask.parenttask}}</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-5 black\">\n            <div class=\"row m-0\">\n              <div class=\"col-3 blue\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">Priority</li>\n                  <li class=\"list-group-item\">{{task.priority}}</li>\n                </ul>\n              </div>\n              <div class=\"col-9 blue\">\n\n                <div class=\"row m-0\">\n                  <div class=\"col-6 blue\">\n                    <ul class=\"list-group\">\n                      <li class=\"list-group-item\">Start</li>\n                      <li class=\"list-group-item\">{{task.startdate}}</li>\n                    </ul>\n                  </div>\n                  <div class=\"col-6 blue\">\n                    <ul class=\"list-group\">\n                      <li class=\"list-group-item\">End</li>\n                      <li class=\"list-group-item\">{{task.enddate}}</li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-3 black\">\n            <div class=\"row m-0\">\n              <div class=\"col-2 blue\">\n                <div><button  routerLink=\"/edit-task/{{task.taskid}}\">Edit</button></div>\n              </div>\n              <div class=\"col-6 blue\">\n                <div><button (click)=\"endTask(task)\">End Task</button></div>\n              </div>\n              <div class=\"col-4 blue\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr size=\"10\">\n\n      </div>\n      <!-- loop end -->\n\n\n    </div>\n  </div>\n\n</section>\n\n<hr>\n\n<!-- <app-datepicker-popup [(model)]=\"modeldate\"></app-datepicker-popup> -->\n<!-- <pre>Model: {{ modeldate | json }}</pre>\n  <pre>Model: {{ model| date:'yyyy-MM-dd' }}</pre> -->"

/***/ }),

/***/ "./src/app/view-task/view-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-task/view-task.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(rest, rest1, route, router, datePipe) {
        this.rest = rest;
        this.rest1 = rest1;
        this.route = route;
        this.router = router;
        this.datePipe = datePipe;
        this.tasks = [];
        this.tasksearch = "";
        this.projectSearch = "";
        this.projectInp = { projectid: 0, projectname: '', startdate: '', enddate: '', priority: 0 };
        this.task = { taskname: '', startdate: '', enddate: '', priority: 0, active: 1, parenttask: '', project: '' };
        this.taskInp = { taskname: '', startdate: '', enddate: '', priority: 0, active: 1, parenttask: '', project: '' };
    }
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
    };
    ViewTaskComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.tasks = [];
        this.rest.getAll().subscribe(function (data) {
            console.log(data);
            _this.tasksearch = data;
            if (_this.tasksearch.errorMessage != null) {
                alert(JSON.stringify(_this.tasksearch.errorMessage));
            }
            else {
                _this.tasks = data;
            }
        });
    };
    ViewTaskComponent.prototype.getProjectByName = function () {
        var _this = this;
        if (this.projectSearch == "") {
            alert("Please enter Project Name");
            return;
        }
        this.rest1.getProjectByProjectName(this.projectSearch).subscribe(function (data) {
            console.log(data);
            _this.project = data;
            if (_this.project.errorMessage != null) {
                alert(JSON.stringify(_this.project.errorMessage));
            }
            else {
                _this.projectInp = _this.project;
                _this.getTasksByproject(_this.projectInp.projectid);
            }
        });
    };
    ViewTaskComponent.prototype.getTasksByproject = function (id) {
        var _this = this;
        this.tasks = [];
        this.rest.getAllByProjectId(id).subscribe(function (data) {
            _this.tasksearch = data;
            if (_this.tasksearch.errorMessage != null) {
                alert(JSON.stringify(_this.tasksearch.errorMessage));
            }
            else {
                _this.tasks = data;
            }
        });
    };
    ViewTaskComponent.prototype.getSortbyStartDate = function () {
        var _this = this;
        if (this.projectSearch == "") {
            alert("Please enter Project Name");
            return;
        }
        this.rest1.getProjectByProjectName(this.projectSearch).subscribe(function (data) {
            console.log(data);
            _this.project = data;
            if (_this.project.errorMessage != null) {
                alert(JSON.stringify(_this.project.errorMessage));
            }
            else {
                _this.projectInp = _this.project;
                _this.tasks = [];
                _this.rest.sortByStartdate(_this.projectInp.projectid).subscribe(function (data) {
                    _this.tasksearch = data;
                    if (_this.tasksearch.errorMessage != null) {
                        alert(JSON.stringify(_this.tasksearch.errorMessage));
                    }
                    else {
                        _this.tasks = data;
                    }
                });
            }
        });
    };
    ViewTaskComponent.prototype.getSortbyEndDate = function () {
        var _this = this;
        if (this.projectSearch == "") {
            alert("Please enter Project Name");
            return;
        }
        this.rest1.getProjectByProjectName(this.projectSearch).subscribe(function (data) {
            console.log(data);
            _this.project = data;
            if (_this.project.errorMessage != null) {
                alert(JSON.stringify(_this.project.errorMessage));
            }
            else {
                _this.projectInp = _this.project;
                _this.tasks = [];
                _this.rest.sortByEnddate(_this.projectInp.projectid).subscribe(function (data) {
                    _this.tasksearch = data;
                    if (_this.tasksearch.errorMessage != null) {
                        alert(JSON.stringify(_this.tasksearch.errorMessage));
                    }
                    else {
                        _this.tasks = data;
                    }
                });
            }
        });
    };
    ViewTaskComponent.prototype.getSortbyPriority = function () {
        var _this = this;
        if (this.projectSearch == "") {
            alert("Please enter Project Name");
            return;
        }
        this.rest1.getProjectByProjectName(this.projectSearch).subscribe(function (data) {
            console.log(data);
            _this.project = data;
            if (_this.project.errorMessage != null) {
                alert(JSON.stringify(_this.project.errorMessage));
            }
            else {
                _this.projectInp = _this.project;
                _this.tasks = [];
                _this.rest.sortByPriority(_this.projectInp.projectid).subscribe(function (data) {
                    _this.tasksearch = data;
                    if (_this.tasksearch.errorMessage != null) {
                        alert(JSON.stringify(_this.tasksearch.errorMessage));
                    }
                    else {
                        _this.tasks = data;
                    }
                });
            }
        });
    };
    ViewTaskComponent.prototype.getSortbyCompleted = function () {
        var _this = this;
        if (this.projectSearch == "") {
            alert("Please enter Project Name");
            return;
        }
        this.rest1.getProjectByProjectName(this.projectSearch).subscribe(function (data) {
            console.log(data);
            _this.project = data;
            if (_this.project.errorMessage != null) {
                alert(JSON.stringify(_this.project.errorMessage));
            }
            else {
                _this.projectInp = _this.project;
                _this.tasks = [];
                _this.rest.sortByCompleted(_this.projectInp.projectid).subscribe(function (data) {
                    _this.tasksearch = data;
                    if (_this.tasksearch.errorMessage != null) {
                        alert(JSON.stringify(_this.tasksearch.errorMessage));
                    }
                    else {
                        _this.tasks = data;
                    }
                });
            }
        });
    };
    ViewTaskComponent.prototype.endTask = function (task) {
        var _this = this;
        this.task = task;
        this.task.active = 2;
        this.rest.addData(this.task).subscribe(function (result) {
            alert(_this.task.taskname + " Compeleted");
            _this.getAllTasks();
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ViewTaskComponent.prototype, "taskInp", void 0);
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/view-task/view-task.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sudipjana/IIHT/JAVA/ProjectManagementApp/ProjectManagementAngularApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map