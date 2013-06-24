(function() {

  return {
    isNewVersion: false,
    firstRun: true,

    // Local vars
    iframeIsInDOM: false,

    events: {
      'app.activated': 'appActivated',
      'mouseenter': 'iconHover',
      'mouseleave': 'iconInactive',
      'pane.activated': 'moveHeader',

      paneswitch: function(event, newPane) {
        if (newPane !== this.appTitle()) {
          this.iconInactive(true);
        } else {
          this.iconSelected();
        }
      },

      click: function() {
        if (this.isNewVersion) { return; }
        if (!this.iframeIsInDOM) { this.addIframeToDOM(); }
        this.host.goToPath(helpers.fmt( 'apps/%@', this.appTitle() ));
        this.iconSelected();
      }
    },

    appActivated: function(data) {
      if (!data.firstLoad) { return; }
      if (_.isFunction(this.host.addPane)) {
        this.switchTo('icons');
      } else {
        this.isNewVersion = true;
        this.setIconState('active', this.setting('selectedIconURL'));
        this.setIconState('inactive', this.setting('inactiveIconURL'));
        this.setIconState('hover', this.setting('hoverIconURL'));
        this.switchTo('iframe');
      }
    },

    moveHeader: function(data){
      if(this.firstRun){
        var $header = this.$('header');
        this.$main().before($header);
        this.firstRun = false;
      }
    },

    iconHover: function() {
      if (this.isNewVersion) { return; }
      if (this.appIsFocused()) { return; }
      this.$('.inactive, .selected').hide();
      this.$('.hover').show();
    },

    iconInactive: function(forceSwitch) {
      if (this.isNewVersion) { return; }
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
