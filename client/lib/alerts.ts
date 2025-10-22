/**
 * SweetAlert2 wrapper functions for better alerts
 * Uses dynamic imports to avoid adding to bundle unnecessarily
 */

interface AlertOptions {
  title: string;
  text?: string;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  confirmButtonText?: string;
}

let Swal: any = null;

async function loadSwal() {
  if (!Swal) {
    const module = await import('sweetalert2');
    Swal = module.default;
  }
  return Swal;
}

export async function showAlert(options: AlertOptions) {
  const swal = await loadSwal();
  return swal.fire({
    title: options.title,
    text: options.text || '',
    icon: options.icon || 'info',
    confirmButtonText: options.confirmButtonText || 'OK',
    confirmButtonColor: '#06b6d4',
  });
}

export async function showSuccessAlert(title: string, text?: string) {
  return showAlert({
    title,
    text,
    icon: 'success',
    confirmButtonText: 'Great!',
  });
}

export async function showErrorAlert(title: string, text?: string) {
  return showAlert({
    title,
    text,
    icon: 'error',
    confirmButtonText: 'Try Again',
  });
}

export async function showConfirm(title: string, text?: string) {
  const swal = await loadSwal();
  const result = await swal.fire({
    title,
    text: text || '',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#06b6d4',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  });
  return result.isConfirmed;
}

export async function showLoadingAlert(title: string) {
  const swal = await loadSwal();
  swal.fire({
    title,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: async () => {
      swal.showLoading();
    },
  });
  return swal;
}
