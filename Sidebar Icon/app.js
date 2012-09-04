(function() {

  return {
    defaultState: 'inactive',

    events: {
      'app.activated': 'renderIframe',

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

    renderIframe: function() {
      this.host.addPane(this.settings.name,
                   this.renderTemplate('iframe'), { name: this.settings.name });
    }
  };

}());
