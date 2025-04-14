import { Icon } from "@iconify/react";

export default function Rightside() {

  const scrillToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  };

  return (
    <>
      <div id="rightside" className="rightside right-10 bottom-10 fixed flex flex-col gap-1 items-center">

        <div className="buttonGroups">
          <div className="buttonNav flex flex-col">
            <button className="w-10 h-10 bg-white shadow-md hover:shadow-lg">
              <Icon icon="material-symbols-light:dark-mode-rounded" width={30} height={30} className="m-auto" />
            </button>
            <button className="w-10 h-10 bg-white shadow-md hover:shadow-lg">繁</button>
            <button className="w-10 h-10 bg-white shadow-md hover:shadow-lg">
              <Icon icon="material-symbols-light:comment-outline" width={30} height={30} className="m-auto" />
            </button>
          </div>
          <button className="w-10 h-10 mt-1 bg-white shadow-md hover:shadow-lg">
            <Icon icon="material-symbols-light:settings" width={30} height={30} className="m-auto animate-spin" />
          </button>
        </div>

        <button onClick={scrillToTop} className="w-10 h-10 bg-white shadow-md hover:shadow-lg">
          <Icon icon="material-symbols-light:vertical-align-top-rounded" width={35} height={35} className="m-auto" />
        </button>

      </div>
    </>
  );
}
