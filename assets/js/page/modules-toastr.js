"use strict";

$("#toastr-1").click(function() {
  toastr.info('This awesome plugin is made toastr toastr', 'Hello, world!')
});

$("#toastr-2").click(function() {
  toastr.success('Have fun storming the castle!', 'Miracle Max Says')
});

$("#toastr-3").click(function() {
  toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
});

$("#toastr-4").click(function() {
  toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
});

$("#toastr-5").click(function() {
  toastr.options.positionClass = 'toast-bottom-right';
  toastr.info('This awesome plugin is made toastr toastr', 'Hello, world!')
});

$("#toastr-6").click(function() {
  toastr.options.positionClass = 'toast-bottom-center';
  toastr.success('Have fun storming the castle!', 'Miracle Max Says')
});

$("#toastr-7").click(function() {
  toastr.options.positionClass = 'toast-bottom-left';
  toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
});

$("#toastr-8").click(function() {
  toastr.options.positionClass = 'toast-top-center';
  toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
});
