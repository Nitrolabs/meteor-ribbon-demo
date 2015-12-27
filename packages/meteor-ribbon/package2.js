Package.describe({
  name: 'nitrolabs:ribbon',
  version: '0.0.1',
  summary: 'nitro-ribbon packaged for Meteor',
  git: '',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('jquery');
  api.use('less');
  api.addFiles('main.less')

  api.addFiles('nitro-ribbon/less/variables.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/fluent-menu.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/nitro-ribbon.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/utils.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/transform.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/colors.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/sidebar.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/typography.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/menu.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/flex.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/scheme-builder.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/animations.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/dropdown.less','client',{isImport: true});

  // icons
  api.addFiles('nitro-ribbon/less/metro-icons.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/metro-icons-mixins.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/metro-icons-animation.less','client',{isImport: true});
  api.addFiles('nitro-ribbon/less/metro-icons-content.less','client',{isImport: true});

  // Vendor files
  api.addFiles('nitro-ribbon/js/vendor/handlebars.min.js','client')

  // library js files
  api.addFiles('nitro-ribbon/js/lib/global.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/lib/initiator.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/lib/widget.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/lib/ribbon.js','client',{isImport: true});


  api.addFiles('nitro-ribbon/js/utils/easing.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/utils/hotkeys.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/utils/mousewheel.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/utils/pre-code.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/utils/touch-handler.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/widgets/fluentmenu.js','client',{isImport: true});
  api.addFiles('nitro-ribbon/js/widgets/dropdown.js','client',{isImport: true});

  // JSON templates
  api.addFiles('nitro-ribbon/js/templates/ribbon.js','client',{isImport: true});

  // Static assets
  api.addAssets('nitro-ribbon/img/notebook-save.png','client');
  api.addAssets('nitro-ribbon/img/folder-rename.png','client');
  api.addAssets('nitro-ribbon/img/calendar-next.png','client');

  api.addAssets('nitro-ribbon/fonts/metro.eot','client');
  api.addAssets('nitro-ribbon/fonts/metro.woff','client');
  api.addAssets('nitro-ribbon/fonts/metro.ttf','client');
  api.addAssets('nitro-ribbon/fonts/metro.svg','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nitrolabs:meteor-ribbon');
});
