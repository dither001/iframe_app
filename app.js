(function() {

  return {
    defaultState: 'icons',

    // Local vars
    iframeIsInDOM: false,

    events: {
      'mouseenter': 'iconHover',
      'mouseleave': 'iconInactive',

      paneswitch: function(event, newPane) {
        if (newPane !== this.appTitle()) {
          this.iconInactive(true);
        } else {
          this.iconSelected();
        }
      },

      click: function() {
        if (!this.iframeIsInDOM) { this.addIframeToDOM(); }
        this.host.goToPath(helpers.fmt( 'apps/%@', this.appTitle() ));
        this.iconSelected();
      }
    },

    iconHover: function() {
      if (this.appIsFocused()) { return; }
      this.$('.inactive, .selected').hide();
      this.$('.hover').show();
    },

    iconInactive: function(forceSwitch) {
      if (forceSwitch !== true && this.appIsFocused()) { return; }
      this.$('.selected, .hover').hide();
      this.$('.inactive').show();
    },

    iconSelected: function() {
      this.$('.inactive, .hover').hide();
      this.$('.selected').show();
    },

    appIsFocused: function() {
      return this.$(".selected").is(':visible');
    },

    appTitle: function() {
      return this.setting('title').toLowerCase().split(' ').join('-');
    },

    addIframeToDOM: function() {
      this.host.addPane(this.appTitle(),
        this.renderTemplate('iframe'), { name: this.appTitle() });

      this.iframeIsInDOM = true;
    }
  };

}());
