$(document).ready(function(){
  $('html').easeScroll({
    animationTime: 2000,
  });
  
  $('.box .btn').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')){
      $(this).removeClass('on');
      $(this).next().slideUp();
    }else{
      $(this).addClass('on');
      $(this).next().slideDown();
    }
  });

  $('#container1').highcharts({
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      }
    },

  tooltip: {
    borderWidth: 0,
    shadow: false,
    useHTML: true,
    formatter: function () {
        return '<div class="wide-tooltip"><div class="tit">상단머리말<span>'+ this.x +' dataTest</span></div></div>';
    },
    positioner: function(labelWidth, labelHeight, point) {
      var tooltipX = point.plotX + 15;
      var tooltipY = point.plotY - 75;
      return {
          x: tooltipX,
          y: tooltipY
      };
  }
},

  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }, {
      data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
  }]
  });
  $('#container2').highcharts({
    chart: {
      type: 'spline',
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1
      }
    },

  tooltip: {
    borderWidth: 0,
    shadow: false,
    useHTML: true,
    formatter: function () {
        return '<div class="wide-tooltip"><div class="tit">상단머리말<span>'+ this.x +' dataTest</span></div></div>';
    },
    positioner: function(labelWidth, labelHeight, point) {
      var tooltipX = point.plotX + 15;
      var tooltipY = point.plotY - 75;
      return {
          x: tooltipX,
          y: tooltipY
      };
  }
},

  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },

  series: [{
      data: [29.9, 71.5, 10.4, 129.2, 184.0, 136.0, 85.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }, {
      data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4]
  }]
  });
});

