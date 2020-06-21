(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
        "appointment-data": { url: "$H/m/appointment-data.html", Table: "demo-wapp-appointment", form_module: "appointment-form" },
        "appointment-form": { url: "$H/m/appointment-form.html", Table: "demo-wapp-appointment" },
        "calendar-appointment-week": { url: "$H/m/calendar-appointment-week.html", Table: "demo-wapp-appointment" },
        "calendar-appointment-month": { url: "$H/m/calendar-appointment-month.html", Table: "demo-wapp-appointment" },
        "calendar-appointment-day": { url: "$H/m/calendar-appointment-day.html", Table: "demo-wapp-appointment" },
        "physician-data": { url: "$H/m/physician-data.html", Table: "demo-wapp-physician", form_module: "physician-form" },
        "physician-form": { url: "$H/m/physician-form.html", Table: "demo-wapp-physician" },
        "appointment-type-data": { url: "$H/m/appointment-type-data.html", Table: "demo-wapp-appointment-type", form_module: "appointment-type-form" },
        "appointment-type-form": { url: "$H/m/appointment-type-form.html", Table: "demo-wapp-appointment-type" },
    }
    for (p in modules) {
        $vm.module_list[p] = modules[p];
        $vm.module_list[p].url = $vm.module_list[p].url.replace('$H', $vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
