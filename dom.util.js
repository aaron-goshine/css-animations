Element.prototype.hasClassName = function (className) {
  return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(this.className);
};

Element.prototype.addClassName = function (className) {
  if (!this.hasClassName(className)) {
    this.className = [this.className, className].join(' ');
  }
};

Element.prototype.removeClassName = function (className) {
  if (this.hasClassName(className)) {
    var localClassName = this.className;
    this.className = localClassName.replace(new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)'), ' ');
  }
};

Element.prototype.toggleClassName = function (className) {
  this[this.hasClassName(className) ? 'removeClassName' : 'addClassName'](className);
};
