import React from "react";
import ReactDOM from "react-dom";

export const Input = React.forwardRef((props, ref) => {
  let classes =
    "w-full text-center rounded-lg bg-neutral-900 text-white " +
    props.className;

  return <input ref={ref} className={classes} {...props.input} />;
});

export const Button = (props) => {
  let classes =
    "transition-colors font-bold rounded-lg shadow-xl " + props.className;

  return (
    <button className={classes} {...props.button}>
      {props.children}
    </button>
  );
};

export const Card = (props) => {
  let classes =
    "bg-amber-300 rounded-2xl text-neutral-900 shadow-lg " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export const Alert = (props) => {
  let classes =
    "rounded-lg bg-red-500 absolute bottom-6 p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.5)] flex gap-2 " +
    props.className;

  return ReactDOM.createPortal(
    <section className="w-[640px] max-w-full mx-auto fixed inset-0 flex justify-center z-50 pointer-events-none">
      <div className={classes}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        {props.message}
      </div>
    </section>,
    document.getElementById("alert-root")
  );
};

export const Modal = (props) => {
  let classes = "rounded-md " + props.className;

  return ReactDOM.createPortal(
    <section className="fixed inset-0 flex justify-center items-center bg-black/75 z-10">
      <div className="w-[640px] max-w-full p-6 mx-auto z-30">
        <div className={classes} {...props.attr}>
          {props.children}
        </div>
      </div>
    </section>,
    document.getElementById("modal-root")
  );
};
