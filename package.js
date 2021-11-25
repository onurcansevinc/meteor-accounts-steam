Package.describe({
  name: '1life1chance:accounts-steam',
  version: '2.5.1',
  summary: 'Steam OpenID integration for Meteor Accounts',
  git: 'https://github.com/onurcansevinc/meteor-accounts-steam',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.5.1');

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);

  api.use('accounts-oauth', ['client', 'server']);
  api.use('1life1chance:steam@2.5.1', ['client', 'server']);

  api.addFiles(['steam_login_button.css'], 'client');
  api.addFiles('steam_common.js', ['client', 'server']);
  api.addFiles('steam_server.js', 'server');
  api.addFiles('steam_client.js', 'client');
});
