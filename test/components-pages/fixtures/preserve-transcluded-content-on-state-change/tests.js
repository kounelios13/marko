var path = require('path');
var expect = require('chai').expect;

// Issue: 912

describe(path.basename(__dirname), function() {
    it('should update correctly', function() {
        var component = window.component;
        var $button = component.getEl('button');
        expect($button.innerHTML).to.eql('button label');

        $button.click();
        component.update();
        
        expect($button.innerHTML).to.eql('button label test');
    });
});
