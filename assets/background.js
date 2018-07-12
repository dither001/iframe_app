var client = ZAFClient.init()
var symbolRegex = /:(.*):/

client.on('app.registered', function (context) {
  var settings = context.metadata.settings

  client.get('instances').then(function(data) {
    var instanceId

    Object.keys(data.instances).forEach(function(key) {
      if (data.instances[key].location === 'nav_bar') {
        instanceId = key
      }
    })

    setIcon(client.instance(instanceId), settings)
  })
})

function setIcon(client, settings) {
  var match = settings.icon.match(symbolRegex)

  if (match) {
    var iconName = match[1].replace('zd-svg-icon-16-', '').replace('zd-svg-icon-26-', '')
    client.set('iconSymbol', iconName)
  } else {
    iconChars = settings.icon.trim().slice(0, 2).toUpperCase()
    client.invoke('iconChars', iconChars)
  }
}

// For testing
if (typeof module !== 'undefined') { module.exports = { setIcon: setIcon } }
