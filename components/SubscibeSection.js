import React from "react";

function SubscibeSection() {
  return (
    <div className="flex flex-col background p-4 rounded space-y-5">
      <span className="text">
        When you subscribe to a writer or publication, your email address will
        be shared with them so they can stay in contact with you outside of
        BlexZET.
      </span>
      <div className="flex items-center justify-between bg-white text border rounded-full">
        <input
          className="bg-transparent outline-none px-2 w-full"
          type="email"
          placeholder="subscribe@blexzet.com"
        />
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
}

export default SubscibeSection;
