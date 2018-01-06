/**
 * Created by dell on 2017/6/12.
 */
Package.describe({
	name: 'steedos:autoform',
	version: '0.0.9',
	summary: 'Steedos libraries',
	git: 'https://github.com/steedos/apps/tree/master/packages/steedos-autoform',
	documentation: null
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.3');

	api.use('session');
	api.use('coffeescript');
	api.use('blaze-html-templates');
	api.use('underscore');
	api.use('reactive-var');
	api.use('tracker');

	api.use('random');
	api.use('ddp');
	api.use('check');
	api.use('ddp-rate-limiter');

	api.use('matb33:collection-hooks@0.8.4');
	api.use('flemay:less-autoprefixer@1.2.0');
	api.use('kadira:flow-router@2.10.1');
	api.use('meteorhacks:subs-manager@1.6.4');

	api.use('momentjs:moment@2.14.1');

	api.use('tap:i18n@1.7.0');
	api.use('aldeed:simple-schema@1.5.3');
	api.use('aldeed:tabular@1.6.1');
	api.use('aldeed:autoform@5.8.0');
	api.use('momentjs:moment@2.14.1');
	api.use('simple:json-routes@2.1.0');

	api.use('steedos:jstree@3.3.2')
	api.use('steedos:base@0.0.66');
	api.use('rubaxa:sortable@1.3.0');
	api.use('tap:i18n', ['client', 'server']);
	tapi18nFiles = ['i18n/en.i18n.json', 'i18n/zh-CN.i18n.json']
	api.addFiles(tapi18nFiles, ['client', 'server']);


	api.addFiles('client/core.coffee');

	api.addFiles('client/coreform/inputTypes/coreform-org-localdata/select-orgs.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-org-localdata/select-orgs.js', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-org/lib/cf_organization.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-org/lib/cf_organization.coffee', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-org/lib/cf_organization_modal.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-org/lib/cf_organization_modal.coffee', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-org/lib/cf_organization_modal.less', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-org/select-orgs.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-org/select-orgs.js', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-user-localdata/select-users.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user-localdata/select-users.js', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_data_manager.js', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_tabular_space_user.coffee');

	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_contact_modal.less', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_contact_modal.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_contact_modal.coffee', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_organization_list.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_organization_list.coffee', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_space_user_list.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_space_user_list.coffee', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_organization_modal.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/lib/cf_organization_modal.coffee', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-user/select-users.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-user/select-users.js', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-email/email.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-email/email.js', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-url/url.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-url/url.js', 'client');

	api.addFiles('client/coreform/inputTypes/coreform-typeahead/typeahead.js/bloodhound.js', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-typeahead/typeahead.js/typeahead.bundle.js', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-typeahead/typeahead.js/typeahead.jquery.js', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-typeahead/af-typeahead.less', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-typeahead/af-typeahead.html', 'client');
	api.addFiles('client/coreform/inputTypes/coreform-typeahead/af-typeahead.coffee', 'client');

	api.addFiles('routes/formula_space_users.coffee', 'server');
	api.addFiles('routes/formula_organizations.coffee', 'server');

	api.export('CFDataManager');
});

Package.onTest(function(api) {

});

