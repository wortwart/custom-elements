// Custom-Element <mein-link>
var meinProto = Object.create(HTMLAnchorElement.prototype);
meinProto.createdCallback = function() {
  this.style.cursor = "pointer";
  this.style.color = "blue";
  this.style.textDecoration = "underline";
  this.addEventListener("click", this.link);
  if (!this.attributes["href"]) {
    var href = document.createAttribute("href");
    href.value = "http://ct.de/";
    this.setAttributeNode(href);
  }
};
meinProto.link = function() {
  document.location.href = this.attributes["href"].value;
};
document.register('mein-link', {
  prototype: meinProto
});

// Type Extension <a is="dein-link">
var deinProto = Object.create(HTMLAnchorElement.prototype);
deinProto.createdCallback = function() {
  if (!this.attributes["href"]) {
    var href = document.createAttribute("href");
    href.value = "http://woerter.de/";
    this.setAttributeNode(href);
  }
};
document.register('dein-link', {
  prototype: deinProto,
  extends: "a"
});

// Custom-Element mit Template
var protoTemplate = Object.create(HTMLElement.prototype);
protoTemplate.createdCallback = function() {
  var t = document.querySelector('#sdtemplate');
  this.createShadowRoot().appendChild(t.content.cloneNode(true));
}
document.register('x-template', {prototype: protoTemplate});
