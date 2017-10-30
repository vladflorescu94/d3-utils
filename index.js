import * as R from 'ramda';

export const selectionOr = R.curry((callback, selection) => {
  return R.when(sel => sel.empty(), callback, selection);
});

const isPercentage = v => v.toString().indexOf('%') > -1;

const getMargin = (dim, margin) => {
  if (isPercentage(margin)) {
    return dim * (parseInt(margin, 10) / 100);
  }
  return parseInt(margin, 10);
}

const computeDimension = (dimension, marginX, marginY) => {
  return dimension - getMargin(dimension, marginX) - getMargin(dimension, marginY);
}

export const initSvg = (container, { width, height,  margin: argsMargin }) => {
  if (R.isNil(width)) throw new Error('Missing param: width');
  if (R.isNil(height)) throw new Error('Missing param: height');

  const margin = R.merge({ top: 0, bottom: 0, left: 0, right: 0 }, argsMargin);

  const svg = selectionOr(() => {
    return container.append('svg').attr('pointer-events', 'visible');
  }, container.select('svg'));

  svg.attr('width', width).attr('height', height);

  const chartHeight = computeDimension(height, margin.top, margin.bottom);
  const chartWidth = computeDimension(width, margin.left, margin.right);

  const g = selectionOr(() => {
    return svg.append('g').attr('class', 'main');
  }, svg.select('g.main'));

  g.attr('width', chartWidth)
      .attr('height', chartHeight)
      .attr('transform', `translate(${getMargin(width, margin.left)}, ${getMargin(height, margin.top)})`);

  return { svg, g, chartWidth, chartHeight };
}
