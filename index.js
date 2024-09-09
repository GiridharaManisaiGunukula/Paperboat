
  function showToast(type,message) {
    // Clear any existing toasts
    toastr.remove();

    // Set the toast options
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "positionClass": "toast-bottom-right", // Position toast at bottom right
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };

    // Show the toast based on the type
    if (type === 0) {
      toastr.options.toastClass = 'toast-error'; // Apply custom error class
    //   toastr.error('Error - Danger color', 'Error');
      toastr.error(`${message}`, 'Paper Boat Technologies');
    } else if (type === 1) {
      toastr.options.toastClass = 'toast-success'; // Apply custom success class
      toastr.success(`${message}`, 'Paper Boat Technologies');
    } else {
      toastr.info('Invalid type passed');
    }
  }

