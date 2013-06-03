(function() {

  return {

    defaultState: 'iframe',

    events: {
      'app.activated':  'appActivated'
    },

    appActivated: function(data) {
      if (data.firstLoad && this.currentLocation() === 'nav_bar') {
        this.setIconState('active', this.setting('selectedIconURL'));
        this.setIconState('inactive', this.setting('inactiveIconURL'));
        this.setIconState('hover', this.setting('hoverIconURL'));
      }
    }

  };

}());
