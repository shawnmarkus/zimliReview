import { closeSnackbar, enqueueSnackbar } from "notistack";

import { SNACKBAR_DURATION } from "@/app/utils/defaults";

export default {
  success(msg) {
    this.toast(msg, "success");
  },
  warning(msg) {
    this.toast(msg, "warning");
  },
  info(msg) {
    this.toast(msg, "info");
  },
  error(msg) {
    this.toast(msg, "error");
  },
  toast(msg, variant = "default") {
    enqueueSnackbar(msg, {
      variant,
      autoHideDuration: SNACKBAR_DURATION,
    });
  },
  savingToast(msg = "Saving your data please wait", variant = "info") {
    enqueueSnackbar(msg, {
      variant,
      persist: true,
    });
  },
  hideToast() {
    closeSnackbar(useSnackbarRef.current);
  },
};
