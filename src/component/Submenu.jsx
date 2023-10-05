export default function Submenu({ submenu_name, clickHandler }) {
  return (
    <button
      className="text-white cursor-pointer mx-4 block"
      onclick={() => clickHandler(submenu_name)}
    >
      {submenu_name}
    </button>
  );
}
