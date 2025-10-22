import { toast } from "sonner";

interface AlertOptions {
  title: string;
  text?: string;
  type?: "success" | "error" | "info" | "warning";
}

/**
 * Enhanced alert functions using Sonner toast with better styling
 */
export function showSuccessAlert(title: string, text?: string) {
  const message = text ? `${title}\n${text}` : title;
  toast.success(message, {
    duration: 4000,
    position: "top-center",
  });
  return Promise.resolve();
}

export function showErrorAlert(title: string, text?: string) {
  const message = text ? `${title}\n${text}` : title;
  toast.error(message, {
    duration: 4000,
    position: "top-center",
  });
  return Promise.resolve();
}

export function showAlert(options: AlertOptions) {
  const message = options.text
    ? `${options.title}\n${options.text}`
    : options.title;
  const type = options.type || "info";

  if (type === "success") {
    return showSuccessAlert(message);
  } else if (type === "error") {
    return showErrorAlert(message);
  } else if (type === "warning") {
    toast.warning(message, {
      duration: 4000,
      position: "top-center",
    });
  } else {
    toast(message, {
      duration: 4000,
      position: "top-center",
    });
  }

  return Promise.resolve();
}

export function showLoadingAlert(title: string) {
  toast.loading(title, {
    duration: Infinity,
    position: "top-center",
  });
  return Promise.resolve();
}

export async function showConfirm(title: string, text?: string) {
  // Note: Sonner doesn't support confirmation dialogs natively
  // Return true for now, but in production you might want to use a modal
  const confirmed = confirm(`${title}\n${text || ""}`);
  return confirmed;
}
