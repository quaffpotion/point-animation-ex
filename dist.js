function draw() {
  var t = canvas.node().getContext('2d');
  t.save(), t.clearRect(0, 0, width, height);
  for (var i = 0; i < points.length; ++i) {
    var n = points[i];
    (t.fillStyle = n.color), t.fillRect(n.x, n.y, pointWidth, pointWidth);
  }
  t.restore();
}

function animate(t) {
  points.forEach(function(t) {
    (t.sx = t.x), (t.sy = t.y);
  }),
    t(points),
    points.forEach(function(t) {
      (t.tx = t.x), (t.ty = t.y);
    }),
    (timer = d3.timer(function(t) {
      var i = Math.min(1, ease(t / duration));
      points.forEach(function(t) {
        (t.x = t.sx * (1 - i) + t.tx * i), (t.y = t.sy * (1 - i) + t.ty * i);
      }),
        draw(),
        1 === i &&
          (timer.stop(),
          (currLayout = (currLayout + 1) % layouts.length),
          animate(layouts[currLayout]));
    }));
}
var width = 600,
  height = 600,
  numPoints = 7e3,
  pointWidth = 4,
  pointMargin = 3,
  duration = 1500,
  ease = d3.easeCubic,
  timer,
  currLayout = 0,
  points = createPoints(numPoints, pointWidth, width, height),
  toGrid = function(t) {
    return gridLayout(t, pointWidth + pointMargin, width);
  },
  toSine = function(t) {
    return sineLayout(t, pointWidth + pointMargin, width, height);
  },
  toSpiral = function(t) {
    return spiralLayout(t, pointWidth + pointMargin, width, height);
  },
  toPhyllotaxis = function(t) {
    return phyllotaxisLayout(
      t,
      pointWidth + pointMargin,
      width / 2,
      height / 2
    );
  },
  layouts = [toSine, toPhyllotaxis, toSpiral, toPhyllotaxis, toGrid],
  screenScale = window.devicePixelRatio || 1,
  canvas = d3
    .select('body')
    .append('canvas')
    .attr('width', width * screenScale)
    .attr('height', height * screenScale)
    .style('width', width + 'px')
    .style('height', height + 'px')
    .on('click', function() {
      d3.select('.play-control').style('display', ''), timer.stop();
    });
canvas
  .node()
  .getContext('2d')
  .scale(screenScale, screenScale),
  toGrid(points),
  draw(),
  d3
    .select('body')
    .append('div')
    .attr('class', 'play-control')
    .text('PLAY')
    .on('click', function() {
      animate(layouts[currLayout]), d3.select(this).style('display', 'none');
    });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJkcmF3IiwiY29uc3QiLCJjdHgiLCJjYW52YXMiLCJub2RlIiwiZ2V0Q29udGV4dCIsInNhdmUiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImxldCIsImkiLCJwb2ludHMiLCJsZW5ndGgiLCJwb2ludCIsImZpbGxTdHlsZSIsImNvbG9yIiwiZmlsbFJlY3QiLCJ4IiwieSIsInBvaW50V2lkdGgiLCJyZXN0b3JlIiwiYW5pbWF0ZSIsImxheW91dCIsImZvckVhY2giLCJzeCIsInN5IiwidHgiLCJ0eSIsInRpbWVyIiwiZDMiLCJlbGFwc2VkIiwidCIsIk1hdGgiLCJtaW4iLCJlYXNlIiwiZHVyYXRpb24iLCJzdG9wIiwiY3VyckxheW91dCIsImxheW91dHMiLCJudW1Qb2ludHMiLCJwb2ludE1hcmdpbiIsImVhc2VDdWJpYyIsImNyZWF0ZVBvaW50cyIsInRvR3JpZCIsImdyaWRMYXlvdXQiLCJ0b1NpbmUiLCJzaW5lTGF5b3V0IiwidG9TcGlyYWwiLCJzcGlyYWxMYXlvdXQiLCJ0b1BoeWxsb3RheGlzIiwicGh5bGxvdGF4aXNMYXlvdXQiLCJzY3JlZW5TY2FsZSIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJvbiIsInNjYWxlIiwidGV4dCIsInRoaXMiXSwibWFwcGluZ3MiOiJBQWdDQSxRQUFTQSxRQUNQQyxHQUFNQyxHQUFNQyxPQUFPQyxPQUFPQyxXQUFXLEtBQ3JDSCxHQUFJSSxPQUdKSixFQUFJSyxVQUFVLEVBQUcsRUFBR0MsTUFBT0MsT0FHM0IsS0FBS0MsR0FBSUMsR0FBSSxFQUFHQSxFQUFJQyxPQUFPQyxTQUFVRixFQUFHLENBQ3RDVixHQUFNYSxHQUFRRixPQUFTRCxFQUN2QlQsR0FBSWEsVUFBWUQsRUFBTUUsTUFDdEJkLEVBQUllLFNBQVNILEVBQU1JLEVBQUdKLEVBQU1LLEVBQUdDLFdBQVlBLFlBRzdDbEIsRUFBSW1CLFVBSU4sUUFBU0MsU0FBUUMsR0FFZlgsT0FBT1ksUUFBUSxTQUFBVixHQUNiQSxFQUFNVyxHQUFLWCxFQUFNSSxFQUNqQkosRUFBTVksR0FBS1osRUFBTUssSUFJbkJJLEVBQU9YLFFBR1BBLE9BQU9ZLFFBQVEsU0FBQVYsR0FDYkEsRUFBTWEsR0FBS2IsRUFBTUksRUFDakJKLEVBQU1jLEdBQUtkLEVBQU1LLElBR25CVSxNQUFRQyxHQUFHRCxNQUFNLFNBQUFFLEdBRWY5QixHQUFPK0IsR0FBR0MsS0FBS0MsSUFBSyxFQUFFQyxLQUFLSixFQUFVSyxVQUdyQ3hCLFFBQU9ZLFFBQVEsU0FBQVYsR0FDYkEsRUFBTUksRUFBSUosRUFBTVcsSUFBTSxFQUFJTyxHQUFLbEIsRUFBTWEsR0FBS0ssRUFDMUNsQixFQUFNSyxFQUFJTCxFQUFNWSxJQUFNLEVBQUlNLEdBQUtsQixFQUFNYyxHQUFLSSxJQUk1Q2hDLE9BR1UsSUFBTmdDLElBRUZILE1BQU1RLE9BR05DLFlBQWNBLFdBQWEsR0FBS0MsUUFBUTFCLE9BR3hDUyxRQUFRaUIsUUFBUUQsZ0JBdkZ0QnJDLEdBQU1PLE9BQVEsSUFDUkMsT0FBUyxJQUdUK0IsVUFBWSxJQUNacEIsV0FBZSxFQUNmcUIsWUFBZ0IsRUFHaEJMLFNBQVcsS0FDWEQsS0FBU0wsR0FBQ1ksVUFDWmIsTUFDQVMsV0FBYSxFQUdYMUIsT0FBUytCLGFBQWFILFVBQVdwQixXQUFZWixNQUFPQyxRQUdwRG1DLE9BQVMsU0FBQWhDLEdBQUMsTUFBQWlDLFlBQVFqQyxFQUN0QlEsV0FBYXFCLFlBQWFqQyxRQUN0QnNDLE9BQVMsU0FBQWxDLEdBQUMsTUFBQW1DLFlBQVFuQyxFQUN0QlEsV0FBYXFCLFlBQWFqQyxNQUFPQyxTQUM3QnVDLFNBQVcsU0FBQXBDLEdBQUMsTUFBQXFDLGNBQVdyQyxFQUMzQlEsV0FBYXFCLFlBQWFqQyxNQUFPQyxTQUM3QnlDLGNBQWdCLFNBQUF0QyxHQUFDLE1BQUF1QyxtQkFBV3ZDLEVBQ2hDUSxXQUFhcUIsWUFBYWpDLE1BQVEsRUFBR0MsT0FBUyxJQUcxQzhCLFNBQVdPLE9BQVFJLGNBQWVGLFNBQVVFLGNBQWVOLFFBaUUzRFEsWUFBY0MsT0FBT0Msa0JBQXNCLEVBQzNDbkQsT0FBVzJCLEdBQUN5QixPQUFPLFFBQVFDLE9BQU8sVUFDckNDLEtBQUssUUFBU2pELE1BQVE0QyxhQUN0QkssS0FBSyxTQUFVaEQsT0FBUzJDLGFBQ3hCTSxNQUFNLFFBQVNsRCxNQUFRLE1BQ3ZCa0QsTUFBTSxTQUFVakQsT0FBUyxNQUN6QmtELEdBQUcsUUFBUyxXQUNYN0IsR0FBR3lCLE9BQU8saUJBQWlCRyxNQUFNLFVBQVcsSUFDNUM3QixNQUFNUSxRQUVWbEMsUUFBT0MsT0FBT0MsV0FBVyxNQUFNdUQsTUFBTVIsWUFBYUEsYUFHbERSLE9BQU9oQyxRQUNQWixPQUVBOEIsR0FBR3lCLE9BQU8sUUFBUUMsT0FBTyxPQUN0QkMsS0FBSyxRQUFTLGdCQUNkSSxLQUFLLFFBQ0xGLEdBQUcsUUFBUyxXQUVYckMsUUFBUWlCLFFBQVFELGFBR2hCUixHQUFHeUIsT0FBT08sTUFBTUosTUFBTSxVQUFXIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNhbnZhcyBzZXR0aW5nc1xuY29uc3Qgd2lkdGggPSA2MDA7XG5jb25zdCBoZWlnaHQgPSA2MDA7XG5cbi8vIHBvaW50IHNldHRpbmdzXG5jb25zdCBudW1Qb2ludHMgPSA3MDAwO1xuY29uc3QgcG9pbnRXaWR0aCA9IDQ7XG5jb25zdCBwb2ludE1hcmdpbiA9IDM7XG5cbi8vIGFuaW1hdGlvbiBzZXR0aW5nc1xuY29uc3QgZHVyYXRpb24gPSAxNTAwO1xuY29uc3QgZWFzZSA9IGQzLmVhc2VDdWJpYztcbmxldCB0aW1lcjtcbmxldCBjdXJyTGF5b3V0ID0gMDtcblxuLy8gY3JlYXRlIHNldCBvZiBwb2ludHNcbmNvbnN0IHBvaW50cyA9IGNyZWF0ZVBvaW50cyhudW1Qb2ludHMsIHBvaW50V2lkdGgsIHdpZHRoLCBoZWlnaHQpO1xuXG4vLyB3cmFwIGxheW91dCBoZWxwZXJzIHNvIHRoZXkgb25seSB0YWtlIHBvaW50cyBhcyBhbiBhcmd1bWVudFxuY29uc3QgdG9HcmlkID0gKHBvaW50cykgPT4gZ3JpZExheW91dChwb2ludHMsXG4gIHBvaW50V2lkdGggKyBwb2ludE1hcmdpbiwgd2lkdGgpO1xuY29uc3QgdG9TaW5lID0gKHBvaW50cykgPT4gc2luZUxheW91dChwb2ludHMsXG4gIHBvaW50V2lkdGggKyBwb2ludE1hcmdpbiwgd2lkdGgsIGhlaWdodCk7XG5jb25zdCB0b1NwaXJhbCA9IChwb2ludHMpID0+IHNwaXJhbExheW91dChwb2ludHMsXG4gIHBvaW50V2lkdGggKyBwb2ludE1hcmdpbiwgd2lkdGgsIGhlaWdodCk7XG5jb25zdCB0b1BoeWxsb3RheGlzID0gKHBvaW50cykgPT4gcGh5bGxvdGF4aXNMYXlvdXQocG9pbnRzLFxuICBwb2ludFdpZHRoICsgcG9pbnRNYXJnaW4sIHdpZHRoIC8gMiwgaGVpZ2h0IC8gMik7XG5cbi8vIHN0b3JlIHRoZSBsYXlvdXRzIGluIGFuIGFycmF5IHRvIHNlcXVlbmNlIHRocm91Z2hcbmNvbnN0IGxheW91dHMgPSBbdG9TaW5lLCB0b1BoeWxsb3RheGlzLCB0b1NwaXJhbCwgdG9QaHlsbG90YXhpcywgdG9HcmlkXTtcblxuLy8gZHJhdyB0aGUgcG9pbnRzIGJhc2VkIG9uIHRoZWlyIGN1cnJlbnQgbGF5b3V0XG5mdW5jdGlvbiBkcmF3KCkge1xuICBjb25zdCBjdHggPSBjYW52YXMubm9kZSgpLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5zYXZlKCk7XG5cbiAgLy8gZXJhc2Ugd2hhdCBpcyBvbiB0aGUgY2FudmFzIGN1cnJlbnRseVxuICBjdHguY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gIC8vIGRyYXcgZWFjaCBwb2ludCBhcyBhIHJlY3RhbmdsZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBvaW50ID0gcG9pbnRzW2ldO1xuICAgIGN0eC5maWxsU3R5bGUgPSBwb2ludC5jb2xvcjtcbiAgICBjdHguZmlsbFJlY3QocG9pbnQueCwgcG9pbnQueSwgcG9pbnRXaWR0aCwgcG9pbnRXaWR0aCk7XG4gIH1cblxuICBjdHgucmVzdG9yZSgpO1xufVxuXG4vLyBhbmltYXRlIHRoZSBwb2ludHMgdG8gYSBnaXZlbiBsYXlvdXRcbmZ1bmN0aW9uIGFuaW1hdGUobGF5b3V0KSB7XG4gIC8vIHN0b3JlIHRoZSBzb3VyY2UgcG9zaXRpb25cbiAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgIHBvaW50LnN4ID0gcG9pbnQueDtcbiAgICBwb2ludC5zeSA9IHBvaW50Lnk7XG4gIH0pO1xuXG4gIC8vIGdldCBkZXN0aW5hdGlvbiB4IGFuZCB5IHBvc2l0aW9uIG9uIGVhY2ggcG9pbnRcbiAgbGF5b3V0KHBvaW50cyk7XG5cbiAgLy8gc3RvcmUgdGhlIGRlc3RpbmF0aW9uIHBvc2l0aW9uXG4gIHBvaW50cy5mb3JFYWNoKHBvaW50ID0+IHtcbiAgICBwb2ludC50eCA9IHBvaW50Lng7XG4gICAgcG9pbnQudHkgPSBwb2ludC55O1xuICB9KTtcblxuICB0aW1lciA9IGQzLnRpbWVyKChlbGFwc2VkKSA9PiB7XG4gICAgLy8gY29tcHV0ZSBob3cgZmFyIHRocm91Z2ggdGhlIGFuaW1hdGlvbiB3ZSBhcmUgKDAgdG8gMSlcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgZWFzZShlbGFwc2VkIC8gZHVyYXRpb24pKTtcblxuICAgIC8vIHVwZGF0ZSBwb2ludCBwb3NpdGlvbnMgKGludGVycG9sYXRlIGJldHdlZW4gc291cmNlIGFuZCB0YXJnZXQpXG4gICAgcG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xuICAgICAgcG9pbnQueCA9IHBvaW50LnN4ICogKDEgLSB0KSArIHBvaW50LnR4ICogdDtcbiAgICAgIHBvaW50LnkgPSBwb2ludC5zeSAqICgxIC0gdCkgKyBwb2ludC50eSAqIHQ7XG4gICAgfSk7XG5cbiAgICAvLyB1cGRhdGUgd2hhdCBpcyBkcmF3biBvbiBzY3JlZW5cbiAgICBkcmF3KCk7XG5cbiAgICAvLyBpZiB0aGlzIGFuaW1hdGlvbiBpcyBvdmVyXG4gICAgaWYgKHQgPT09IDEpIHtcbiAgICAgIC8vIHN0b3AgdGhpcyB0aW1lciBmb3IgdGhpcyBsYXlvdXQgYW5kIHN0YXJ0IGEgbmV3IG9uZVxuICAgICAgdGltZXIuc3RvcCgpO1xuXG4gICAgICAvLyB1cGRhdGUgdG8gdXNlIG5leHQgbGF5b3V0XG4gICAgICBjdXJyTGF5b3V0ID0gKGN1cnJMYXlvdXQgKyAxKSAlIGxheW91dHMubGVuZ3RoO1xuXG4gICAgICAvLyBzdGFydCBhbmltYXRpb24gZm9yIG5leHQgbGF5b3V0XG4gICAgICBhbmltYXRlKGxheW91dHNbY3VyckxheW91dF0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGNyZWF0ZSB0aGUgY2FudmFzXG5jb25zdCBzY3JlZW5TY2FsZSA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG5jb25zdCBjYW52YXMgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ2NhbnZhcycpXG4gIC5hdHRyKCd3aWR0aCcsIHdpZHRoICogc2NyZWVuU2NhbGUpXG4gIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQgKiBzY3JlZW5TY2FsZSlcbiAgLnN0eWxlKCd3aWR0aCcsIGAke3dpZHRofXB4YClcbiAgLnN0eWxlKCdoZWlnaHQnLCBgJHtoZWlnaHR9cHhgKVxuICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGQzLnNlbGVjdCgnLnBsYXktY29udHJvbCcpLnN0eWxlKCdkaXNwbGF5JywgJycpO1xuICAgIHRpbWVyLnN0b3AoKTtcbiAgfSk7XG5jYW52YXMubm9kZSgpLmdldENvbnRleHQoJzJkJykuc2NhbGUoc2NyZWVuU2NhbGUsIHNjcmVlblNjYWxlKTtcblxuLy8gc3RhcnQgb2ZmIGFzIGEgZ3JpZFxudG9HcmlkKHBvaW50cyk7XG5kcmF3KCk7XG5cbmQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnZGl2JylcbiAgLmF0dHIoJ2NsYXNzJywgJ3BsYXktY29udHJvbCcpXG4gIC50ZXh0KCdQTEFZJylcbiAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBzdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgYW5pbWF0ZShsYXlvdXRzW2N1cnJMYXlvdXRdKTtcblxuICAgIC8vIHJlbW92ZSB0aGUgcGxheSBjb250cm9sXG4gICAgZDMuc2VsZWN0KHRoaXMpLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfSk7XG4iXX0=
