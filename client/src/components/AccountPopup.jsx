import { useEffect, useState } from "react";

const AccountPopup = ({ acctPopupVisible }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (acctPopupVisible) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300);
    }
  }, [acctPopupVisible]);

  return (
    visible && (
      <div
        className={`bg-slate-900 h-38 min-w-80 absolute top-[-150px] left-[10px] rounded-3xl transition-all duration-300 ${
          acctPopupVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5"
        }`}
      >
        <div>Popup</div>
      </div>
    )
  );
};

export default AccountPopup;
