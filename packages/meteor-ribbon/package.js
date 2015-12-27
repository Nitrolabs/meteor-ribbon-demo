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

  // Compiled css
  api.addFiles('nitro-ribbon/build/css/metro-icons.css','client');
  api.addFiles('nitro-ribbon/build/css/metro.css','client');

  // Compiled js
  api.addFiles('nitro-ribbon/build/js/metro.js','client');



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
