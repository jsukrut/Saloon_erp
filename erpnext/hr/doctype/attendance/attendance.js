// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

cur_frm.add_fetch('employee', 'company', 'company');
cur_frm.add_fetch('employee', 'employee_name', 'employee_name');

cur_frm.cscript.onload = function(doc, cdt, cdn) {
	if(doc.__islocal) cur_frm.set_value("att_date", get_today());
}

cur_frm.cscript.refresh = function(doc, cdt, cdn) {
	// refresh_fields("")
	cur_frm.refresh_fields();
}

cur_frm.fields_dict.employee.get_query = function(doc,cdt,cdn) {
	return{
		query: "erpnext.controllers.queries.employee_query"
	}	
}

cur_frm.cscript.status = function(doc, cdn, cdn) {
	cur_frm.set_value("time_in", ('00:00:00'));
	cur_frm.set_value("time_out", ('00:00:00'));
}