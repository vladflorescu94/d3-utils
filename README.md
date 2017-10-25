# d3-utils
Utility functions for D3 V4

## Installation
```bash
npm install git+ssh://git@github.com:vladflorescu94/d3-utils.git
```

## Usage
#### initSvg(container, { width, height, margin })
Create a <b>\<svg\></b> with given width and height inside <b>container</b>. 
Inside it, create a <b>\<g\></b> with same dimensions minus given <b>margin</b>.

```javascript
selection.each(function selFn(data) {
  const { g, chartWidth, chartHeight } = initSvg(d3.select(this), { width, height, margin });
}
```

#### selectionOr(fn, selection)
If selection is empty return the result of <b>fn</b>, otherwise return selection.

```javascript
const arc = selectionOr(() => {
  return g.append('path').attr('class', 'arc');
}, g.select('path.arc'));
```

This is an alternative to the less functional:

```javascript
let arc = g.select('path.arc'); 
if (arc.empty()) {
  arc = g.append('path').attr('class', 'arc');
}
````
