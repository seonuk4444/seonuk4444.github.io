function format(d) {
  // `d` is the original data object for the row
  return (
      '<table cellpadding="5" cellspacing="0" border="0" class="innerTable">' +
      '<tr>' +
      '<td class="title">Full name</td>' +
      '<td>' +
      d.name +
      '</td>' +
      '</tr>' +
      '<tr>' +
      '<td class="title">Extension number</td>' +
      '<td>' +
      d.extn +
      '</td>' +
      '</tr>' +
      '<tr>' +
      '<td class="title">Extra info</td>' +
      '<td>And any further details here (images etc)...</td>' +
      '</tr>' +
      '</table>'
  );
}
$(document).ready(function(){
  //example1
  $('#example1').DataTable({
    "scrollY": '200px',
    "dom": 'Blfrtip',
    "buttons": [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ],
    "columnDefs": [
      { className: "alignC", "targets": [ 3 ] },
      { className: "alignC", "targets": [ 4 ] },
    ],
    "language": {
      "lengthMenu": "_MENU_ 개씩보기",
      "zeroRecords": "데이터가 없습니다",
      "sSearch": "",//검색라벨 제어
      "searchPlaceholder": "검색어를 입력하세요"
      //"info": "Showing page _PAGE_ of _PAGES_",
      //"infoEmpty": "No records available",
      //"infoFiltered": "(filtered from _MAX_ total records)"
    },


    // 표시 건수기능
    //lengthChange: false,
    // 검색 기능
    //searching: false,
    // 정렬 기능
    //ordering: false,
    // 정보 표시
    info: false,
    // 페이징 기능
    //paging: false
  });

  //example2
  var table = $('#example2').DataTable({
    ajax: '../data/object.txt',
    "columnDefs": [
      { className:"alignC cellToggle", "targets": [ 0 ] },
      { className:"brn", "targets": [ 1 ] },
    ],
    "language": {
      "lengthMenu": "_MENU_ 개씩보기",
      "zeroRecords": "데이터가 없습니다",
      "sSearch": "",//검색라벨 제어
      "searchPlaceholder": "검색어를 입력하세요"
      //"info": "Showing page _PAGE_ of _PAGES_",
      //"infoEmpty": "No records available",
      //"infoFiltered": "(filtered from _MAX_ total records)"
    },
    columns: [
        {
            className: 'dt-control',
            orderable: false,
            data: null,
            defaultContent: '',
        },
        { data: 'name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'salary' },
    ],
    order: [[1, 'asc']],
});

// Add event listener for opening and closing details
$('#example2 tbody').on('click', 'td.dt-control', function () {
    var tr = $(this).closest('tr');
    var row = table.row(tr);

    if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    } else {
        // Open this row
        row.child(format(row.data())).show();
        tr.addClass('shown');
    }
});


});

