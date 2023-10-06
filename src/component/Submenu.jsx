export default function Submenu({ submenu_name }) {
  console.log(submenu_name);
  return (
    <button className="text-white cursor-pointer mx-4">
      {submenu_name}
    </button>
  );
}
