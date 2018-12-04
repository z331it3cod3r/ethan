class Cookie {
  function constructor(cname, cvalue = null, exdays = null) {
    this.name = cname;
    this.value = cvalue;
    this.exdays = exdays;
  }
  function set() {
    try {
      var d = new Date();
      d.setTime(d.getTime() + (this.exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = this.name + "=" + this.value + ";" + expires + ";path=/";
      return true;
    } catch(e) {
      return false;
    }
  }
  function get() {
    var name = this.name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
  }
}
