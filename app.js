(function() {

  return {
    defaultState: 'inactive',

    // Local vars
    iframeIsInDOM: false,

    events: {
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
        if (!this.iframeIsInDOM) { this.addIframeToDOM(); }
        this.host.goToPath(helpers.fmt( 'apps/%@', this.generateTitle() ));
        this.switchTo('selected');
      }
    },

    generateTitle: function() {
      return this.setting('title').toLowerCase().split(' ').join('-');
    },

    addIframeToDOM: function() {
      this.host.addPane(this.generateTitle(),
        this.renderTemplate('iframe'), { name: this.generateTitle() });

      this.iframeIsInDOM = true;
    }
  };

}());
