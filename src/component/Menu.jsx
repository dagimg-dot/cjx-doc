import Submenu from "./Submenu";

export default function Menu({
  // state,
  menu_name,
  // submenu_names,
  clickHandler,
}) {
  return (
    <>
      <button
        className="flex cursor-pointer gap-3 text-white items-center px-2 py-4"
        onClick={() => clickHandler(menu_name)}
      >
        <div className="cursor-pointer">{menu_name}</div>
        {/* <div>
          {state[menu_name] ? (
            <svg
              width={16}
              height={16}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          ) : (
            <svg
              width={16}
              height={16}
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          )}
        </div> */}
      </button>
      {/* {state[menu_name] ? (
        <div>
          {<Submenu submenu_name={submenu_names[0]} />}
          <Submenu submenu_name={submenu_names[1]} />
          <Submenu submenu_name={submenu_names[2]} />
          <Submenu submenu_name={submenu_names[3]} />
        </div>
      ) : null} */}

      {/* {submenu_names.map((submenu_item) => {
        // <Submenu key={submenu_item} submenu_name={submenu_item} />;
        console.log(submenu_item)
      })} */}
    </>
  );
}
