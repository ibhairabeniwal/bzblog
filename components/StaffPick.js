import React from "react";

function StaffPick() {
  return (
    <div className="flex items-center space-x-2 font-semibold text-base text-[#333] cursor-pointer">
      <IconMain />
      <span>Staff Pick</span>
    </div>
  );
}

export default StaffPick;
function IconMain() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="11"
      viewBox="0 0 12 11"
    >
      <path
        fill="#333"
        d="M344.974,430.608a16.732,16.732,0,0,1,10.71-2.439.261.261,0,0,1,.233.26c.115,4.944-2.28,8.018-5,10.481-.094.075-.262.224-.43.035l-6.516-7.4a.213.213,0,0,1,.047-.318c.113-.093.956-.617.956-.616"
        transform="translate(-343.921 -428.037)"
      />
    </svg>
  );
}
