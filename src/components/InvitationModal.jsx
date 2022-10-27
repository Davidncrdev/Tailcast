import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";

export const InvitationModal = ( { isOpen, setIsOpen }) => (
  <div className="w-full h-full bg-customDarkBgTransparentDarker fixed top-0 left-0 flex justify-center items-center z-50" onClick={() => setIsOpen(false)}>
    <div className="w-[1100px] rounded-2xl bg-customDarkBgTransparentLighter custom-border-gray-darker py-12 px-16 backdrop-blur-xl fixed mb-8" onClick={e => e.stopPropagation()}>
      <div className="flex relative">
        <div className="w-1/2">
          <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-white">
            Build &amp; Launch
          </h2>
          <h2 className="text-5xl font-bold tracking-normal text-customSecondary">
            without problems
          </h2>

          <ul className="mb-6 text-white mt-12">
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Vestibulum viverra</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Morbi mollis metus pretium</span>
            </li>
            <li className="mb-4 flex">
              <CheckArrowIcon />
              <span>Etiam lectus nunc, commodo</span>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex items-center flex-col justify-center">
          <h3 class="mb-7 text-2xl text-white font-bold leading-snug text-center">
            Join 3,953 other marketers
          </h3>
          <div class="flex flex-wrap -m-2">
            <div class="w-4/5 p-2 mx-auto">
              <input
                class="px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                id="newsletterInput3-1"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div class="w-4/5 p-2 mt-4 mx-auto">
              <button
                class="py-4 px-6 w-full text-white font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-customPrimary hover:bg-[#7765e6] transition ease-in-out duration-200"
                type="button"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
        <div className="fixed top-4 right-4 z-50 w-4 h-4 cursor-pointer" onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </div>
      </div>
    </div>
  </div>
);