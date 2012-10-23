(function() {

  return {
    defaultState: 'inactive',

    events: {
      'app.activated': 'appActivated',

      'mouseover %inactive': '%hover',
      'mouseout  %hover':    '%inactive',
      paneswitch: function(event, newPane) {
        if (newPane !== this.setting('title')) {
          this.switchTo('inactive');
        } else {
          this.switchTo('selected');
        }
      },
      click: function() {
        this.host.goToPath(helpers.fmt( 'apps/%@', this.setting('title') ));
        this.switchTo('selected');
      }
    },

    appActivated: function(data) {
      if ( data && data.firstLoad ) { this.addIframeToDOM(); }
    },

    addIframeToDOM: function() {
      this.host.addPane(this.setting('title'),
                   this.renderTemplate('iframe'), { name: this.setting('title') });
    }
  };

}());
