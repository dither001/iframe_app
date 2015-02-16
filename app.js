(function() {

  return {

    events: {
      'app.created': 'init'
    },

    init: function(data) {
      this.setIconState('active', this.setting('selectedIconURL'));
      this.setIconState('inactive', this.setting('inactiveIconURL'));
      this.setIconState('hover', this.setting('hoverIconURL'));

      this.switchTo('iframe', { src: this.setting('iframeURL') })
    }

  };

}());
