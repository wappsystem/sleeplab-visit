(function () {
    //-------------------------------------------------------------------------------------
    var modules = {
        "appointment-data": { url: "$H/m/appointment-data.html", Table: "demo-wapp-appointment", form_module: "appointment-form", participant_id:{field1:"Date",field2:"Email"} },
        "appointment-form": { url: "$H/m/appointment-form.html", Table: "demo-wapp-appointment",lookup:"demo-wapp-local-physician",lookup2:"demo-wapp-appointment-type" },
        "calendar-appointment-week": { url: "$H/m/calendar-appointment-week.html", Table: "demo-wapp-appointment","appointment":"appointment-form"},
        "calendar-appointment-month": { url: "$H/m/calendar-appointment-month.html", Table: "demo-wapp-appointment","appointment":"appointment-form"},
        "calendar-appointment-day": { url: "$H/m/calendar-appointment-day.html", Table: "demo-wapp-appointment","appointment":"appointment-form" },
        "physician-data": { url: "$H/m/physician-data.html", Table: "demo-wapp-local-physician", form_module: "physician-form" },
        "physician-form": { url: "$H/m/physician-form.html", Table: "demo-wapp-local-physician" },
        "appointment-type-data": { url: "$H/m/appointment-type-data.html", Table: "demo-wapp-appointment-type", form_module: "appointment-type-form" },
        "appointment-type-form": { url: "$H/m/appointment-type-form.html", Table: "demo-wapp-appointment-type", lookup:"demo-wapp-questionnaire" },
        "questionnaire-data": { url: "$H/m/questionnaire-data.html", Table: "demo-wapp-questionnaire", form_module: "questionnaire-form" },
        "questionnaire-form": { url: "$H/m/questionnaire-form.html", Table: "demo-wapp-questionnaire" },
        "ess-data": { url: "$H/m/library/ess-data.html", Table: "demo-wapp-ess", form_module: "ess-form", task_name:"ESS" },
        "ess-form": { url: "$H/m/library/ess-form.html", Table: "demo-wapp-ess", task_name:"ESS" },
        "psqi-data": { url: "$H/m/library/psqi-data.html", Table: "demo-wapp-psqi", form_module: "psqi-form", task_name:"PSQI" },
        "psqi-form": { url: "$H/m/library/psqi-form.html", Table: "demo-wapp-psqi", task_name:"PSQI" },
        "dass-data": { url: "$H/m/library/dass-data.html", Table: "demo-wapp-dass", form_module: "dass-form", task_name:"DASS" },
        "dass-form": { url: "$H/m/library/dass-form.html", Table: "demo-wapp-dass", task_name:"DASS" },
        "hads-data": { url: "$H/m/library/hads-data.html", Table: "demo-wapp-hads", form_module: "hads-form", task_name:"HADS" },
        "hads-form": { url: "$H/m/library/hads-form.html", Table: "demo-wapp-hads", task_name:"HADS" },
        "contact-details-data": { url: "$H/m/library/contact-details-data.html", Table: "demo-wapp-contact-details", form_module: "contact-details-form", task_name:"Contact Details" },
        "contact-details-form": { url: "$H/m/library/contact-details-form.html", Table: "demo-wapp-contact-details", task_name:"Contact Details" },
        "medicare-referrals-data": { url: "$H/m/library/medicare-referrals-data.html", Table: "demo-wapp-medicare-referrals", form_module: "medicare-referrals-form", task_name:"Medicare and Referrals" },
        "medicare-referrals-form": { url: "$H/m/library/medicare-referrals-form.html", Table: "demo-wapp-medicare-referrals", task_name:"Medicare and Referrals" },
        "send-email":   {url:"$H/m/send-email-form.html",   Table:"demo-wapp-appointment", task_name:"Send Email"},
        "online-questionnaire": {url:"$H/online-questionnaire/index.html"},
        "q-panel": {url:"$H/m/q-panel.html"},
        "summary-print": { url: "$H/m/summary-print.html", Table: "demo-wapp-appointment" },
    }
    for (p in modules) {
        $vm.module_list[p] = modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url = $vm.module_list[p].url.replace('$H', $vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
