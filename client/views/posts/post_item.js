Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.protocol + '//' + a.hostname;
        // Note!
        // <a> element in JS implements the URLUtilsReadOnly interface that provides several read-only properties like protocol, href, hostname, etc.
        
    }
});
