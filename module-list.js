(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
        "appointment-data": { url: "$H/m/appointment-data.html", Table: "demo-wapp-appointment", form_module: "appointment-form" },
        "appointment-form": { url: "$H/m/appointment-form.html", Table: "demo-wapp-appointment",lookup:"demo-wapp-local-physician",lookup2:"demo-wapp-appointment-type" },
        "calendar-appointment-week": { url: "$H/m/calendar-appointment-week.html", Table: "demo-wapp-appointment" },
        "calendar-appointment-month": { url: "$H/m/calendar-appointment-month.html", Table: "demo-wapp-appointment" },
        "calendar-appointment-day": { url: "$H/m/calendar-appointment-day.html", Table: "demo-wapp-appointment" },
        "physician-data": { url: "$H/m/physician-data.html", Table: "demo-wapp-local-physician", form_module: "physician-form" },
        "physician-form": { url: "$H/m/physician-form.html", Table: "demo-wapp-local-physician" },
        "appointment-type-data": { url: "$H/m/appointment-type-data.html", Table: "demo-wapp-appointment-type", form_module: "appointment-type-form" },
        "appointment-type-form": { url: "$H/m/appointment-type-form.html", Table: "demo-wapp-appointment-type", lookup:"demo-wapp-questionnaire" },
        "questionnaire-data": { url: "$H/m/questionnaire-data.html", Table: "demo-wapp-questionnaire", form_module: "questionnaire-form" },
        "questionnaire-form": { url: "$H/m/questionnaire-form.html", Table: "demo-wapp-questionnaire" },
    }
    for (p in modules) {
        $vm.module_list[p] = modules[p];
        $vm.module_list[p].url = $vm.module_list[p].url.replace('$H', $vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
