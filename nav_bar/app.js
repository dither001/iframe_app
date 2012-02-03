(function() {

  Zendesk.Apps.NavBarApp = Zendesk.Apps.App.extend({
    location: Zendesk.Apps.Site.NAV_BAR,
    appID: '/apps/01-nav_bar/versions/1.0.0',
    eventuallyEvents: {
      'click a': '',
      'keyup(ESCAPE) @form': 'formCancelled'
    },
    defaultSheet: 'inactive',

    templates: {
      main: '<img src="{{hoverIconURL}}" title="{{label}}" data-sheet-name="hover" />' +
            '<img src="{{inactiveIconURL}}" title="{{label}}" data-sheet-name="inactive" />' +
            '<img src="{{selectedIconURL}}" title="{{label}}" data-sheet-name="selected" />',
      iframe: '<header><h1>{{name}}</h1></header><iframe src="{{iframeURL}}" class="pane"/>'
    },

    events: {
      'mouseover %inactive': '%hover',
      'mouseout  %hover':    '%inactive',
      paneswitch: function(event, newPane) {
        if (newPane !== this.config.name) {
          this.showSheet('inactive');
        } else {
          this.showSheet('selected');
        }
      },
      click: function() {
        this.host.goToPath('apps/%@'.fmt(this.config.name));
        this.showSheet('selected');
      }
    },

    launch: function(host, config) {

      var context = $.extend({}, config, {
        template: this.template('iframe'),
        classNames: 'custom'
      });

      var paneContext = $.extend({}, context);

      host.addPane(paneContext);
    }
  });

}());
