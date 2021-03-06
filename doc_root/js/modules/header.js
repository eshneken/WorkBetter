/**
 * Header module
 */
define(['knockout', 'ojs/ojcore', 'ojs/ojknockout', 'ojs/ojnavigationlist', 'ojs/ojoffcanvas', 'ojs/ojdatacollection-common', 'ojs/ojdialog'
], function (ko, oj) {
    /**
     * The view model for the header module
     */

    function HeaderViewModel() {
        var self = this;

        //
        // Button used for toggling off screen data.
        //
        var offScreenDataButton = {
            "label": "offscreen-toggle",
            "iconClass": "oj-fwk-icon oj-fwk-icon-hamburger",
            "url": "#"
        };

        //
        // Dropdown menu states
        //

        self.menuItemSelect = function (event, ui) {
            switch (ui.item.attr("id")) {
                case "About":
                    $("#aboutDialog").ojDialog("open");
                    break;
                case "Toggle Theme":
                    self.toggleTheme();
                    break;
                default:
            }
        };

        // Data for application name
        var appName = {
            "id": "qs",
            "name": "JET Work Better!"
        };

        //
        // Toolbar buttons
        //
        var toolbarData = {
            // user name in toolbar
            "userName": "steven.king@myorg.com",
            "toolbar_buttons": [
                {
                    "label": "toolbar_search_button",
                    "iconClass": "oj-fwk-icon-magnifier oj-fwk-icon",
                    "url": "#"
                }
            ],
            // Data for global nav dropdown menu embedded in toolbar.
            "global_nav_dropdown_items": [
                {"label": "Preferences",
                    "url": "#"
                },
                {"label": "Help",
                    "url": "#"
                },
                {"label": "Sign Out",
                    "url": "#"
                },
                {"label": "Toggle Theme",
                    "url": "#"
                },
                {"label": "About",
                    "url": "#"
                }
            ]
        };

        self.offScreenButtonIconClass = offScreenDataButton.iconClass;
        self.offScreenButtonLabel = offScreenDataButton.label;

        self.appId = appName.id;
        self.appName = appName.name;

        self.userName = ko.observable(toolbarData.userName);
        self.toolbarButtons = toolbarData.toolbar_buttons;
        self.globalNavItems = toolbarData.global_nav_dropdown_items;

        self.appDrawer =
                {
                    "edge": "start",
                    "displayMode": "push",
                    "selector": "#appDrawer",
                    "selection": "selectedItem"
                };

        //
        // Data for application navigation
        //
        var router = oj.Router.rootInstance;
        var appNavData = [
            {
                name: router.states[0].label,
                id: router.states[0].id,
                disabled: 'false',
                iconClass: 'demo-navi-dashboard-icon oj-navigationlist-item-icon'
            },
            {
                name: router.states[1].label,
                id: router.states[1].id,
                disabled: 'false',
                iconClass: 'demo-navi-person-icon oj-navigationlist-item-icon'
            },
            {
                name: router.states[2].label,
                id: router.states[2].id,
                disabled: 'true',
                iconClass: 'oj-disabled demo-navi-people-icon oj-navigationlist-item-icon'
            }];

        self.dataSource = new oj.ArrayTableDataSource(appNavData, {idAttribute: 'id'});
        //self.selectedItem = ko.observable("dashboard");

        self.toggleTheme = function () {
            var altaTheme = "css/libs/oj/v1.1.2/alta/oj-alta-min.css";
            var projectorTheme = "css/samples/demothemes/alta/projector/demo-projector-alta-min.css";
            var csslink = document.getElementById("css");
            if (altaTheme !== csslink.attributes.href.value)
            {
                sessionStorage.setItem("theme",altaTheme);
            } else {
                sessionStorage.setItem("theme",projectorTheme);
            }
            location.reload(); 
        };

        self.toggleAppDrawer = function ()
        {
            return oj.OffcanvasUtils.toggle(self.appDrawer);
        };

        //
        // Close off-screen content once window becomes larger.
        //
        var query = window.matchMedia("(min-width: 39.375rem)");
        var mqListener = function (event)
        {
            oj.OffcanvasUtils.close(self.appDrawer);
        };
        query.addListener(mqListener);

    }
    return HeaderViewModel;
});
