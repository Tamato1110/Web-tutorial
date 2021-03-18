$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()/*←取消原本預設的功能*/
    // Step 9 and step 10 code goes here

    $.get('./step5')

    // Step 11 code goes here
  })
});
