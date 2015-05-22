function Avatar(config) {
    function generateBitmap(rows, cols) {
        var bitmap = [];

        function generateRow() {
        	var row = [];
        	// Add random bit for half of each row
        	for(var i = 0; i < cols/2; i++) { row.push(randomBit()); }
        	// Then mirror the previous sequence
        	row.slice(0).reverse().forEach(function(e) { row.push(e); });
        	return row;
        }

        // Add rows to bitmap
        for(var i = 0; i < rows; i++) { bitmap.push(generateRow()); }

        renderBitmap(bitmap);

        return bitmap;
    }

    function renderBitmap(bitmap) {
    	var parentElement = document.querySelector(config.parent),
    		randomColor = getRandomColor();
    	bitmap.forEach(function(row) {
    		var rowElement = document.createElement('div');
    		rowElement.style.float = 'left';
    		rowElement.style.clear = 'both';

    		row.forEach(function(e, i) {
    			var pixelElement = document.createElement(config.pixels.element);
    			pixelElement.style.display = 'block';
    			pixelElement.style.float = 'left';
    			if(e == 1) {
    				pixelElement.classList.add(config.pixels.class);
    				pixelElement.style.background = (config.pixels.color) ? config.pixels.color : randomColor;
    			} else {
    				pixelElement.classList.add(config.pixels.class);
    			}
    			rowElement.appendChild(pixelElement);
    		})
    		parentElement.appendChild(rowElement);
    	});
    }

    function randomBit() {
        return Math.round(Math.random());
    }

    function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

    generateBitmap(config.rows, config.columns);
}