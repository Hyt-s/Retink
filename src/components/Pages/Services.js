import order from "../../assets/order.png";
import createIcon from "../../assets/createIcon.png";
import download from "../../assets/download-icon.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
  <section className=" py-20  text-black-black3">
    <div className=" flex flex-col text-center w-11/12 items-center m-auto">
        <h2 className="mb-20 text-3xl sm:text-4xl lg:text-5xl font-extrabold">HOW IT WORKS</h2>
        <div className="flex flex-row flex-wrap mb-20 w-full space-y-10">
            <div className="max-w-xs overflow-hidden m-auto"><img className="object-contain m-auto"
                    src={order} alt="Flower and sky" width="64px" height="64px" />
                <div className="px-6 py-4">
                    <h3 className="mb-3 text-2xl font-semibold tracking-tight ">Order</h3>
                    <p
                        className="leading-normal  w-48 text-lg sm:text-xl font-medium text-black-black3">
                        Select desired service that fits your business and project content needs</p>
                </div>
            </div>
            <div className="max-w-xs overflow-hidden mx-auto"><img className="object-contain m-auto"
                    src={createIcon} alt="Flower and sky" width="78px" height="68px" />
                <div className="px-6 py-4">
                    <h3 className="mb-3 text-2xl font-semibold tracking-tight ">Create</h3>
                    <p className="leading-normal  w-48 text-lg sm:text-xl font-medium ">Add content
                        details and features withAI support.</p>
                </div>
            </div>
            <div className="max-w-xs overflow-hidden m-auto my-0"><img className="object-contain m-auto"
                    src={download} alt="Flower and sky" width="64px"
                    height="64px" />
                <div className="px-6 py-4">
                    <h3 className="mb-3 text-2xl font-semibold tracking-tight ">Download or Share</h3>
                    <p className="leading-normal  w-48 text-lg sm:text-xl font-medium ">Download
                        delivered content and share to social media.</p>
                </div>
            </div>
        </div>
        <div>
          <button
              className="mx-auto py-3 px-6 text-xs text-white text-lg transition-colors duration-150 bg-purple-500 rounded-xl focus:shadow-outline hover:bg-purple-300 hover:opacity-6 w-max md:mx-0 mb-3">
              <Link to={"/"}>
                Let’s start creating
              </Link>
          </button>
          <br/>
          <p className="inline-flex items-center m-auto md:m-0 text-base text-black-black3">From as low as
              $30</p>
        </div>
      </div>
  </section>
  );
};

export default Services;
