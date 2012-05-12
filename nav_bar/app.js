(function() {

  return ZendeskApps.defineApp(ZendeskApps.Site.NAV_BAR, {
    appID: '/apps/01-nav_bar/versions/1.0.0',
    eventuallyEvents: {
      'click a': '',
      'keyup(ESCAPE) @form': 'formCancelled'
    },
    defaultState: 'inactive',

    events: {
      'mouseover %inactive': '%hover',
      'mouseout  %hover':    '%inactive',
      paneswitch: function(event, newPane) {
        if (newPane !== this.settings.name) {
          this.switchTo('inactive');
        } else {
          this.switchTo('selected');
        }
      },
      click: function() {
        this.host.goToPath(helpers.fmt('apps/%@', this.settings.name));
        this.switchTo('selected');
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
