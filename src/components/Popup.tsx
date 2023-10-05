import { CSSProperties, FC, useEffect, useRef } from "react";

import { motion } from "framer-motion";

interface PopupProps {
  onConfirm: () => void;
  children?: React.ReactNode;
}
const Popup: FC<PopupProps> = ({ onConfirm, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onConfirm();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onConfirm]);
  const modalOverlayStyle: CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "10",
  };

  const modalContentStyle: CSSProperties = {
    borderRadius: "8px",
  };
  return (
    <div style={modalOverlayStyle}>
      <motion.div animate={{ y: 10 }} ref={modalRef} style={modalContentStyle}>
        {children}
      </motion.div>
    </div>
  );
};

export default Popup;
