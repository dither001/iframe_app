(function() {

  return ZendeskApps.defineApp(ZendeskApps.Site.NAV_BAR, {
    appID: '/apps/01-nav_bar/versions/1.0.0',
    eventuallyEvents: {
      'click a': '',
      'keyup(ESCAPE) @form': 'formCancelled'
    },
    defaultSheet: 'inactive',

    events: {
      'mouseover %inactive': '%hover',
      'mouseout  %hover':    '%inactive',
      paneswitch: function(event, newPane) {
        if (newPane !== this.settings.name) {
          this.showSheet('inactive');
        } else {
          this.showSheet('selected');
        }
      },
      click: function() {
        this.host.goToPath('apps/%@'.fmt(this.settings.name));
        this.showSheet('selected');
      }
    },

    launch: function(host, settings) {

      var context = _.extend({}, settings, {
        template: this.template('iframe'),
        classNames: 'custom'
      });

      var paneContext = _.extend({}, context);

      host.addPane(paneContext);
    }
  });

}());
