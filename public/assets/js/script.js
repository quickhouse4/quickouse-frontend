$(document).ready(function() {
  $('#example').DataTable({
    
    "columnDefs": [
      { "orderable": false, "targets": 5 }
    ],
    serverSide: true,
    searching: true,
    ajax: {
      url: "https://quickhouse.herokuapp.com/api/v1/users",
      dataSrc: function (json) {
        return json.data;
      }
    },
    language: {
      
      'paginate': {
        'previous': '<span class="fa fa-chevron-left"></span>',
        'next': '<span class="fa fa-chevron-right"></span>'
      },

      "lengthMenu": 'Display <select class="form-control input-sm">'+
      '<option value="10">10</option>'+
      '<option value="20">20</option>'+
      '<option value="30">30</option>'+
      '<option value="40">40</option>'+
      '<option value="50">50</option>'+
      '<option value="-1">All</option>'+
      '</select> results'
    }
  })  
  $.fn.dataTable.ext.errMode = 'throw';
} );
