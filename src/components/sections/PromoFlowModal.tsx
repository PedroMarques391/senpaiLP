import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { ModalSteps } from "./ModalSteps";

enum MODAL {
  NONE = 0,
  PROMO = 1,
  FORM = 2,
  PAYMENT = 3,
  THANKYOU = 4,
}

export default function PromoFlowModal() {
  const [pix, setPix] = useState<string>("");
  const [steps, setSteps] = useState(MODAL.NONE);
  const [countdown, setCountdown] = useState(300);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const claimed = localStorage.getItem("hasClaimed");
    if (!claimed) {
      const timout = setTimeout(() => setSteps(MODAL.PROMO), 350);
      return () => clearTimeout(timout);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      new Promise((resolve) => setTimeout(resolve, 2000));
      const pixKey = await fetch("/api/payment/pix");
      return pixKey.json();
    };

    if (steps === MODAL.PAYMENT) {
      fetchData().then((res) => {
        setPix(res.key);
      });
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            markAsClaimed();
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearTimeout(interval);
    }
    if (steps === MODAL.THANKYOU) {
      const timer = setTimeout(() => {
        markAsClaimed();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [steps]);

  function markAsClaimed() {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("hasClaimed", "true");
    } catch (e) {
      console.error("[PromoModal] Failed to set hasClaimed", e);
    } finally {
      setSteps(MODAL.NONE);
    }
  }

  return (
    <Dialog open={steps !== MODAL.NONE} onOpenChange={markAsClaimed}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="w-[min(92vw,640px)] max-w-lg rounded-3xl bg-gradient-to-br  from-pink-50 via-pink-100 to-purple-50 outline-none focus:outline-none"
      >
        {steps === MODAL.PROMO && (
          <ModalSteps.PROMO handleNextStep={() => setSteps(MODAL.FORM)} onClose={markAsClaimed} />
        )}
        {steps === MODAL.FORM && <ModalSteps.FORM handleNextStep={() => setSteps(MODAL.PAYMENT)} />}
        {steps === MODAL.PAYMENT && (
          <ModalSteps.PAYMENT
            handleNextStep={() => setSteps(MODAL.THANKYOU)}
            pix={pix}
            countdown={countdown}
          />
        )}
        {steps === MODAL.THANKYOU && <ModalSteps.THANKYOU onClose={markAsClaimed} />}
      </DialogContent>
    </Dialog>
  );
}
